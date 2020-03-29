import request from '@/utils/request'
export const login = () => {
  return request({
    url: '/user/login',
    method: 'get'

  })
}
