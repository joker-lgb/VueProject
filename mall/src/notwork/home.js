import {request} from "./request";

export function getshops() {
    return request({
         url:"/queryshops"
    })
}

export function cart(sid,uid,sname,scount,totalprice,simg) {
    return request({
      url:"/cart",
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

export function getpage(currentpage) {
    return request({
      url:'/queryshops',
      params:{
        currentpage
      }
    })
}

export function querylbt() {
  return request({
    url:'/querylbt',
  })
}
