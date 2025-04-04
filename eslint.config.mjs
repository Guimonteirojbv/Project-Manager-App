import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

import stylistic from "@stylistic/eslint-plugin";

const configsStylistc = [
    stylistic.configs.customize({
        quotes: "double",
        semi: true,
        indent: 4,
    }),
];

export default defineConfig([
    configsStylistc,
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        plugins: {
            "@stylistic": stylistic,
            react: pluginReact,
        },
    },
    {
        rules: {
            eqeqeq: ["error", "always", { null: "ignore" }],
            "react/react-in-jsx-scope": "off",
        },
    },
]);
