import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  status: 0,
  data: {
    'id|1100-1200': 0,
    name: '@cname',
    email: '@email',
    phone: '',
    startTime: '',
    role: 0
  },
  msg: 'success'

})
