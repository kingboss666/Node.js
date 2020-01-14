// 自制的模块
const add = require('./math')
// 第三方模块
const _ = require('loadsh')
const express = require('express') // http模块
// 内置模块 file system
const fs = require('fs')
let a = 1
let b = 5
console.log(_.add(1,2))
console.log(add(a,b))