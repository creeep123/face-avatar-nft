// vue.config.js
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
