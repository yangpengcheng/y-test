import request from '@/utils/request.js'

// 获取奖惩信息
export function get_rewards(data) {
  return request({
    url: '/reward',
    method: 'get',
    params: {...data}
  })
}



// 奖惩计算
export function modify_reward(data) {
  return request({
    url: '/reward',
    method: 'post',
    data: data
  })
}


