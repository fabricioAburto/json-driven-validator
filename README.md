# json-driven-validator 👮

This is a simple project and lightweight project util for validate any value. Perfect for store validations rules in a db and then use this impl for run the validations.

## Installation

```bash
$ npm install @joseaburt/json-driven-validator   # for yarn users
$ yarn add @joseaburt/json-driven-validator      # for yarn users
```

## How to use it?

Just wrap your application with the provider.

```jsx
// src/index.js
import validateWithRules, { validationRulesBuilder } from '@joseaburt/json-driven-validator';

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

  // or

  rules = mongoFormValidationRulesRepo.getRulesByFormId(1);

  expect(validateWithRules(null, rules).isValid()).toBe(true);
  expect(validateWithRules('', rules).getErrors()).toEqual(['Invalid String length']);
  expect(validateWithRules('som', rules).getErrors()).toEqual(['Invalid String length']);
  expect(validateWithRules('some string', rules).getValue()).toEqual('some string');
});


See the tests for more docs! 😉
```

## Contributing

Please see the [Contributing Guidelines](./CONTRIBUTING.md).

<br >

## Author

- [Jose Aburto](https://www.linkedin.com/in/jose-aburto/)
