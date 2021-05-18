module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, // Vant 官方根字体大小是37.5
      propList: ['*'],
      selectorBlackList: ['no-rem'] // 过滤掉.no-rem-开头的class，不进行rem转换
    }
  }
}
