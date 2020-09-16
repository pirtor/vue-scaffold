module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 2333,
    open: true,

    // 配置代理
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },

  configureWebpack: {
    resolve: {
      // 配置目录别名
      alias: {
        assets: "@/assets",
        components: "@/components"
      }
    }
  }
};
