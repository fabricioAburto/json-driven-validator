import { Params } from './params';

export interface NumberRequiredValidationContrain {
  method: 'required';
  params: Omit<Params<any>, 'value'>;
}

export interface NumberMinValidationContrain {
  method: 'min';
  params: Params<number>;
}

export interface NumberMaxValidationContrain {
  method: 'max';
  params: Params<number>;
}

export interface NumberLessThanValidationContrain {
  method: 'lessThan';
  params: Params<number>;
}

export interface NumberMoreThanValidationContrain {
  method: 'moreThan';
  params: Params<number>;
}

export interface NumberPositiveValidationContrain {
  method: 'positive';
  params: Omit<Params<any>, 'value'>;
}

export interface NumberNegativeValidationContrain {
  method: 'negative';
  params: Omit<Params<any>, 'value'>;
}

export type NumberValidationContrans =
  | NumberRequiredValidationContrain
  | NumberMinValidationContrain
  | NumberMaxValidationContrain
  | NumberLessThanValidationContrain
  | NumberMoreThanValidationContrain
  | NumberPositiveValidationContrain
  | NumberNegativeValidationContrain;

export interface NumberValidationRules {
  type: 'number';
  constrains: NumberValidationContrans[];
}
