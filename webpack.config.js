export default [
{
  entry: './src/index.js',
  devtool: 'source-map',
  mode: 'production',
  optimization: {
   minimize: false
  },
  output: {
	library: {
      name: 'doubleDouble',
	  type: 'window'
    },
	   
    filename: 'double-double.js',
	iife: true
  },
  target: "web"
},
{
  entry: './src/index.js',
  devtool: 'source-map',
  mode: 'production',
  optimization: {
   minimize: false
  },
  output: {
	library: {
      type: 'module'
    },
    filename: 'double-double.mjs'
  },
  experiments:{outputModule: true},
  target: "web"
}
]