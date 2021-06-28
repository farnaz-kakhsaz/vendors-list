const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "src", "index.html"),
  filename: "./index.html",
});

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [htmlWebpackPluginConfig],
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
};
