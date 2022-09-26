import React from 'react'
import { hidePopup, selectError } from '../../store/modules/errorSlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'

function ErrorModal() {
	// ✅ Redux Hook
	const { title, contents, isError } = useAppSelector(selectError)
	const dispatch = useAppDispatch()

	// ✅ function
	const isHide = () => {
		dispatch(hidePopup())
	}

	// ✅ View
	return (
		<>
			{isError && (
				<>
					<div className='ns-error'>
						<h2>{title}</h2>
						<div>{contents}</div>
						<div>
							<button onClick={isHide}>닫기</button>
						</div>
					</div>
					<div className='ns-error-bg'></div>
				</>
			)}
		</>
	)
}

export default ErrorModal
