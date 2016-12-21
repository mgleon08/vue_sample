const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    main: path.join(__dirname, 'src', 'main'),
    vendors: path.join(__dirname, 'src', 'vendors')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ["style", "css"] },
      { test: /\.less$/, loaders: ["style", "css", "less"] },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.(eot|ttf|svg|gif|png)$/, loader: "file-loader" },
      { test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]" }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.vue']
  },
  devtool: 'eval'
}

module.exports = config
