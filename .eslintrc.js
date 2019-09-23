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
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-prototype-builtins":0,
    "no-proto":0,
    'no-multiple-empty-lines':0,//多个空行
    'no-trailing-spaces':0,//空格
    "no-redeclare":0,//重复声明
    "func-call-spacing":0,
    "no-unexpected-multiline":0,
    "no-template-curly-in-string":0,
    "camelcase":0,//需要CamelCase（驼峰箱）
    "no-eval":0,//禁止eval（）
    "no-tabs":0,//不允许使用制表符，包括注释中的制表符。
    "import/no-duplicates":0,//禁止重复导入（无重复导入）
    "quotes":0,
    "no-unused-vars":0,
    "no-irregular-whitespace":0,
    "no-undef":0,
    "vue/no-reserved-keys":0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 不需要
    'space-before-function-paren': 0,
    'eol-last': 0,
    'no-extra-semi': 0,
    'semi': 0,
    'indent': 0,
    'no-useless-escape': 0,
    'new-cap': 0,
    'no-new-func': 0
  }
}
