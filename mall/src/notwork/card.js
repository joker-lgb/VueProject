import {request} from "./request";

export function showcard(uid) {
   return request({
     url:'/querycard',
     params:{
       uid
     }
   })
}

export function delcardbyid(cid) {
  return request({
    url:'/delcardbyid',
    params:{
      cid
    }
  })
}
