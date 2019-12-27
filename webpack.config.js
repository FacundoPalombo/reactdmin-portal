const path = require('path')
const { config } = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @constant devConfig
 * Webpack config for development environment.
 */
const devConfig = {
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  entry: path.join(__dirname,'src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],

  devServer: {
    compress: true,
    port: config.port,
    hot: true,
    index: 'index.html',
    open: true,
    historyApiFallback: true
  },
  mode: 'development'
}
/**
 * @constant prodConfig
 * Webpack config for production environment.
 *
 */
const prodConfig = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  mode: 'production'
}

if (config.isDev) module.exports = devConfig
else module.exports = prodConfig
