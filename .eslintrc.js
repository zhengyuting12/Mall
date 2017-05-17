module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        // official
        "default-case": ["warn", {
            "commentPattern": "^skip\\sdefault"
        }],
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "no-alert": "error",
        "no-else-return": "error",
        "no-empty-function": ["error", {
            "allow": ["functions"]
        }],
        "no-eq-null": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-global-assign": "error",
        "no-magic-numbers": ["warn", {
            "ignore": [1],
            "ignoreArrayIndexes": true,
            "enforceConst": true,
            "detectObjects": false
        }],
        "no-multi-spaces": "error",
        "quotes": ["error", "double"],
        "semi": ["error", "always", {
            "omitLastInOneLineBlock": true
        }],

        // react
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-multi-comp": ["error", {
            "ignoreStateless": true
        }],
        "react/prefer-es6-class": ["error", "always"],
        "react/prefer-stateless-function": ["warn", {
            "ignorePureComponents": true
        }],
        "react/jsx-pascal-case": ["error"],
        "react/jsx-space-before-closing": ["error", "always"],
        "react/jsx-curly-spacing": ["error", "never"],
        "react/jsx-boolean-value": ["error", "never"],
        "react/no-string-refs": "error",
        "react/require-render-return": "error",
        "react/jsx-wrap-multilines": "error",
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
        }],
        "react/jsx-closing-bracket-location": ["error", {
            "selfClosing": "after-props",
            "nonEmpty": 'after-props'
        }],
        "react/jsx-no-bind": ["error", {
            "ignoreRefs": true,
            "allowArrowFunctions": true
        }],
        "react/sort-comp": ["warn", {
            order: [
                'static-methods',
                'lifecycle',
                'render',
                'everything-else'
            ],
            groups: {
                lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ]
            }
        }],
        "react/no-is-mounted": "error",

        //jsx-a11y
        "jsx-a11y/img-has-alt": ["error", {
            "components": [""]
        }],
        "jsx-a11y/img-redundant-alt": ["error", {
            "components": [""],
            "words": [""]
        }],
        "jsx-a11y/no-access-key": "error"
    }
};