// import "babel-polyfill"

// var user = {
// 	username: "zhangsan",
// 	password: "111111",
// 	gender: "male",
// 	age: 21,
// 	[Symbol.iterator]: function*() {
// 		for (var attr in this) {
// 			yield [attr, this[attr]]
// 		}
// 	}
// }

// var arr = [1, 2, 3, 4]

// var it = user[Symbol.iterator]();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// window.setTimeout(function() {
// 	var id = 0;
// 	window.setTimeout(function() {
// 		var name = "zhangsan";
// 		window.setTimeout(function() {
// 			var list = [];
// 		}, 1000)
// 	}, 1000)
// }, 1000)

// new Promise(function(resolve, reject) {
// 		window.setTimeout(function() {
// 			var id = 1;
// 			resolve(id)
// 		}, 1000)
// 	})
// 	.then(function(data) {
// 		return new Promise(function(resolve) {
// 			window.setTimeout(function() {
// 				var name = "zhangsan"
// 				resolve(name)
// 			})
// 		})
// 	})
// 	.then(function(data) {
// 		return new Promise(function(resolve) {
// 			window.setTimeout(function() {
// 				resolve([])
// 			}, 1000)
// 		})
// 	})
// 	.then(function(data) {
// 		console.log(data)
// 	})


var a = Symbol()

var obj = {
	[Symbol('tangzhenhua')]: function*() {},
	[Symbol('tangzhenhua')]: "username",
}

var arr = Object.getOwnPropertySymbols(obj);

console.log(arr[0] === arr[1])

for (var value of arr) {
	console.log(value)
}