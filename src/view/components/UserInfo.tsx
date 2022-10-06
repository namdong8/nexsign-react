/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import { useAppDispatch, useAppSelector, useAutoFocus } from '../../store/hook'
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
function UserInfo() {
	const nameInput = useAutoFocus()
	const birthdayInput = useAutoFocus()

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
				<ul>
					<li>
						이름:{' '}
						<input
							type='text'
							onChange={onUdtName}
							value={user.name}
							ref={nameInput}
						/>
					</li>
					<li>
						생년월일:
						<input
							type='text'
							onChange={onUdtBirthday}
							value={user.birthday}
							inputMode='numeric'
							title='생년월일 여덟자리'
							placeholder='생년월일 8자리(-제외)'
							ref={birthdayInput}
						/>
					</li>
					<li>
						주민등록번호:
						<input
							type='text'
							onChange={onUdtRrn1}
							value={user.rrn1}
							inputMode='numeric'
							title='주민등록번호 앞자리'
							placeholder='주민등록번호 6자리'
						/>
						<input
							type='password'
							onChange={onUdtRrn2}
							value={user.rrn2}
							autoComplete='off'
							inputMode='numeric'
							title='주민등록번호 뒷자리'
							placeholder='주민등록번호 7자리'
						/>
					</li>
					<li>
						휴대폰번호:
						<input
							type='text'
							onChange={onUdtPhone}
							value={user.phone}
							inputMode='numeric'
							title='휴대폰번호 11자리(-제외)'
							placeholder='휴대폰번호 11자리(-제외)'
						/>
					</li>
				</ul>
			</div>
		</>
	)
}

export default UserInfo
