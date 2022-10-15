/* eslint-disable no-undef */
/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { selectUser, setRrn2, setRrn1 } from '../../store/modules/userSlice'
import regExp from '../../utils/regExp'

// 사용자정보 파싱
function UserInfo({ register }) {
	// ✅ Redux
	const { name, birthday, rrn1, rrn2, phone } = useAppSelector(selectUser)

	// ✅ Functions
	const onUdtName = (e: { target: { value: string } }) => {
		e.target.value = regExp.getName(e.target.value)
	}
	const onUdtPhone = (e: { target: { value: string } }) => {
		e.target.value = regExp.getPhone(e.target.value)
	}
	const onUdtBirthday = (e: { target: { value: string } }) => {
		e.target.value = regExp.getBirthDay(e.target.value)
	}
	const onUdtRrn1 = (e: { target: { value: string } }) => {
		e.target.value = regExp.getRrn1(e.target.value)
	}
	const onUdtRrn2 = (e: { target: { value: string } }) => {
		e.target.value = regExp.getRrn2(e.target.value)
	}

	// ✅ View
	return (
		<>
			<div className='ns-user'>
				<ul>
					<li>
						이름:
						<input
							type='text'
							{...register('name', {
								value: name,
								onChange: onUdtName,
							})}
						/>
					</li>
					<li>
						생년월일:
						<input
							type='text'
							inputMode='numeric'
							title='생년월일 여덟자리'
							placeholder='생년월일 8자리(-제외)'
							{...register('birthday', {
								value: birthday,
								onChange: onUdtBirthday,
							})}
						/>
					</li>
					<li>
						주민등록번호:
						<input
							type='text'
							inputMode='numeric'
							title='주민등록번호 앞자리'
							placeholder='주민등록번호 6자리'
							{...register('rrn1', {
								value: rrn1,
								onChange: onUdtRrn1,
							})}
						/>
						<input
							type='password'
							autoComplete='off'
							inputMode='numeric'
							title='주민등록번호 뒷자리'
							placeholder='주민등록번호 7자리'
							{...register('rrn2', {
								value: rrn2,
								onChange: onUdtRrn2,
							})}
						/>
					</li>
					<li>
						휴대폰번호:
						<input
							type='text'
							inputMode='numeric'
							title='휴대폰번호 11자리(-제외)'
							placeholder='휴대폰번호 11자리(-제외)'
							{...register('phone', {
								value: phone,
								onChange: onUdtPhone,
							})}
						/>
					</li>
				</ul>
			</div>
		</>
	)
}

export default UserInfo
