module.exports = {
  ignorePatterns: ['next.config.js'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'prettier/prettier': 'error',
    'react/no-unescaped-entities': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', 120],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'import/no-unresolved': 'off',
    'new-cap': 'off',
    'no-useless-constructor': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'class-methods-use-this': 'off',
    'object-shorthand': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['off', 'off'],
    'id-blacklist': 'off',
    'id-match': 'off',
    'import/order': 'off',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'off',
    'no-irregular-whitespace': 'off',
    'no-trailing-spaces': ['error', { ignoreComments: true, skipBlankLines: true }],
    'space-in-parens': ['off', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-console': ['warn'],
    curly: ['error', 'multi-line'],
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': ['error'],
    'prefer-arrow/prefer-arrow-functions': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off', { accessibility: 'explicit' }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/no-useless-constructor': ['off'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/prefer-optional-chain': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },

      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'memberLike',
        modifiers: ['protected'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        modifiers: ['static'],
        format: null,
      },
      {
        selector: 'parameterProperty',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'signature',

          // Constructors
          'private-constructor',
          'protected-constructor',
          'public-constructor',
          'constructor',

          // Fields
          'private-decorated-field',
          'private-abstract-field',
          'private-instance-field',
          'private-field',

          'protected-decorated-field',
          'protected-abstract-field',
          'protected-instance-field',
          'protected-field',

          'public-decorated-field',
          'public-abstract-field',
          'public-instance-field',
          'public-field',

          'decorated-field',
          'field',

          // Methods
          'private-decorated-method',
          'private-instance-method',
          'private-abstract-method',
          'private-method',

          'protected-decorated-method',
          'protected-instance-method',
          'protected-abstract-method',
          'protected-method',

          'public-decorated-method',
          'public-instance-method',
          'public-abstract-method',
          'public-method',

          'decorated-method',
          'instance-method',
          'abstract-method',
          'method',

          'private-static-method',
          'protected-static-method',
          'public-static-method',

          'static-method',

          'private-static-field',
          'protected-static-field',
          'public-static-field',

          'static-field',
          'instance-field',
          'abstract-field',
        ],
      },
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: false,
        memberVariableDeclaration: false,
        parameter: false,
        propertyDeclaration: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
