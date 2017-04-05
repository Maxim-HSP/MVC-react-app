var webpack = require("webpack");
module.exports = {
	name: "production",
	entry: {
		bundle: "./public/react/app.js",
        //redux单独页面
        reduxBundle: "./public/react/redux_app/redux_app.js",
		//添加要打包在vendors里面的库(第三方包)
		vendor: ['react', 'react-dom', 'react-router']
	},
	plugins: [
		//设置生产环境
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		//设置最小化文件, 去除warning
//		new webpack.optimize.UglifyJsPlugin({
//			minimize: true,
//			compress: {
//				warnings: false
//			}
//		}),
		//去除重复代码
		// new webpack.optimize.DedupePlugin(),
		//独立打包第三方文件
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendors.js'
		}),
	],
	//配置;打包之后的文件信息
	output: {
		path: __dirname + "/public/dist/react",
		filename: "[name].js",
		publicPath: '',
		chunkFilename: "[name].js",
	},
	//配置source-map
	devtool: "source-map",

	//配置loader
	module: {
		loaders: [
			//配置哪些文件需要通过babel来进行转换
			{
				test: /\.js$/,
				exclude: /node_modules|server|dao|routes/,
				loader: "babel-loader",
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}, {
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			}, {　　　　
				test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
				　　　　loader: 'url-loader?limit=8192'　　　
			}
		]
	}
};