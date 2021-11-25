import axios from 'axios';

const instance = axios.create({ timeout: 1000 * 12 });

const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      break;
    // 404请求不存在
    case 404:
      break;
    default:
      console.log(other);
  }
};

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res) =>
    res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),
  // 请求失败
  (error) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  }
);

const theAxios = instance;
const BASE = {
  ServerURI: `${window.location.origin}/api`,
};

const base64toblob = (base64String) => {
  //这里对base64串进行操作，去掉url头，并转换为byte
  const bytes = window.atob(base64String.split(',')[1]);
  const array = [];
  for (let i = 0; i < bytes.length; i++) {
    array.push(bytes.charCodeAt(i));
  }
  const blob = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  return blob;
};

const api = {
  getFaceProperties(params) {
    // const { image } = params;
    const { image } = params;
    const formData = new FormData();
    // Object.keys(params).forEach((item) => {
    //   formData.append(item, params[item]);
    // });
    const blob = base64toblob(image);
    formData.append('image', blob, Date.now() + '.jpg');
    return theAxios.post(`${BASE.ServerURI}/get_attr`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },

  getFaceColorImage(params) {
    const { image } = params;
    const formData = new FormData();
    const blob = base64toblob(image);
    formData.append('image', blob, Date.now() + '.jpg');
    return theAxios.post(`${BASE.ServerURI}/get_face`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },
};

export default api;
