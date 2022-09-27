/* eslint-disable no-extra-boolean-cast */
import React, { useEffect } from 'react'
import Header from './view/layout/Header'
import Contents from './view/layout/Contents'
import Footer from './view/layout/Footer'
import ErrorModal from './view/components/ErrorModal'
import Loading from './view/components/Loading'
import { useAppDispatch, useAppSelector } from './store/hook'
import { selectSystem } from './store/modules/systemSlice'
import { fetchSetConfig, selectConfig } from './store/modules/configSlice'
import ErrorPopup from './view/components/ErrorPopup'

function App() {
	// ✅ Redux
	const { isApp } = useAppSelector(selectSystem)
	const { CONFIG_FILE_PATH } = useAppSelector(selectConfig)
	const dispatch = useAppDispatch()

	// ✅ APP 기초 셋팅
	useEffect(() => {
		if (!!CONFIG_FILE_PATH) {
			// CONFIG_FILE_PATH 경로가 설정되면 Config Setting
			dispatch(fetchSetConfig())
		}
	}, [CONFIG_FILE_PATH])

	// ✅ View
	return (
		<>
			{isApp ? (
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
			) : (
				<ErrorPopup />
			)}
		</>
	)
}

export default App
