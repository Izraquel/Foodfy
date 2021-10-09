const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("public"))
server.use(express.static("assets"))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function (req, res) {
    return res.render("index")
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/receitas", function (req, res) {
    return res.render("receitas")
})


server.listen(5000, function() {
    console.log("Server is running");
})