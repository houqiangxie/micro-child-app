const { name } = require('./package');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  publicPath: '/micro-child-app',
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
    // plugins: [
    //     new WorkboxPlugin.GenerateSW({
    //       // 这些选项帮助快速启用 ServiceWorkers
    //       // 不允许遗留任何“旧的” ServiceWorkers
    //       clientsClaim: true,
    //       skipWaiting: true,
    //     }),
    // ],
  },
};