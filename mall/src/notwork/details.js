import {request} from "./request";

export function getshopitem(sid) {
     return request({
       url:'/details',
       params:{
         sid
       }
     })
}
