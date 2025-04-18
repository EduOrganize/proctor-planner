const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    contentBase: path.join(__dirname, 'dist'),
    port: 3000, // Runs React development server on port 3000
    open: true,
    historyApiFallback: true, // For client-side routing support
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Template HTML file
    }),
  ],
};