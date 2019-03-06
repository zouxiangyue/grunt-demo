#!/usr/bin/node

var add=require('./sum')

var x=process.argv[2] || 1;
var y=process.argv[3] || 2
//console.log(`${x}+${y}=${Number(x)+Number(y)}`);

console.log(`${x}+${y}=${add(x,y)}`)
