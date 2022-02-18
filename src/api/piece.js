import request from '@/utils/request.js'


// 获取计件工资
export function get_pieces(data) {
  return request({
    url: '/piece',
    method: 'get',
    params: {...data}
  })
}

// 计件工资核算
export function cal_piece(data) {
  return request({
    url: '/piece',
    method: 'post',
    data: data
  })
}

// 计件工资统计查询
export function get_piece_query(data) {
  return request({
    url: '/piece/query',
    method: 'get',
    params: {...data}
  })
}

