import React from 'react'
import Header from './view/layout/Header'
import Contents from './view/layout/Contents'
import Footer from './view/layout/Footer'
import ErrorModal from './view/components/ErrorModal'
import Loading from './view/components/Loading'

function App() {
	return (
		<>
			<div className='ns-app-bg'></div>
			<Loading />
			<div className='ns-sign'>
				<ErrorModal />
				<Header />
				<Contents />
				<Footer />
			</div>
		</>
	)
}

export default App
