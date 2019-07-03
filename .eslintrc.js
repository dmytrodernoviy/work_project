module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  env: {
    jest: true
  },
  plugins: ["prettier"],
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "prettier/prettier": "error"
  },
  globals: {
    fetch: false
  }
};
