import {request} from "./request";

export function login(uname,password,code) {
  return request({
    url:'/login',
    params:{
      uname,
      password,
      code
    }
  })
}

