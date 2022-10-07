import React, { useEffect, useRef } from 'react'
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

	const btnRef = useRef(null)
	useEffect(() => {
		if (isError) {
			btnRef.current && btnRef.current.focus()
		}
	}, [isError])

	// ✅ View
	return (
		<>
			<div style={{ display: isError ? 'block' : 'none' }}>
				<div className='ns-error'>
					<h2>{title}</h2>
					<div>{contents}</div>
					<div>
						<button type='button' onClick={isHide} ref={btnRef}>
							닫기
						</button>
					</div>
				</div>
				<div className='ns-error-bg'></div>
			</div>
		</>
	)
}

export default ErrorModal
