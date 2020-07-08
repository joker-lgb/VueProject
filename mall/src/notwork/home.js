import {request} from "./request";

export function getHomelbt() {
    return request({
         url:"/queryshops"
    })
}

export function card(sid,uid,sname,scount,totalprice,simg) {
    return request({
      url:"/card",
      params:{
        sid,
        uid,
        sname,
        scount,
        totalprice,
        simg,
      }
    })
}
