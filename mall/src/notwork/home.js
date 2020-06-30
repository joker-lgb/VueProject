import {request} from "./request";

export function getHomelbt() {
    return request({
         url:"mall/querylbt"
    })
}
