const path = require("path");
module.exports = {
  entry: path.resolve("./client/src/index.js"),
  output: {
    path: path.resolve("./client/public/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      }

    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
