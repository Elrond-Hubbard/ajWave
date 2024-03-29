require("dotenv").config()

const express = require("express")
const app = express();
const db = require('./config/connection')
const PORT = process.env.PORT || 3000
const path = require('path')
// const router = require("./routes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use('/', router)
app.use(express.static(path.join(__dirname, '../client/dist')))

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

    socket.on('updateSynth1State', (newSynthState) => {
        socket.broadcast.emit('synth1StateChanged', newSynthState)
    })
    socket.on('updateSynth2State', (newSynthState) => {
        socket.broadcast.emit('synth2StateChanged', newSynthState)
    })
    socket.on('updateSynth3State', (newSynthState) => {
        socket.broadcast.emit('synth3StateChanged', newSynthState)
    })
    
    socket.on("disconnect", () => {
        socketsConnected.delete(socket.id);
        console.log(`${socketsConnected.size} clients connected.`)
        io.emit('logout', socketsConnected.size)
      });
}