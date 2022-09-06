import '@babel/polyfill'
import React from "react"
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'

import store from './store/store'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    // Provider 는 react-redux 라이브러리에 내장되어있는, 
    // 리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트
    <Provider store={store}>
        <App />
    </Provider>
)
