import React from 'react'
import { initApp } from '../../store/modules/systemSlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { selectError } from '../../store/modules/errorSlice'

function ErrorPopup() {
	// ✅ Redux Hook
	const { contents, title, isError } = useAppSelector(selectError)
	const dispatch = useAppDispatch()

	// ✅ Functions
	const close = () => {
		dispatch(initApp())
	}

	// ✅ View
	return (
		<>
			{isError ? (
				<>
					<div className='ns-app-bg'></div>
					<div className='ns-sign'>
						<h1>{title}</h1>
						<div>{contents}</div>
						<div>
							<button onClick={close}>확인</button>
						</div>
					</div>
				</>
			) : null}
		</>
	)
}

export default ErrorPopup
