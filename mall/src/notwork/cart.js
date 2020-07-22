import {request} from "./request";

export function showcart(uid) {
   return request({
     url:'/querycart',
     params:{
       uid
     }
   })
}

export function delcartbyid(cid) {
  return request({
    url:'/delcartbyid',
    params:{
      cid
    }
  })
}
