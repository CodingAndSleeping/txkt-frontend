import request from '@/utils/request'

const api_name = '/admin/vod/subject'
// 讲师列表
export function getChildList(id) {
  return request({
    url: `${api_name}/getChildSubject/${id}`,
    method: `get`
  })
}
