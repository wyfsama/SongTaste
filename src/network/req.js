import axios from 'axios'
const BASEURL = 'http://localhost:3000'

export function request(url){
    return axios.get(BASEURL+url)
}