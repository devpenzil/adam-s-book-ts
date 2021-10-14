import axios from '../axios/authinstance'
import {API_KEY,sign_in} from '../constants/constants'

export const loggingin = (email:string,password:string) => {
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrFy5oYlmhZZ3mWVl6dYQiV-Z3acgHt38`,{
        "email" : email,
        "password" : password,
        "returnSecureToken": true
    }).then((Response)=>{
        localStorage.clear()
        const responsedata = Response.data
        localStorage.setItem("success",JSON.stringify(responsedata))
    }).catch((Error)=>{
        localStorage.setItem('error',Error.response.data.error.message)
    })
}