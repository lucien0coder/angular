var fs = require('fs')
/*
var data = fs.readFileSync('超级管家.txt')

console.log(data.toString())
console.log('读取完毕....')*/

fs.readFile('超级管家.txt',function(err,data){
	if(err) return console.log(err);
	console.log(data.toString())
	console.log('读取完毕...')
})