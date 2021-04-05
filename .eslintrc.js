module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off'
  }
};
