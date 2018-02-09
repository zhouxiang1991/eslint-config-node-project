module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    codeFrame: false,
    ecmaVersion: 6,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-console': [
      2,
      {
        // 启用console.log
        allow: ['log'],
      },
    ],

    // 可以使用continue;
    'no-continue': 0,

    // 不能使用++
    'no-plusplus': 2,

    // 变量名中可以使用_
    'no-underscore-dangle': 0,

    'no-unused-vars': 1,

    'no-param-reassign': [
      2,
      {
        // 只能修改参数内数据，不能重新赋值
        props: false,
      },
    ],

    // 可以有同名变量
    'no-shadow': 0,

    'arrow-parens': [
      2,
      // 如果参数个数是一个可以不带圆括号, 否则要带圆括号
      'as-needed',
      {
        // 如果函数体在花括号中则参数必须带圆括号
        requireForBlockBody: true,
      },
    ],

    'arrow-body-style': [
      2,
      'as-needed',
    ],

    indent: [
      1,
      // 缩进是2个空格
      2,
      {
        // switch 也是2个空格
        SwitchCase: 1,
      },
    ],

    // 换行符, unix: '\n', window: '\r\n'
    'linebreak-style': [
      2,
      'unix',
    ],

    // 字符串使用单引号
    quotes: [
      2,
      'single',
    ],

    // 使用分号
    semi: [
      2,
      'always',
    ],

    // 可以使用任何新的语法
    'no-restricted-syntax': [
      0,
    ],

    // 可以在循环中是用await
    'no-await-in-loop': 0,

    // 允许使用arguments变量
    'prefer-rest-params': 0,

    // 可以使用空的构造函数，方便以后添加自己成员
    'no-useless-constructor': 0,

    // eslint-plugin-import
    'import/extensions': [
      1,
      // 导入包不需要后缀
      'ignorePackages',
    ],

    /* 可以使用全局变量 */
    'no-restricted-globals': 0,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    /* 定义对象必须要有换行，解构赋值则无所谓 */
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          consistent: true,
        },
      },
    ],
  },
};
