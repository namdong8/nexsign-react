import React from 'react'
import CertifySubmit from '../components/CertifySubmit'
import ProviderList from '../components/ProviderList'
import UserInfo from '../components/UserInfo'

// 사용자정보 파싱
function MainForm() {
	// ✅ View
	return (
		<>
			<form>
				<div className='ns-content'>
					<ProviderList />
					<UserInfo />
				</div>
				<div className='ns-footer'>
					<CertifySubmit />
				</div>
			</form>
		</>
	)
}

export default MainForm
