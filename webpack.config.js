const path = require('path');

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string    // the filename template for entry chunks
  },
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "./src")
        ],
        loader: "babel-loader",
      },
    ]
  }
}

module.exports = config