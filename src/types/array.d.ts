import { Params } from './params';

export interface ArrayRequiredValidationContrain {
  method: 'required';
  params: Omit<Params<any>, 'value'>;
}

export interface ArrayLengthValidationContrain {
  method: 'length';
  params: Params<number>;
}

export interface ArrayMinValidationContrain {
  method: 'min';
  params: Params<number>;
}

export interface ArrayMaxValidationContrain {
  method: 'max';
  params: Params<number>;
}

export type ArrayValidationContrans =
  | ArrayRequiredValidationContrain
  | ArrayLengthValidationContrain
  | ArrayMinValidationContrain
  | ArrayMaxValidationContrain;

export interface ArrayValidationRules {
  type: 'array';
  constrains: ArrayValidationContrans[];
}
