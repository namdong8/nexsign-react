import React from 'react'
import Header from './view/layout/Header'
import Contents from './view/layout/Contents'
import Footer from './view/layout/Footer'
import PopupModal from './view/components/PopupModal'

function App() {
	return (
		<>
			<div className='ns-block-bg'></div>
			<div className='ns-sign'>
				<Header />
				<Contents />
				<PopupModal />
				<Footer />
			</div>
		</>
	)
}

export default App
