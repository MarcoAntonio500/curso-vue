module.exports = {
    chainWebpack: config => {
      config.plugin('define').tap(definitions => {
        Object.assign(definitions[0]['process.env'], {
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
        })
        return definitions
      })
    }
  }
  