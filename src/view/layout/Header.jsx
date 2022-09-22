import React from 'react'
import { useAppDispatch } from '../../store/hook'
import { setOpenApp } from '../../store/modules/systemSlice'

function Header() {
	//✅ Redux Hook
	const dispatch = useAppDispatch()

	// ✅ Functions
	const close = () => {
		dispatch(setOpenApp(false))
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
