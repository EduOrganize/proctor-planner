const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'production' for production builds
  entry: './src/index.jsx', // Entry point of your React code
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // For SPA routing support
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow imports without specifying extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    hot: true,                 // enable hot‑reload
    historyApiFallback: true,  // for client‑side routing
    proxy: [
      // any request to /api/* will be forwarded to your Spring Boot server
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Template HTML file
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.resolve(__dirname, 'dist/**/*'),
              destination: path.resolve(__dirname, '../backend/src/main/resources/static')
            }
          ]
        }
      }
    }),
  ],
};