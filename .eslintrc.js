module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "plugin:jsx-a11y/recommended",
    "airbnb", 
    "react"
  ],
  "env": {
    "browser": true,
    es6: true,
    node: true,
    "jest": true
  },
  "globals": {
    "expect": true,
    "jest": true,
    "jsdom": true,
  },
  "plugins": [
    "react",
    "import",
    "jsx-a11y",
  ],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./.webpack/webpack.base.js"
      }
    }
  },
  "rules": {
    "indent": [2, 2],
    "prefer-arrow-callback": 0,
    "no-nested-ternary": 0,
    "react/no-array-index-key": 0,
    "func-names": 2,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "arrow-body-style": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/prefer-default-export": 0,
    "no-unused-expressions": 0,
    "function-paren-newline": 0,
    "import/extensions": 0,
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
  }
}