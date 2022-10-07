/* eslint-disable no-extra-boolean-cast */
import React, { useRef } from 'react'
import CertifySubmit from '../components/CertifySubmit'
import ProviderList from '../components/ProviderList'
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import {
	fetchAuthConfirm,
	fetchAuthRequest,
} from '../../store/modules/certifySlice'
import { useAppDispatch } from '../../store/hook'

// 사용자정보 파싱
function MainForm() {
	// 여기에 ref Tag 구성

	// 사용자정보 ref
	const nameRef = useRef(null)
	const birthdayRef = useRef(null)
	const phoneRef = useRef(null)
	const rrn1Ref = useRef(null)
	const rrn2Ref = useRef(null)

	//✅ Redux Hook
	const dispatch = useAppDispatch()

	// ✅ API 통신
	const fetchRequest = async () => {
		// 인증요청 Validation 검증 후 API 통신
		await dispatch(fetchAuthRequest())
	}
	const fetchConfirm = async () => {
		// 인증확인 Validation 검증 후 API 통신
		await dispatch(fetchAuthConfirm())
	}

	// Test
	const nameFocus = async () => {
		nameRef.current.focus()
	}

	// ✅ View
	return (
		<>
			<Header />
			<form>
				<div className='ns-content'>
					<ProviderList />
					<UserInfo
						nameRef={nameRef}
						birthdayRef={birthdayRef}
						phoneRef={phoneRef}
						rrn1Ref={rrn1Ref}
						rrn2Ref={rrn2Ref}
					/>
				</div>
				<div className='ns-footer'>
					<CertifySubmit
						nameFocus={nameFocus}
						fetchRequest={fetchRequest}
						fetchConfirm={fetchConfirm}
					/>
				</div>
			</form>
		</>
	)
}

export default MainForm
