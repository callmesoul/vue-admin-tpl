import axios from 'axios';
import store from '../vuex/store'
import {Message} from 'element-ui';
if(process.env.NODE_ENV=="development"){//测试域名
  axios.defaults.baseURL = "http://localhost:7001/api";
}else{//正式域名
  axios.defaults.baseURL = "https://readapi.qk100.com";
}
console.log('store.state.auth.token',store.state.auth.token);
// let token=store.state.auth.token;
// axios.defaults.headers.common['token'] = token;
// axios.defaults.headers['token'] = store.state.auth.token;
import { Indicator } from 'mint-ui';

axios.interceptors.request.use(
  config => {
    Indicator.open('加载中...');
    config.headers['token']=store.state.auth.token;
    return config;
  }
);
axios.interceptors.response.use(
  response => {
    Indicator.close();
    return response.data;
  },
  error => {
    Indicator.close();
    if (error.response) {
      if (error.response.status === 403 || error.response.status === 401) {
        Message.error(error.response.data.error);
        store.commit("LOGOUT_USER");
      }else {
        Message.error(error.response.data.error);
      }
    }
    return Promise.reject(error.response.data);  // 返回接口返回的错误信息
  }
);

export default axios;
