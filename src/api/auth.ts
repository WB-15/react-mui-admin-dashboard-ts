import axios from 'axios';
import { URL } from 'src/constants/urls';

export const login_api = async (data) => {
  console.log("Here, api:::", data);
  let result;
  await axios.post(`${URL.baseAPIUrl}/api/auth/signin`, data)
   .then((res) => {
     result = {
        status:"success",
        data:res.data
     }
    }).catch((err)=>{
    result = {
        status:"error",
        data:err
    }
   })
  return result;
}  