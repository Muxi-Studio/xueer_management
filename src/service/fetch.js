import { encodeUrlParams } from "../util";

/**
 *
 * @param {string} url
 * @param {object} opt
 * @param {object} opt.data
 * @param {object} opt.headers
 * @param {object} opt.responseHeaders - 需要返回的 http response 的 headers，传入一个 key 的数组，比如 ['link']
 */

/**
 * 如果传了 opt.responseHeaders。则返回的 Promise then 方法中拿到一个对象 { json, headers }
 */
export default function FetchData(url, opt = {}) {
  // 设置请求方法
  opt.method = opt.method || "GET";

  // 处理要发送的数据
  if (opt.data) {
    if (/GET/i.test(opt.method)) {
      url = `${url}/?${encodeUrlParams(opt.data)}`;
    } else {
      opt.headers = opt.headers || {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      opt.body = JSON.stringify(opt.data);
      if (opt.token) {
        opt.headers.token = opt.token;
      }
    }
  }

  return fetch(url, opt).then(response => {
    return response.json().then(json => {
      switch (response.status) {
        case 200:
          if (opt.responseHeaders && opt.responseHeaders.length) {
            let headers;
            headers = opt.responseHeaders.map(key => {
              return response.headers.get(key);
            });
            return {
              json,
              headers
            };
          }
          return json;
        case 201:
          if (opt.responseHeaders && opt.responseHeaders.length) {
            let headers;
            headers = opt.responseHeaders.map(key => {
              return response.headers.get(key);
            });
            return {
              json,
              headers
            };
          }
          return json;
        case 502:
          // util.message is not defined
          util.message(response.statusText, "err");
          throw response.statusText;
      }
    });
  });
}
