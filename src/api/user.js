import api from './index'
// axios
import request from '@/utils/request'
// 1
export function getgridarealist(params) {
  return request({
    url: api.Getgridarealist,
    method: 'get',
    params,
    hideloading: true
  })
}
// 2
export function handleAlarm(data) {
  return request({
    url: api.HandleAlarm,
    method: 'post',
    data,
    hideloading: true
  })
}
