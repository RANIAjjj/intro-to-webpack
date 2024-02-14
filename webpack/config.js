const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports={
    "mode":"development",
    "entry":"./assets/scribt.js",
    "output":{
        filename:"index.[hash].js",
        path:path.resolve(__dirname,"out")
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader","css-loader"],
          },
        ],
      },
    plugins: [new HtmlWebpackPlugin(
        {
            template:"./login.html"
        }
    ),
    new CleanWebpackPlugin()],
  
}
