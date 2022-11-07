import { Params } from './params';

export interface StringRequiredValidationContrain {
  method: 'required';
  params: Omit<Params<any>, 'value'>;
}

export interface StringLengthValidationContrain {
  method: 'length';
  params: Params<number>;
}

export interface StringMinValidationContrain {
  method: 'min';
  params: Params<number>;
}

export interface StringMaxValidationContrain {
  method: 'max';
  params: Params<number>;
}

export interface StringMatchsValidationContrain {
  method: 'matches';
  params: Params<Regex>;
}

export interface StringEmailValidationContrain {
  method: 'email';
  params: Omit<Params<any>, 'value'>;
}

export interface StringLowerCaseValidationContrain {
  method: 'lowercase';
  params: Omit<Params<any>, 'value'>;
}

export interface StringUpperCaseValidationContrain {
  method: 'uppercase';
  params: Omit<Params<any>, 'value'>;
}

export interface StringNullableValidationContrain {
  method: 'nullable';
}

export type StringValidationContrans =
  | StringRequiredValidationContrain
  | StringLengthValidationContrain
  | StringMinValidationContrain
  | StringMaxValidationContrain
  | StringMatchsValidationContrain
  | StringEmailValidationContrain
  | StringLowerCaseValidationContrain
  | StringUpperCaseValidationContrain
  | StringNullableValidationContrain;

export interface StringValidationRules {
  type: 'string';
  constrains: StringValidationContrans[];
}
