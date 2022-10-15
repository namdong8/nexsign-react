/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { addCount, getTemplate, selectTemplate } from '../sample/_templateSlice'

function Template() {
	// ✅ 지역변수
	const [names, setNames] = useState([])
	const [input, setInput] = useState('')
	const [number, setNumber] = useState(0)

	// ✅ Redux
	const { name, count, value } = useAppSelector(selectTemplate)
	const dispatch = useAppDispatch()

	// ✅ API 통신
	const testAPI = async (id) => {
		try {
			const user = await dispatch(getTemplate())
			// Success
		} catch (err) {
			// Error
		}
	}

	// ✅ Functions
	// Action을 발생시켜 상태값 변경
	const onMinus = useCallback(() => {
		dispatch(addCount(value - 1))
	}, [dispatch, value])

	const onAdd = useCallback(() => {
		dispatch(addCount(value + 1))
	}, [dispatch, value])

	// ✅ View
	return (
		<>
			<header>
				<h1>테스트: {value}</h1>
				<div>
					<button onClick={onAdd}>+</button>
					<button onClick={onMinus}>-</button>
				</div>
			</header>
		</>
	)
}

export default Template
