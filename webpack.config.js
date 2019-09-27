const HTML = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: { app: './src/app.js' },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  plugins: [new HTML({
    title:'devops'
  })]
}
