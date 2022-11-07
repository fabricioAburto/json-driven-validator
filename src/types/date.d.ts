import { Params } from './params';

export interface DateRequiredValidationContrain {
  method: 'required';
  params: Omit<Params<any>, 'value'>;
}

export interface DateMinValidationContrain {
  method: 'min';
  params: Params<string>;
}

export interface DateMaxValidationContrain {
  method: 'max';
  params: Params<string>;
}

export type DateValidationContrans =
  | DateRequiredValidationContrain
  | DateMinValidationContrain
  | DateMaxValidationContrain;

export interface DateValidationRules {
  type: 'date';
  constrains: DateValidationContrans[];
}
