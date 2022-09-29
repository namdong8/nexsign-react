/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import UserInfo from '../components/UserForm'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import {
	setName,
	setBirthday,
	setPhone,
	selectUser,
	setRrn2,
	setRrn1,
} from '../../store/modules/userSlice'
import regExp from '../../utils/regExp'

// 사용자정보 파싱
function User() {
	// ✅ Redux
	const user = useAppSelector(selectUser)
	const dispatch = useAppDispatch()

	// ✅ Functions
	const onUdtName = (e: { target: { value: string } }) => {
		if (regExp.name(e.target.value)) dispatch(setName(e.target.value))
	}
	const onUdtRrn1 = (e: { target: { value: string } }) => {
		if (regExp.rrn1Number(e.target.value)) dispatch(setRrn1(e.target.value))
	}
	const onUdtRrn2 = (e: { target: { value: string } }) => {
		if (regExp.rrn2Number(e.target.value)) dispatch(setRrn2(e.target.value))
	}
	const onUdtBirthday = (e: { target: { value: string } }) => {
		if (regExp.birthNumber(e.target.value)) dispatch(setBirthday(e.target.value))
	}
	const onUdtPhone = (e: { target: { value: string } }) => {
		if (regExp.phoneNumber(e.target.value)) dispatch(setPhone(e.target.value))
	}

	// ✅ View
	return (
		<>
			<div className='ns-user'>
				<UserInfo
					user={user}
					onUpdateName={onUdtName}
					onUpdateRrn1={onUdtRrn1}
					onUpdateRrn2={onUdtRrn2}
					onUpdateBirthday={onUdtBirthday}
					onUpdatePhone={onUdtPhone}
				/>
			</div>
		</>
	)
}

export default User
