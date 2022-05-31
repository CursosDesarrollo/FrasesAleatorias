const HtmlWebpackPlugin = require('html-webpack-plugin'),
MiniCssExtractPlugin = require('mini-css-extract-plugin'),
path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules : [
      {
        test : /\.js$/i,
        exclude : /node_modules/,
        use : {
          loader : "babel-loader",
        }
      },
      {
        test : /\.html$/,
        use : [
          {
            loader : "html-loader",
            options : {
              minimize : true
            }
          }
        ]
      },
      {
        test : /\.(c|sc|sa)ss$/,
        use : [{
          loader : MiniCssExtractPlugin.loader,
          options : {
            publicPath : "./"
          }
        },
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          }
        }]
      },
      {
        test : /\.(jpe?g|png|svg|gif|webp)$/,
        use : ["file-loader?name=assets/[name].[ext]"]
      },
      {
        test : /\.(woff)$/,
        use : ["file-loader?name=assets/[name].[ext]"]
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : "./src/index.html",
      filename : "./index.html"
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
}