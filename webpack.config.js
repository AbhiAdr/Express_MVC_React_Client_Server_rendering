var path = require('path');

module.exports = {
  entry: './ReactComponent/Es6.js',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'ReactComponent')
  },
  externals: {
        'shelljs/globals': 'commonjs shelljs/global'
  },
  module:{
  	rules:
  	[
	  	{
	 		test:/\.js$/,
	 		use:
	 		{
	 			loader:'babel-loader'
	 		},
       exclude: [
          path.resolve(__dirname, 'node_modules')
       ]
	  	}
  	]
  }
};