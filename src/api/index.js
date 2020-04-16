import request from '@/utils/request'
/**
 * 登录接口
 */
export const login = () => {
  return request({
    url: '/user/login',
    method: 'get'
  })
}
/**
 * 获取头部导航产品数据, 首页商品
 */
export const getProduct = (data) => {
  return request({
    url: '/products',
    params: data
  })
}
