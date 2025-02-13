const path = require('path');
module.exports={
    entry:"./src/index.js",
    mode: 'development',

    output:{
      filename:"main.js",
      path:path.resolve(__dirname,"dist")
    },
    devServer:{
      contentBase:path.join(__dirname,"dist"),
      port:9000
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\(.png|.jpeg)$/,
          use: ['url-loader'],
        },
      ],
    },
}