module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "flowtype"],
  "extends": [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "globals": {
    "__DEV__": true,
  },
  "rules": {
    "prettier/prettier": ["error", { printWidth: 110, singleQuote: true }],
    "no-invalid-this": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "react/state-in-constructor": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".tsx"] }],
    "react/prop-types": [2, { ignore: ["style", "children", "dispatch"] } ],
    "import/order": ["error", {"newlines-between": "always"}],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": ["error", { js: "never", "png": "always", "jpg": "always", "json": "always" }],
    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-absolute-path": "off",
    "react/no-typos": "off"
  }
};
