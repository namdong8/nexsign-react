import React from 'react'
import {
	fetchAuthConfirm,
	fetchAuthRequest,
	fetchNetworkError,
	fetchSystemError,
	selectCertify,
} from '../../store/modules/certifySlice'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { fetchSetTest } from '../../store/modules/configSlice'
import { setFocusTarget } from '../../store/modules/systemSlice'

/** 인증요청, 인증확인 */
function CertifySubmit() {
	// ✅ Redux
	const { authRequestJson, authConfirmJson } = useAppSelector(selectCertify)
	const dispatch = useAppDispatch()

	// ✅ API 통신
	const authRequest = async () => {
		await dispatch(fetchAuthRequest())
	}
	const authConfirm = async () => {
		await dispatch(fetchAuthConfirm())
	}
	const test = async () => {
		await dispatch(fetchNetworkError())
	}
	const test2 = async () => {
		await dispatch(fetchSetTest())
	}
	const test3 = async () => {
		await dispatch(fetchSystemError())
	}
	const nameFocus = async () => {
		dispatch(setFocusTarget({ key: 'isNameFocus', value: true }))
	}
	const birthdayFocus = async () => {
		dispatch(setFocusTarget({ key: 'isBirthdayFocus', value: true }))
	}

	// ✅ View
	return (
		<>
			<div className='ns-certify' style={{ fontSize: '11px' }}>
				<button type='button' onClick={nameFocus}>
					이름 포커싱
				</button>
				<button type='button' onClick={birthdayFocus}>
					생년월일 포커싱
				</button>
				<button type='button' onClick={authRequest}>
					인증요청
				</button>
				<button type='button' onClick={test}>
					네트워크 에러
				</button>
				<button type='button' onClick={test2}>
					설정파싱 에러
				</button>
				<button type='button' onClick={test3}>
					시스템 에러
				</button>
				<div>{JSON.stringify(authRequestJson)}</div>
				<button type='button' onClick={authConfirm}>
					인증확인
				</button>
				<div>{JSON.stringify(authConfirmJson)}</div>
			</div>
		</>
	)
}

export default CertifySubmit
