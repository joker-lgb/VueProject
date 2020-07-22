import{request} from "./request";


export function queryclothes() {
    return request({
      url:'queryclothes'
    })
}

export function querypants() {
  return request({
    url:'querypants'
  })
}

export function queryshoe() {
  return request({
    url:'queryshoe'
  })
}
