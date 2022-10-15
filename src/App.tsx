/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import { system } from './store/modules/systemSlice'
import ErrorPopup from './view/components/ErrorPopup'
import { useAppSelector } from './store/hook'
import Loading from './view/components/Loading'
import MainForm from './view/layout/MainForm'
import Options from './utils/umdCostomerOptions'

function App() {
	// ✅ Redux
	const isApp = useAppSelector(system.isApp)
	isApp && Options.LOADED_VIEW()

	// ✅ View
	return (
		<>
			{isApp ? (
				<>
					<div className='ns-app-bg'></div>
					<Loading />
					<div className='ns-sign'>
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
