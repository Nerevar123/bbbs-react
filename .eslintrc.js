module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:css-modules/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "css-modules"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "warn",
    "no-unused-vars": "warn",
    "css-modules/no-unused-class": "off",
  },
};
