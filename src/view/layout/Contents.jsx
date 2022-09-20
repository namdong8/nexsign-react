import React from 'react'
import Provider from './Provider'
import User from './User'

// 사용자정보 파싱
function Contents() {
	// ✅ View
	return (
		<>
			<div className='ns-content'>
				<Provider />
				<User />
			</div>
		</>
	)
}

export default Contents
