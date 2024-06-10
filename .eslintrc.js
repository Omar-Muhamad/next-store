module.exports = {
  root: true,
  extends: "next/core-web-vitals",
  plugins: ["prettier", "blink"],
  rules: {
    "blink/jsx-new-line": "error",
    "blink/line-between-statements": "error",

    "no-undef": "error",
    "no-unused-vars": "error",
    "object-shorthand": "error",
    "prefer-template": "error",

    "prettier/prettier": "error",

    "import/exports-last": "error",
    "import/newline-after-import": "error",
    "import/prefer-default-export": ["error", { target: "any" }],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [{ pattern: "react", group: "builtin" }],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
  overrides: [
    {
      files: ["index.ts", "index.tsx"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
  env: {
    jest: true,
  },
};
