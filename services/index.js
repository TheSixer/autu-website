import api from './request.js';
 
// 注册
export const register = (params) => api(`/api/register`, params, 'post');

// 登录
export const login = (params) => api(`/api/auth/callback/credentials`, params, 'post');
// 登录
export const ssrLogin = (params) => api(`http://121.43.148.169/api/login`, params, 'post');
 