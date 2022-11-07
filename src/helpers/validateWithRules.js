import _ from 'lodash';
import * as yup from 'yup';

const TypeValidators = {
  string: {
    email: message => yup.string().email(message),
    required: message => yup.string().required(message),
    min: (min, message) => yup.string().min(min, message),
    max: (max, message) => yup.string().max(max, message),
    lowercase: message => yup.string().lowercase(message).strict(),
    uppercase: message => yup.string().uppercase(message).strict(),
    matches: (regex, message) => yup.string().matches(regex, message),
    length: (length, message) => yup.string().length(length, message),
  },
  number: {
    required: message => yup.number().required(message),
    min: (min, message) => yup.number().min(min, message),
    max: (max, message) => yup.number().max(max, message),
    positive: message => yup.number().positive(message),
    negative: message => yup.number().negative(message),
    lessThan: (less, message) => yup.number().lessThan(less, message),
    moreThan: (more, message) => yup.number().moreThan(more, message),
  },
  mixed: {
    required: message => yup.mixed().required(message),
    oneOf: (enums, message) => yup.mixed().oneOf(enums, message),
    notOneOf: (enums, message) => yup.mixed().notOneOf(enums, message),
  },
  date: {
    required: message => yup.date().required(message),
    min: (min, message) => yup.date().min(min, message),
    max: (max, message) => yup.date().max(max, message),
  },
  array: {
    required: message => yup.array().required(message),
    length: (length, message) => yup.array().length(length, message),
    min: (min, message) => yup.array().min(min, message),
    max: (max, message) => yup.array().max(max, message),
  },
};

function validationResult(valid, value, errors) {
  const isValid = () => valid;
  const getValue = () => value;
  const getErrors = () => errors ?? [];
  return { isValid, getValue, getErrors };
}

export default function validateWithRules(value, rules) {
  const { type, constrains } = rules;

  let typeValidatorFn = _.get(TypeValidators, type); // array | string | mixed : object
  if (!typeValidatorFn) throw new Error(`No ${type} validator found`);

  for (const constrain of constrains) {
    const { method, params } = constrain;
    typeValidatorFn = typeValidatorFn[method](...Object.values(params ?? {}));
  }

  try {
    const res = typeValidatorFn.validateSync(value, { abortEarly: false });
    return validationResult(true, res);
  } catch (error) {
    return validationResult(false, value, error.errors);
  }
}
