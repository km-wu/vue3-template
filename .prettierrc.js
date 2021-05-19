// 有些选项未必生效，那是因为eslint也存在相应配置，需要查看eslint的配置
// prettier 随着版本更新，一些默认值会发生变更
// https://prettier.bootcss.com/docs/options.html
module.exports = {
  printWidth: 120, // 单行输出（不折行）的（最大）长度
  tabWidth: 2, // 每个缩进级别的空格数
  useTabs: false, // 使用制表符 (tab) 缩进行而不是空格 (space)。
  semi: false, // 是否在语句末尾打印分号,
  singleQuote: true, // 是否使用单引号
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
  jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号
  trailingComma: 'all', // 多行对象最末尾元素跟随的逗号
  bracketSpacing: true, // 是否在对象属性添加空格
  jsxBracketSameLine: false, // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）
  arrowParens: 'always', // 箭头函数，只有一个参数的时候也需要括号
  // rangeStart: 0, // 每个文件格式化的范围, 0 - Infinity 是文件的全部内容
  // rangeEnd: 'Infinity',
  proseWrap: 'preserve', // 不处理markdown
  htmlWhitespaceSensitivity: 'ignore', // 指定 HTML 文件的全局空白区域敏感度,  "ignore" - 空格被认为是不敏感的
  vueIndentScriptAndStyle: false, // vue单文件中的script标签和style标签是否要缩进
  endOfLine: 'lf', // 换行符使用 lf
  embeddedLanguageFormatting: 'auto', // 如果Prettier可以自动识别嵌入式代码，则可以对其进行格式化。

  // 覆盖配置，可以针对不同地方的文件，做个性化配置,
  // overrides: {
  //   "files": "*.test.js",
  //   "options": {
  //     "semi": true
  //   }
  // },
  overrides: [{ files: '*.html', parser: 'html' }], // 这里是配置让html用回html解析器。
}
