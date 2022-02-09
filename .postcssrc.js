// PostCss 配置文件
module.exports = {
  plugins: {
    // vue脚手架,默认会配置这项,所以会有警告
    // 作用:生成css样式规则前缀
    /* autoprefixer: {
      // 配置要兼容到的 环境信息
      browsers: ['Android >= 4.0', 'iOS >= 8']
    }, */
    'postcss-pxtorem': {
      rootValue ({ file }) {
        console.log(file)
        return file.includes('vant') ? 37.5 : 75
      },
      // 配置要装换的 css 属性 *表示所有
      propList: ['*']
      // 配置不需要转换样式资源
      // exclude: 'github-markdown.css'
    }
  }
}
