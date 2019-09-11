var path = require("path");
module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    stats: {
      children: false,
      maxModules: 0
    },
    port: 3001
  }
};
