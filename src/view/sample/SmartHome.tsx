import React, { useCallback, useState } from 'react'
import Light from './Light'

function SmartHome() {
	const [masterOn, setMasterOn] = useState(false)
	const [kitchenOn, setKitchenOn] = useState(false)
	const [bathOn, setBathOn] = useState(false)

	const toggleMaster = useCallback(() => {
		setMasterOn(!masterOn)
	}, [])
	const toggleKitchen = useCallback(() => {
		setKitchenOn(!kitchenOn)
	}, [])
	const toggleBath = useCallback(() => {
		setBathOn(!bathOn)
	}, [])

	return (
		<div style={{ position: 'absolute' }}>
			<Light room='침실' on={masterOn} toggle={toggleMaster}></Light>
			<Light room='주방' on={kitchenOn} toggle={toggleKitchen}></Light>
			<Light room='욕실' on={bathOn} toggle={toggleBath}></Light>
		</div>
	)
}

export default SmartHome
