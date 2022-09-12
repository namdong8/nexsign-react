const express = require('express')
const cors = require('cors')
const server = express()
const port = 5000

var fs = require('fs');
var dataBuffer = fs.readFileSync('./src/utils/providerList.json');
var dataJSON = dataBuffer.toString();
var providerList = JSON.parse(dataJSON)

server.use(cors())
server.get('/provider/list', (req, res)=>{
    console.log(providerList)
    res.send(providerList)
})
server.listen(port, ()=>{
    console.log(`서버 실행 http://localhost:${port}`)
})