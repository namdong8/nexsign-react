/* eslint-disable no-undef */
/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import { useForm } from 'react-hook-form'
import CertifySubmit from '../components/CertifySubmit'
import ProviderList from '../components/ProviderList'
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import {
	fetchAuthConfirm,
	fetchAuthRequest,
} from '../../store/modules/certifySlice'
import { useAppDispatch } from '../../store/hook'
import { setUser, UserState } from '../../store/modules/userSlice'
import { setErrPopupMsg } from '../../store/modules/errorSlice'
import regExp from '../../utils/regExp'
import ErrorModal from '../../view/components/ErrorModal'

// 사용자정보 파싱
function MainForm() {
	const { register, handleSubmit, setFocus, getValues, setValue } = useForm()

	//✅ Redux Hook
	const dispatch = useAppDispatch()

	// ✅ Functions
	const fetchConfirm = async () => {
		// 인증확인 Validation 검증 후 API 통신
		await dispatch(fetchAuthConfirm())
	}

	const fnSubmit = handleSubmit(async (data: UserState) => {
		const { name, phone, birthday, rrn1, rrn2, providerId } = getValues()
		// if (!!!providerId) {
		// 	setErrPopupMsg('인증기관 미선택')
		// 	return setValue('errorCloseAfterFocus', 'providerId')
		// }
		if (!!!regExp.isName(name)) {
			dispatch(setErrPopupMsg('사용자 이름 검증오류'))
			return setValue('errorCloseAfterFocus', 'name')
		}
		if (!!!regExp.birthdayCheck(birthday)) {
			dispatch(setErrPopupMsg('생년월일 검증오류'))
			return setValue('errorCloseAfterFocus', 'birthday')
		}
		if (!!!regExp.isPhone(phone)) {
			dispatch(setErrPopupMsg('휴대폰번호  검증오류'))
			return setValue('errorCloseAfterFocus', 'phone')
		}
		if (!!!regExp.rrn1Check(rrn1)) {
			dispatch(setErrPopupMsg('주민번호1 검증오류'))
			return setValue('errorCloseAfterFocus', 'rrn1')
		}
		if (!!!regExp.rrn2Check(rrn2)) {
			dispatch(setErrPopupMsg('주민번호2 검증오류'))
			return setValue('errorCloseAfterFocus', 'rrn2')
		}
		// if (!!!regExp.rrnCheck(rrn1, rrn2)) {
		// 	dispatch(setErrPopupMsg('주민번호 전체 검증오류'))
		// 	return setValue('errorCloseAfterFocus', 'rrn1')
		// }

		// 사용자정보 State 갱신
		dispatch(setUser(data))
		await dispatch(fetchAuthRequest())
	})

	// ✅ View
	return (
		<>
			<ErrorModal register={register} setFocus={setFocus} getValues={getValues} />
			<Header />
			<form onSubmit={fnSubmit}>
				<div className='ns-content'>
					<ProviderList />
					<UserInfo register={register} />
				</div>
				<div className='ns-footer'>
					<CertifySubmit fetchConfirm={fetchConfirm} />
				</div>
			</form>
		</>
	)
}

export default MainForm
