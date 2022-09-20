/* eslint-disable no-undef */
import React from 'react'
import {
	fetchAuthConfirm,
	fetchAuthRequest,
	selectCertify,
} from '../../store/modules/certifySlice'
import { useAppDispatch, useAppSelector } from '../../store/redux'

/** 인증요청, 인증확인 */
function CertifySubmit() {
	// ✅ Redux
	const { authRequestJson, authConfirmJson } = useAppSelector(selectCertify)
	const dispatch = useAppDispatch()

	// ✅ API 통신
	const authRequest = async () => {
		await dispatch(fetchAuthRequest()).unwrap()
	}
	const authConfirm = async () => {
		await dispatch(fetchAuthConfirm()).unwrap()
	}
	// ✅ View
	return (
		<>
			<div className='ns-certify' style={{ fontSize: '11px' }}>
				<button onClick={authRequest}>인증요청</button>
				<div>{JSON.stringify(authRequestJson)}</div>
				<button onClick={authConfirm}>인증확인</button>
				<div>{JSON.stringify(authConfirmJson)}</div>
			</div>
		</>
	)
}

export default CertifySubmit
