//工具方法

//封装的防抖函数
export function debounce(func, delay) { //1.传入要防抖的函数  2.延时的时间
  let timer = null; //定义一个变量记录定时器

  return function (...args) {
    if (timer) clearTimeout(timer); //清除上一次定时器

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}
