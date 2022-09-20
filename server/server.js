/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const moment = require('moment')

const server = express()
const port = 5000

var fs = require('fs')
const path = require('path')
var dataBuffer = fs.readFileSync('./src/utils/providerList.json')
var dataJSON = dataBuffer.toString()
var providerList = JSON.parse(dataJSON)

const CONTEXT_PATH = '/main'

server.use(cors())
server.use(express.json())
server.use(CONTEXT_PATH, express.static('dist'))
server.listen(port, () => {
	console.log(`서버 실행 http://localhost:${port}`)
})
server.get('/provider/list', (req, res) => {
	console.log(providerList)
	res.send(providerList)
})
server.post('/auth/request', (req, res) => {
	console.log(req.body)
	const date = moment().format('YYYY-MM-DD HH:mm:ss')
	res.send({
		title: '인증요청',
		user: req.body,
		token: 'KDJJ&3JDN@as!29GXV2',
		ci: 'CI값1',
		updtDT: date,
	})
})
server.post('/auth/confirm', (req, res) => {
	console.log(req.body)
	const date = moment().format('YYYY-MM-DD HH:mm:ss')
	res.send({
		title: '인증완료',
		user: req.body,
		token: 'KDJJ&3JDN@as!29GXV2',
		ci: 'CI값1',
		updtDT: date,
	})
})

server.get(CONTEXT_PATH, (req, res) => {
	const indexPath = path.join(__dirname, '..', '/dist/index.html')
	res.sendFile(indexPath)
})
