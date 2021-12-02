const WebpackPwaManifest = require("webpack-pwa-manifest");

new WebpackPwaManifest({
  name: "Budget-Tracker",
  short_name: "Budget",
  description: "An app that allows you enter deposits/expenses in your budget.",
  start_url: "../index.html",
  background_color: "#01579b",
  theme_color: "#ffffff",
  fingerprints: false,
  inject: false,
  icons: [{
    src: path.resolve("assets/icons/icon_144x144.png"),
    sizes: [96, 128, 192, 256, 384, 512],
    destination: path.join("assets", "icons")
  }]
})

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development'
};
