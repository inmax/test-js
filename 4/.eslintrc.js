module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    /* bundle rules */
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        strict: ['error', 'never'],
        'init-declarations': ['error', 'always'],
        /* add rules */
    },
}