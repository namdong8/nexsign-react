import React from 'react'

// ✅ Props 기본값
UserInfo.defaultProps = {
	test: '',
}

function UserInfo({
	onUpdateName,
	onUpdateBirthday,
	onUpdatePhone,
	onUpdateRrn1,
	onUpdateRrn2,
	user,
}) {
	// ✅ View
	return (
		<>
			<form>
				<ul>
					<li>
						이름: <input type='text' onChange={onUpdateName} value={user.name} />
					</li>
					<li>
						생년월일:
						<input
							type='text'
							onChange={onUpdateBirthday}
							value={user.birthday}
							inputMode='numeric'
							title='생년월일 여덟자리'
							placeholder='생년월일 8자리(-제외)'
						/>
					</li>
					<li>
						주민등록번호:
						<input
							type='text'
							onChange={onUpdateRrn1}
							value={user.rrn1}
							inputMode='numeric'
							title='주민등록번호 앞자리'
							placeholder='주민등록번호 6자리'
						/>
						<input
							type='password'
							onChange={onUpdateRrn2}
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
							onChange={onUpdatePhone}
							value={user.phone}
							inputMode='numeric'
							title='휴대폰번호 11자리(-제외)'
							placeholder='휴대폰번호 11자리(-제외)'
						/>
					</li>
				</ul>
			</form>
		</>
	)
}

export default UserInfo
