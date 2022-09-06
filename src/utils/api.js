import axios from "axios"

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
        return axios.get(GET_PROVIDER_LIST_URL)
        .then((Response)=>{
            console.log(Response.data)
        }).catch((Error)=>{
            console.log(Error)
        })
    },
    setProviderList: (json)=>{
        return axios.post(SET_PROVIDER_URL, json, HEADER)
        .then((response) => {
            console.log(response.data); 
        }).catch((Error) => {
            console.log(Error)
        });
    }
}
