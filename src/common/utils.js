//工具方法

//封装的防抖函数
export function debounce(func, delay=500) { //1.传入要防抖的函数  2.延时的时间
  let timer = null; //定义一个变量记录定时器

  return function (...args) {
    if (timer) clearTimeout(timer); //清除上一次定时器

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

//时间格式化
export function formatDate(date, fmt) {
  //获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

