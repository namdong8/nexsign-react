import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {
	fetchGetProviderList,
	selectProvider,
} from '../../store/modules/providerSlice'

function ProviderList() {
	// ✅ Redux
	const { list, id } = useAppSelector(selectProvider)
	const dispatch = useAppDispatch()

	// ✅ API 통신
	const getList = async () => {
		await dispatch(fetchGetProviderList())
	}

	// ✅ View
	return (
		<>
			<div className='ns-provider'>
				<button type='button' onClick={getList}>
					인증기관 목록 조회
				</button>
				<div style={{ fontSize: '12px' }}>
					<div>선택된 인증기관 ID : {id}</div>
					<div>{JSON.stringify(list)}</div>
				</div>
			</div>
		</>
	)
}

export default ProviderList
