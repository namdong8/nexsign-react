import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {
	fetchGetProviderList,
	selectProvider,
} from '../../store/modules/providerSlice'
import ProviderList from '../components/ProviderList'

function Provider() {
	// ✅ Redux
	const { list, id } = useAppSelector(selectProvider)
	const dispatch = useAppDispatch()

	// ✅ API 통신
	const getList = async () => {
		await dispatch(fetchGetProviderList()).unwrap()
	}

	// ✅ View
	return (
		<>
			<div className='ns-provider'>
				<button onClick={getList}>인증기관 목록 조회</button>
				<ProviderList list={list} id={id} />
			</div>
		</>
	)
}

export default Provider
