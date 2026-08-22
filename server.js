import express from "express"
import http from "http"

const app = express()

const server = http.createServer(app)

server.listen(500, ()=>{
    console.log("Server is running on port number 5000")
})