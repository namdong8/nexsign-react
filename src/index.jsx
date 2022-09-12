import '@babel/polyfill'
import React from "react"
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import {setUser} from './store//modules//userinfoSlice.js'
import './utils/cssVars'

// CSS Load
import './assets/css/common.css'
import './assets/css/app.css'
import './assets/css/fonts.css'

export function SET_USER(json){
  // console.log(`SET_USER: ${JSON.stringify(json)}`)
  store.dispatch(setUser(json))

}
export function SET_SELECT_PROVIDER(json){
  console.log(`SET_SELECT_PROVIDER ID: ${JSON.stringify(json)}`)
}
export function SET_CONFIG(json){
  console.log(`SET_CONFIG: ${JSON.stringify(json)}`)
}

export function POPUP(){
  const container = document.getElementById('root')
  const root = createRoot(container)
  root.render(
      <Provider store={store}>
          <App />
      </Provider>
  )
}

export const CONFIG = {
  TOKEN_API_CALLBACK : () => {
    alert("토큰요청 CALLBACK")
  },
  AUTH_API_CALLBACK: () => {
    alert('인증요청 CALLBACK')
  },
  CONFIRM_API_CALLBACK : () => {
    alert('인증확인 CALLBACK')
  }
}