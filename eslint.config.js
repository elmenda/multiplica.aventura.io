// eslint.config.js
// @ts-check
const { configs: eslintConfigs } = require('@eslint/js');
const tsEslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierConfig = require('eslint-config-prettier');

module.exports = tsEslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslintConfigs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettierConfig,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // Reglas de selectores Angular
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],

      // Reglas adicionales
      '@typescript-eslint/explicit-function-return-type': 'off', //Desactiva la regla que obliga a declarar el tipo de retorno de las funciones
      '@typescript-eslint/no-explicit-any': 'off', //Desactiva la regla que prohíbe el uso del tipo 'any'
      '@typescript-eslint/consistent-type-imports': 'error', // Obliga a usar importaciones de tipo consistentes
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Advierte sobre el uso de console.log, pero permite console.warn y console.error
      '@angular-eslint/no-lifecycle-call': 'error', //Evita que llames directamente los métodos de los hooks del ciclo de vida de Angular
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], //Marca como error variables no usadas pero ignora las que empiezan con _
      'prefer-const': 'error', //Recomienda usar 'const' en lugar de 'let' cuando una variable no se reasigna
      complexity: ['warn', { max: 20 }], //Advierte si la complejidad ciclomática de una función es mayor a 20
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/alt-text': 'warn',
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },
);
