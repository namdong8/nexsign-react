import React from 'react'

function ProviderList(props) {
	const { list, id } = props

	// ✅ View
	return (
		<>
			<div style={{ fontSize: '12px' }}>
				<div>선택된 인증기관 ID : {id}</div>
				<div>{JSON.stringify(list)}</div>
			</div>
		</>
	)
}

export default ProviderList
