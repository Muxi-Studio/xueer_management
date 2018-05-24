export function encodeUrlParams(data) {
  return Object.keys(data)
    .map(function(key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
    })
    .join("&");
}
