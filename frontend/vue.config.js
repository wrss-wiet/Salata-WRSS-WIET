const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        hostname: 'salata.wiet.pl',
        port: 443,
        protocol: 'wss'
      }
    }
  }
})
