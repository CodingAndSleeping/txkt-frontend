import request from '@/utils/request'
import Axios from 'axios'

const api_name = '/admin/vod/subject'
// 讲师列表
export function getChildList(id) {
  return request({
    url: `${api_name}/getChildSubject/${id}`,
    method: `get`
  })
}

export function exportData() {
  return Axios.request({
    baseURL: process.env.VUE_APP_BASE_API,
    url: `${api_name}/exportData`,
    method: `get`
  })
}
