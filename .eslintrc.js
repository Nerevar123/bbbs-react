module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:react/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    plugins: ["react", "prettier", "css-modules"],
    rules: {
      "prettier/prettier": "error",
    },
  },
};
