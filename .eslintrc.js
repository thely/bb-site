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
    'plugin:vue/recommended',
    // 'prettier',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier', 'vue'
  ],
  globals: {
    $nuxt: true,
  },
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/require-default-prop": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
}
