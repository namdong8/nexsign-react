/**
 * 이용기관 포탈 사이트
 */
const express = require('express')
const cors = require('cors')

const server = express()
const port = 8000

const path = require('path')
const CONTEXT_PATH = '/portal'

server.use(cors())
server.use(express.json())
server.use(CONTEXT_PATH, express.static('dist'))
server.listen(port, () => {
	console.log(`이용기관 서버 실행 http://localhost:${port}${CONTEXT_PATH}`)
})
server.get(CONTEXT_PATH, (req, res) => {
	const indexPath = path.join(__dirname, '..', '/dist/nex-sign/index.html')
	res.sendFile(indexPath)
})
