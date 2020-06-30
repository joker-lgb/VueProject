
import axios from 'axios'
const instance=axios.create({
  baseURL:'http://localhost:8881',
  timeout:5000
 })
export function request(config) {
      return instance(config);
}
