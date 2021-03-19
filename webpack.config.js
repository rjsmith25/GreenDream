const path = require("path");
const nodeExternals = require("webpack-node-externals");
let mode;

// set mode based on NODE_ENV
if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  mode = "development";
}

const clientConfig = {
  target: "web",
  devtool: "cheap-source-map",
  mode: mode,
  entry: {
    home: "./client/home",
    rooms: "./client/rooms",
    "room-detail": "./client/room-detail",
    about: "./client/about",
    contact: "./client/contact",
  },
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].bundle.js",
    publicPath: "./public",
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
                  browsers: ["last 2 versions, not < 1%"],
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
};

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

module.exports = [clientConfig, serverConfig];
