import fs from "fs"
import path from "path"
import http from "http"
import express from "express"
import cors from "cors"
const fspromise = fs.promises;

// http设置服务器
// const readFile = () => {
//   return new Promise((resolve, reject) => {
//     const data = fs.readFile(path.resolve(__dirname, "../static/html/index.html"), "utf-8", (err, data) => {
//       if (err) return reject(err)
//       resolve(data)
//     })
//   })
// }

// const server = http.createServer(async (req, res) => {
//   if (req.url == "/") {
//     res.end("/")
//   } else if (req.url == "/user") {
//     res.end("user")
//   } else if (req.url == "/index.html") {
//     const data = await readFile()
//     res.end(data)
//   } else if (req.url == "/index") {
//     const data = await fspromise.readFile(path.resolve(__dirname, "../static/html/index.html"))
//     res.setHeader("Content-type", "text/html") //"application/json"
//     console.log(data)
//     res.end(data)
//   }
// })

// server.listen(3000)


// express框架设置服务器
const app = express()

// app.use((req,res,next) => {
//   // 设置跨域
//   console.log(123)
//   next()
// })
app.use(cors()) //cors插件设置跨域
app.use(express.static(path.resolve(__dirname, "../static"))) //自动加载静态文件

app.get("/", (req, res)=>{
  res.json({a: 1})
})
app.get("/user", (req,res) => {
  res.send("user")
})

app.listen(3000)