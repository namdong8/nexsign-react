import { AnyAction, Store, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect, useRef } from 'react'
import {
	RootStateOrAny,
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux'
import store from './store'

// Get the root state's type from reducers
export type RootState = ReturnType<typeof store.getState>

// Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>

// Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootStateOrAny, AnyAction>, 'dispatch'> & {
	dispatch: AppThunkDispatch
}
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAutoFocus = () => {
	const inputRef = useRef(null)

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])

	return inputRef
}
