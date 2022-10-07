/**
 * 인증서비스 중계모듈 API 서버
 */
const express = require('express')
const cors = require('cors')
const moment = require('moment')

const server = express()
const port = 5000

var fs = require('fs')
var dataBuffer = fs.readFileSync('./src/utils/providerList.json')
var dataJSON = dataBuffer.toString()
var providerList = JSON.parse(dataJSON)

const CONTEXT_PATH = '/nexsign/api'

server.use(cors())
server.use(express.json())
server.listen(port, () => {
	console.log(
		`넥스원소프트 중계 서버 실행 http://localhost:${port}${CONTEXT_PATH}`,
	)
})
server.get(`${CONTEXT_PATH}/provider/list`, (req, res) => {
	console.log(providerList)
	res.send(providerList)
})
server.post(`${CONTEXT_PATH}/auth/request`, (req, res) => {
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
server.post(`${CONTEXT_PATH}/auth/confirm`, (req, res) => {
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
