import fetch from './request.js';
 
// 注册
export const register = (params) => fetch(`/register`, params, 'post');

// 登录
export const ssrLogin = (params) => fetch(`/login`, params, 'post');

// 查询用户信息
export const queryUserInfo = () => fetch(`/web/user/info`);

// 保存基本信息
export const saveBaseInfo = (params) => fetch('/web/user/baseInfo', params, 'post');

// 保存地址信息
export const saveAddressInfo = (params) => fetch('/web/user/addressInfo', params, 'post');

// 保存工作信息
export const saveWorkInfo = (params) => fetch('/web/user/employmentInfo', params, 'post');

// 保存收入信息
export const saveFinancialInfo = (params) => fetch('/web/user/financialInfo', params, 'post');

// 获取上传文件签名
export const getPolicy = (params) => fetch('/web/oss/verify/policy');

// 保存手持身份证照片信息
export const saveCardPic = (params) => fetch('/web/user/idcardInfo', params, 'post');
