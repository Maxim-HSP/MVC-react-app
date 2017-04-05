# react_app
项目入口：

1.直接双击运行根目录startApp.bat。
（会自动开启node和mongodb，以默认浏览器访问http://localhost:3001/react/index.html,会使用根目录的mongodb文件夹作为数据库,里面已有数据）


2.如果出错，则手动运行mongodb以及node，并打开chrome访问：
http://localhost:3001/react/index.html


--react页面囊括了从state和props基础应用到react-router应用，可根据页面搭配代码查看
	react页面通过webpack打包的js文件路径(相对于index.html) "../dist/react/bundle.js"

--redux页面除使用react各组件外，加入了redux（通过react-redux进行react组件链接），注意查看不同组件的js文件
	redux页面通过webpack打包的js文件路径(相对于redux_app.html) "../../dist/react/reduxBundle.js"

--已将webpack的代码压缩关闭（便于使用console.log去debug代码）,可在webpack.config.js中配置

--图片放大镜（额外实例）省事没写，有兴趣的同志可以练习加入，图片目录为"../img"，同时在"public\js"下有一个demo，也可参考

--推荐将这个项目保存起来，如果以后需要用到react的时候拿出来复习回忆
