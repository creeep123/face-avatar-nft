// vue.config.js
// const path = require('path');

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

module.exports = {
  lintOnSave: false,

  devServer: {
    // disableHostCheck: true,
    host: process.env.HOST || '127.0.0.1',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://140.207.202.188:8989',
        changOrigin: true,
      },
    },
  },

  // resolve: {
  //   extensions: ['.js', '.vue', '.json', '.less'],
  //   alias: {
  //     vue$: 'vue/dist/vue.esm.js',
  //     '@': resolve('src'), //比如说这里的@就指向src
  //   },
  // },

  runtimeCompiler: false,

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
