import axios from "axios"
import json from "./json"
const GET_PROVIDER_LIST_URL = "https://localhost:3000/get/provider/list"
const SET_PROVIDER_URL = "https://localhost:3000/set/provider"

const HEADER = {
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
}

export const api = {
    getProviderList: ()=>{
        return json
        /* return axios.get(GET_PROVIDER_LIST_URL)
        .then((res)=>{
            console.log(res.data)
        }).catch((Error)=>{
            console.log(Error)
        }) */
    },
    setProviderList: (json)=>{
        return axios.post(SET_PROVIDER_URL, json, HEADER)
        .then((res) => {
            console.log(res.data); 
        }).catch((Error) => {
            console.log(Error)
        });
    },
    loadConfig: (path)=>{
        return axios.get(path)
        .then((res)=>{
            console.log(res.data)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
}
