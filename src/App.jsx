import React from 'react'
import Header from './view/layout/Header'
import Contents from './view/layout/Contents'
import Footer from './view/layout/Footer'
import ErrorModal from './view/components/ErrorModal'
import Loading from './view/components/Loading'
import { useAppSelector } from './store/hook'
import { selectSystem } from './store/modules/systemSlice'

function App() {
	// ✅ Redux
	const { isApp } = useAppSelector(selectSystem)

	// ✅ View
	return (
		<>
			{isApp && (
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
			)}
		</>
	)
}

export default App
