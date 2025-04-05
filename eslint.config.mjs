import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginQuery from '@tanstack/eslint-plugin-query';

const compat = new FlatCompat({
    // import.meta.dirname is available after Node.js v20.11.0
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
    ...pluginQuery.configs['flat/recommended'],
    ...compat.config({
        extends: ['eslint:recommended', 'next', 'prettier'],
        rules: {
            semi: ['error'],
            indent: ['error', 4],
            'react/react-in-jsx-scope': 'off',
            eqeqeq: ['error', 'always', { null: 'ignore' }],
        },
    }),
];

export default eslintConfig;
