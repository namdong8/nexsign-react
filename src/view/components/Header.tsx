/* eslint-disable no-undef */
import React from 'react'
import { useAppDispatch } from '../../store/hook'
import { initApp } from '../../store/modules/systemSlice'

function Header() {
	//✅ Redux Hook
	const dispatch = useAppDispatch()

	// ✅ Functions
	const close = () => {
		dispatch(initApp())
		window.close()
	}
	// View
	return (
		<>
			<header>
				<h1>넥스원소프트</h1>
				<button onClick={close}>x</button>
			</header>
		</>
	)
}
export default Header
