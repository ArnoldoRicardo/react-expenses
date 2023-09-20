module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".jsx", ".js", ".tsx", ".ts", ".d.ts"],
      },
      alias: {
        extensions: [".jsx", ".js", ".tsx", ".ts", ".css", ".d.ts"],
        map: [
          ["@assets", "./src/assets"],
          ["@components", "./src/components"],
          ["@model", "./src/model"],
          ["@pages", "./src/pages"],
          ["@styles", "./src/styles"],
          ["@auth", "./src/lib/auth"],
        ],
      },
    },
  },
};
