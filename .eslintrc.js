module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      // tsx: true,
      jsx: true,
    },
    // extraFileExtensions: ['.vue']
  },
  /* 扩展配置，加一些插件 */
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则
    'plugin:prettier/recommended', // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出. 确保在最后一个.
    'prettier',
  ],
  rules: {
    // http://eslint.cn/docs/rules/
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    // 有些配置 eslint默认规则 和 @typescript-eslint 同时存在规则，因此需要先取消默认规则，让@typescript-eslint接管控制
    // 有些配置prettier已经校验了，就关闭选项。让vscode少一点负担

    /* 是否使用单引号 */
    // quotes: 'off', // 取消规则，以下连在一起的配置，都是默认先取消eslint规则，让@typescript-eslint接管
    // '@typescript-eslint/quotes': ['error', 'single'],

    /* 是否使用分号 */
    // semi: 'off',
    // '@typescript-eslint/semi': ['error', 'never'],

    /* 对象是否尾随逗号, prettier 已经实现 */
    // 'comma-dangle': 'off',
    // '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    /* 函数名和花括号之间是否加空格, 因为prettier是默认不加空格的，且不可该配置，所以eslint只好关闭这个规则，或者和prettier禁止空格 */
    // 'space-before-function-paren': 'off',
    // '@typescript-eslint/space-before-function-paren': 'off',

    /* 生成环境不允许加console.log 和 debugger 其实本项目打包构建已经去除console.log、debugger了。这里也就无所谓了 */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /* 是否允许空函数 */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    /* 是否禁止定义前引用变量 */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    /* 是否允许ang类型 */
    '@typescript-eslint/no-explicit-any': 'off',

    /* 是否要求函数必须返回类型，让ts自己推导 */
    '@typescript-eslint/explicit-function-return-type': 'off',

    /* 是否禁止使用断言符 ！ */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /* 是否禁止require 例如：var foo = require("foo") */
    '@typescript-eslint/no-var-requires': 'off',

    /* 是否禁止@ts-<directive> ts的注释指令 */
    '@typescript-eslint/ban-ts-comment': 'off',

    /* 是否禁止特定类型 */
    '@typescript-eslint/ban-types': 'off',

    /* 是否要求导出函数或类要显式的返回值和参数类型 */
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /* 是否禁止存在未使用的变量 */
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    /* 要求自定义事件需要使用kebab-case格式 */
    'vue/custom-event-name-casing': ['warn', 'kebab-case'],

    /* 要求闭合标签>是否要换行 */
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],

    /* 配置vue中标签允许多少个属性同一行（多少个之后需要强制换行）和prettier的printWidth设置会有冲突。*/
    'vue/max-attributes-per-line': 'off',
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: {
    //       max: 1,
    //       allowFirstLine: true
    //     },
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false
    //     }
    //   }
    // ]

    /* 是否要求单元素内容，必须换行，默认是强制换行，目前关闭，看情况在书写代码的时候换行，或者让prettier的printWidth决定换行 */
    'vue/singleline-html-element-content-newline': 'off',

    /* 要求自定义组件上的属性必须是kebab-case格式 */
    'vue/attribute-hyphenation': 'error',

    /* 要求props是否强制需要默认值，也就是要对象格式书写prop并且有默认值，不能直接用类型，或者数组 */
    'vue/require-default-prop': 'off',

    /* 控制标签没有内容的情况下是否需要自闭合 */
    'vue/html-self-closing': 'off',
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'any',
    //       normal: 'any',
    //       component: 'always'
    //     },
    //     svg: 'any',
    //     math: 'any'
    //   }
    // ],

    /* 控制标签前后是否需要空格，prettier已经做了这个功能 */
    // 'vue/html-closing-bracket-spacing': [
    //   'error',
    //   {
    //     startTag: 'never',
    //     endTag: 'never',
    //     selfClosingTag: 'always'
    //   }
    // ]

    /* 看看后续是否需要用 */
    // 'vue/attributes-order': 'off',
    // 'vue/one-component-per-file': 'off',
    // 'vue/multiline-html-element-content-newline': 'off',
  },
}
