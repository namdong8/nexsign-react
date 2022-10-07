/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import ErrorModal from './view/components/ErrorModal'
import { system } from './store/modules/systemSlice'
import ErrorPopup from './view/components/ErrorPopup'
import { useAppSelector } from './store/hook'
import Loading from './view/components/Loading'
import MainForm from './view/layout/MainForm'

function App() {
	// ✅ Redux
	const isApp = useAppSelector(system.isApp)

	// ✅ View
	return (
		<>
			{isApp ? (
				<>
					<div className='ns-app-bg'></div>
					<Loading />
					<div className='ns-sign'>
						<ErrorModal />
						<MainForm />
					</div>
				</>
			) : (
				<ErrorPopup />
			)}
		</>
	)
}

export default App
