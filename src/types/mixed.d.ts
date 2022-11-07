import { Params } from './params';

export interface MixedRequiredValidationContrain {
  method: 'required';
  params: Omit<Params<any>, 'value'>;
}

export interface MixedOneOfValidationContrain {
  method: 'oneOf';
  params: Params<any[]>;
}

export interface MixedNotOneOfValidationContrain {
  method: 'notOneOf';
  params: Params<any[]>;
}

export type MixedValidationContrans =
  | MixedRequiredValidationContrain
  | MixedOneOfValidationContrain
  | MixedNotOneOfValidationContrain;

export interface MixedValidationRules {
  type: 'mixed';
  constrains: MixedValidationContrans[];
}
