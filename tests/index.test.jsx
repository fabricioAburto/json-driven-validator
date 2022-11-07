import validateWithRules, { validationRulesBuilder } from '../src';

describe('form-validator lib', () => {
  describe('String Type', () => {
    test('should validate a required string', () => {
      const rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'required',
            params: {
              message: 'String is required',
            },
          },
          {
            method: 'nullable',
          },
        ],
      });

      expect(validateWithRules(null, rules).isValid()).toBe(false);
      expect(validateWithRules('', rules).getErrors()).toEqual(['String is required']);
      expect(validateWithRules('some string', rules).getValue()).toEqual('some string');
    });

    test('should validate the length of an string', () => {
      let rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'length',
            params: {
              value: 4,
              message: 'Invalid String length',
            },
          },
          {
            method: 'nullable',
          },
        ],
      });

      expect(validateWithRules(null, rules).isValid()).toBe(true);
      expect(validateWithRules('', rules).getErrors()).toEqual(['Invalid String length']);
      expect(validateWithRules('som', rules).getErrors()).toEqual(['Invalid String length']);
      expect(validateWithRules('some string', rules).getValue()).toEqual('some string');
    });

    test('should validate min and max of a given string', () => {
      let rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'min',
            params: {
              value: 3,
              message: 'Min length should be 3',
            },
          },
        ],
      });

      expect(validateWithRules('1234', rules).isValid()).toBe(true);
      expect(validateWithRules('123', rules).getValue()).toEqual('123');
      expect(validateWithRules('12', rules).getErrors()).toEqual(['Min length should be 3']);

      rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'max',
            params: {
              value: 4,
              message: 'Max length should be until 4',
            },
          },
        ],
      });

      expect(validateWithRules('1234', rules).isValid()).toBe(true);
      expect(validateWithRules('123', rules).getValue()).toEqual('123');
      expect(validateWithRules('12345', rules).getErrors()).toEqual(['Max length should be until 4']);
    });

    test('should validate a given email string', () => {
      let rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'email',
            params: {
              message: 'Invalid email',
            },
          },
        ],
      });

      expect(validateWithRules('pepapig', rules).isValid()).toBe(false);
      expect(validateWithRules('pepapig@cartoon.com', rules).isValid()).toBe(true);
      expect(validateWithRules('pepapig@', rules).getErrors()).toEqual(['Invalid email']);
      expect(validateWithRules('pepapig@cartoon.com', rules).getValue()).toBe('pepapig@cartoon.com');
    });

    test('should validate an uppecase and lowercase string format', () => {
      let rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'lowercase',
            params: {
              message: 'String should be in lowercase format',
            },
          },
        ],
      });

      expect(validateWithRules('PEPE', rules).isValid()).toBe(false);
      expect(validateWithRules('pepe', rules).isValid()).toBe(true);
      expect(validateWithRules('PEPE', rules).getErrors()).toEqual(['String should be in lowercase format']);

      rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'uppercase',
            params: {
              message: 'String should be in uppercase format',
            },
          },
        ],
      });

      expect(validateWithRules('PEPAPIG', rules).isValid()).toBe(true);
      expect(validateWithRules('pepapig', rules).isValid()).toBe(false);
      expect(validateWithRules('pepapig', rules).getErrors()).toEqual(['String should be in uppercase format']);
    });

    test('should validate a given string format base on a regex', () => {
      let rules = validationRulesBuilder({
        type: 'string',
        constrains: [
          {
            method: 'matches',
            params: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$*.{}?"!@#%&/,><':;|_~`^\][)(]).{8,99}/,
              message: 'Invalid Str pattern',
            },
          },
        ],
      });

      expect(validateWithRules('12345', rules).isValid()).toBe(false);
      expect(validateWithRules('+Q~FtU^:7MG>d5I', rules).isValid()).toBe(true);
      expect(validateWithRules('1234', rules).getErrors()).toEqual(['Invalid Str pattern']);
    });
  });
});
