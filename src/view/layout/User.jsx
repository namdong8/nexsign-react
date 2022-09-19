import React from 'react'
import UserInfo from '../components/UserInfo'
import { useAppDispatch, useAppSelector } from '../../store/redux'
import {
	setName,
	setBirthday,
	setPhone,
	selectUserinfo,
} from '../../store/modules/userinfoSlice'

// 사용자정보 파싱
function User() {
	// ✅ Redux
	const user = useAppSelector(selectUserinfo)
	const dispatch = useAppDispatch()

	// ✅ Functions
	const onUpdateName = (e) => {
		const { value } = e.target
		// Validation Check
		dispatch(setName(value))
	}
	const onUpdateBirthday = (e) => {
		const { value } = e.target
		// Validation Check
		dispatch(setBirthday(value))
	}
	const onUpdatePhone = (e) => {
		const { value } = e.target
		// Validation Check
		dispatch(setPhone(value))
	}

	// ✅ View
	return (
		<>
			<UserInfo
				user={user}
				onUpdateName={onUpdateName}
				onUpdateBirthday={onUpdateBirthday}
				onUpdatePhone={onUpdatePhone}
			/>
		</>
	)
}

export default User
