import React, { useEffect, useRef } from 'react'
import { hidePopup, selectError } from '../../store/modules/errorSlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'

function ErrorModal({ register, setFocus, getValues }) {
	// ✅ Redux Hook
	const { title, contents, isError } = useAppSelector(selectError)
	const dispatch = useAppDispatch()

	// ✅ function
	const isHide = () => {
		dispatch(hidePopup())
		setFocus(getValues('errorCloseAfterFocus'))
	}
	useEffect(() => {
		isError && setFocus('errorContent')
	}, [isError])

	// ✅ View
	return (
		<>
			<div style={{ display: isError ? 'block' : 'none' }}>
				<div className='ns-error'>
					<h2>{title}</h2>
					<div
						tabIndex={0}
						className='ns-error-contents'
						{...register('errorContent')}>
						{contents}
					</div>
					<div>
						<button
							type='button'
							onClick={isHide}
							{...register('errorCloseAfterFocus')}>
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
