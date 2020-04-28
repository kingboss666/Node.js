import fs from "fs";
import path from "path"
import http from "http"

//  同步读取文件
// const data = fs.readFileSync(path.resolve(__dirname, '../1.txt'), {
//   encoding: 'utf-8'
// })
// console.log(data)

//  异步读取文件
const data2 = fs.readFile(path.resolve(__dirname, '../1.txt'), {
  encoding: 'utf-8'
}, (err, data) => {
  if (err) return
  console.log(data)
})

// 修改文件
fs.writeFile(path.resolve(__dirname, "../2.txt"), "abc", {flag: "a"}, (err, data) => {
  if (err) return
  console.log(data)
})

const server = http.createServer((req, res) => {
 res.end("aaa")
})

server.listen(3001)