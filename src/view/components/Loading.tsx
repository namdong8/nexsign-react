import React from 'react'
import { system } from '../../store/modules/systemSlice'
import { useAppSelector } from '../../store/hook'
import loading from '../../assets/img/loading.gif'

function Loading() {
	// ✅ Redux Hook
	const isLoading = useAppSelector(system.isLoading)

	// ✅ View
	return (
		<>
			{isLoading && (
				<div hidden={!isLoading} className='ns-loading'>
					<img src={loading} />
				</div>
			)}
		</>
	)
}

export default Loading
