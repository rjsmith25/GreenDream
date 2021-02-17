const path = require("path");
const nodeExternals = require("webpack-node-externals");
let mode;

// set mode based on NODE_ENV
if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  mode = "development";
}

const serverConfig = {
  target: "node",
  node: {
    __dirname: false,
  },
  mode: mode,
  externals: [nodeExternals()],
  entry: {
    app: path.join(__dirname, "app.src.js"),
  },
  output: {
    path: __dirname,
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "current",
                },
              },
            ],
            "@babel/preset-react",
          ],
        },
      },
    ],
  },
};

module.exports = [serverConfig];
