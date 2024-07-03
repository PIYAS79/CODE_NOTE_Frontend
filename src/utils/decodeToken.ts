
import {jwtDecode} from 'jwt-decode'
export const decodeJWTtoken = (token:string)=>{
    return jwtDecode(token);
}