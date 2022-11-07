import { ArrayValidationRules } from './types/array';
import { DateValidationRules } from './types/date';
import { MixedValidationRules } from './types/mixed';
import { NumberValidationRules } from './types/number';
import { StringValidationRules } from './types/string';

export type ValidationRulesTypes =
  | MixedValidationRules
  | StringValidationRules
  | NumberValidationRules
  | DateValidationRules
  | ArrayValidationRules;

export interface ValidationRules {
  rules: ValidationRulesTypes;
}

export function validationRulesBuilder(definition: ValidationRulesTypes): ValidationRules;

export interface ValidationResult<T> {
  getValue(): T;
  isValid(): boolean;
  getErrors(): string[];
}

export default function validateWithRules<T>(value, rules): ValidationResult<T>;
