module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: es2020,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off"
  },
};
