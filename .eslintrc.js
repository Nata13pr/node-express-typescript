module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "import/order": ["error", { "groups": [["builtin", "external"], ["internal", "parent", "sibling", "index"]] }],
        "@typescript-eslint/indent": ["error", 2],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        // "quotes": ["error", "single"],
        //  'no-var': 'error',
        //  "semi": ["error", "always"],
        //  indent: ['error', 2, { SwitchCase: 1 }],
        //  'no-multi-spaces': 'error',
        // 'space-in-parens': 'error',
        // 'no-multiple-empty-lines': 'error',
        // 'prefer-const': 'error',
        // "simple-import-sort/imports": "off",
    //     "import/first": "off",
    //     "import/newline-after-import": "off",
    //     "import/no-duplicates": "off",
    //     "sort-imports": ["error", {
    //         "ignoreCase": false,
    //         "ignoreDeclarationSort": true,
    //         "ignoreMemberSort": false,
    //         "memberSyntaxSortOrder": ["none", "all", "single", "multiple"]
    //     }],
    //     'import/order': [
    //         'error',
    //         {
    //             groups: [
    //                 'builtin',
    //                 'external',
    //                 'internal',
    //                 ['parent', 'sibling', 'index'],
    //             ],
    //             'newlines-between': 'always',
    //             alphabetize: { order: 'asc', caseInsensitive: true },
    //         },
    //     ],
    //     "no-undef": "off",
    //     "space-infix-ops": ["error", {"int32Hint": false}],
    //     "quotes": ["error", "single"],
    //     "semi": ["error", "always"],
    //     "space-in-parens": ["error", "always"],
    //     "object-curly-spacing": ["error", "always"],
    //     'indent': ['error', 7, { 'SwitchCase': 1 }],
    //     "arrow-spacing": ["error", { "before": true, "after": true }],
    //     "key-spacing": ["error", { "beforeColon": true, "afterColon": true }],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "function" },
            { blankLine: "always", prev: "function", next: "*" },
        ],
    }
}
