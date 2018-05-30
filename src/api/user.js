import ax from './config'

export default {
  login:function (params) {
    return ax.post("/loginAdmin",params);
  },
  getInfo:function () {
    return ax.get(`/user/getInfo`);
  }
}
