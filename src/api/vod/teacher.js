import request from '@/utils/request'

const api_name = '/admin/vod/teacher'
// 讲师列表
export function pageList(page, limit, searchObj) {
  return request({
    url: `${api_name}/findQueryPage/${page}/${limit}`,
    method: `post`,
    data: searchObj
  })
}

// 根据id删除讲师
export function removeById(id) {
  return request({
    url: `${api_name}/remove/${id}`,
    method: `delete`
  })
}

// 新增讲师
export function save(teacher) {
  return request({
    url: `${api_name}/save`,
    method: `post`,
    data: teacher
  })
}

// 根据id查询讲师
export function getById(id) {
  return request({
    url: `${api_name}/get/${id}`,
    method: `get`
  })
}

// 根据id修改讲师
export function updateById(teacher) {
  return request({
    url: `${api_name}/update`,
    method: `put`,
    data: teacher
  })
}

// 批量删除讲师
export function batchRemove(idList) {
  return request({
    url: `${api_name}/batchRemove`,
    method: `delete`,
    data: idList
  })
}

