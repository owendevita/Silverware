const path = require("path");
const webpack = require("webpack");


module.exports = (env, argv) => {
  const mode = argv.mode || 'development'; // dev mode by default

  return {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      
      {
        test: /\.(jpe?g|png|svg|ico)$/,
        use: [{
            loader: 'file-loader'
        }]
      },
      
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify(mode),
        PUBLIC_URL: JSON.stringify('/'),
      },
    }),
  ],
}
};