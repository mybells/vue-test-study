// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  //https://eslint.vuejs.org/user-guide/#usage
  //如果要使用自定义解析器（例如babel-eslint或typescript-eslint-parser），则必须使用parserOptions.parseroption而不是parseroption。
  parserOptions: {
    parser: 'babel-eslint',//babel-eslint可以对所有有效的babel代码进行lint处理。
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    // 'html'
  ],
  // add your custom rules here
  'rules': {
    "space-infix-ops":2,//要求操作符周围有空格
    "keyword-spacing":2,//强制在关键字前后使用一致的空格
    "space-before-blocks":2,//强制在块之前使用一致的空格
    "vue/no-reserved-keys":0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // "no-redeclare":0,//重复声明
    // "quotes":0,
  }
}
