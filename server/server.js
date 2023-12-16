require("dotenv").config()

const express = require("express")
const app = express();
const db = require('./config/connection')
const PORT = process.env.PORT || 3000
// const router = require("./routes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use('/', router)

const server = require('http').createServer(app)


db.once('open', () => {
    server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
})

const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3001'}});

io.on('connection', onConnected);
let socketsConnected= new Set()

function onConnected(socket) {
    socketsConnected.add(socket.id)
    console.log(socket.id, "connected")
    console.log(`${socketsConnected.size} clients connected.`)
    io.emit('login', socketsConnected.size)

    socket.on('updateSynthState', (newSynthState) => {
        socket.broadcast.emit('synthStateChanged', newSynthState)
    })
    
    socket.on("disconnect", () => {
        socketsConnected.delete(socket.id);
        console.log(`${socketsConnected.size} clients connected.`)
        io.emit('logout', socketsConnected.size)
      });
}