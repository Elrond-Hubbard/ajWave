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

    socket.on('updateSynthState', (newSynthState) => {
        socket.broadcast.emit('synthStateChanged', newSynthState)
    })

    socket.on('waveform', (waveform) => {
        socket.broadcast.emit('waveform', waveform)
    })
    socket.on('unison', (unison) => {
        socket.broadcast.emit('unison', unison)
    })
    socket.on('count', (count) => {
        socket.broadcast.emit('count', count)
    })
    socket.on('ampAttack', (ampAttack) => {
        socket.broadcast.emit('ampAttack', ampAttack)
    })
    socket.on('ampDecay', (ampDecay) => {
        socket.broadcast.emit('ampDecay', ampDecay)
    })
    socket.on('ampSustain', (ampSustain) => {
        socket.broadcast.emit('ampSustain', ampSustain)
    })
    socket.on('ampRelease', (ampRelease) => {
        socket.broadcast.emit('ampRelease', ampRelease)
    })
    socket.on('filtAttack', (filtAttack) => {
        socket.broadcast.emit('filtAttack', filtAttack)
    })
    socket.on('filtDecay', (filtDecay) => {
        socket.broadcast.emit('filtDecay', filtDecay)
    })
    socket.on('filtSustain', (filtSustain) => {
        socket.broadcast.emit('filtSustain', filtSustain)
    })
    socket.on('filtRelease', (filtRelease) => {
        socket.broadcast.emit('filtRelease', filtRelease)
    })
    socket.on('cutoff', (cutoff) => {
        socket.broadcast.emit('cutoff', cutoff)
    })
    socket.on('resonance', (resonance) => {
        socket.broadcast.emit('resonance', resonance)
    })
    
    socket.on("disconnect", () => {
        socketsConnected.delete(socket.id);
        console.log(`${socketsConnected.size} clients connected.`)
        io.emit('logout', socketsConnected.size)
      });
}