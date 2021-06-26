import Toast from './Toast.vue';
const obj ={

}

//安装了插件会自动调用install函数
obj.install = function(vue){
  //将template放到body后面
  //1.创建组件构造器(通过组件构造器可以创建出一个组件对象)
  const toastContrustor = vue.extend(Toast)

  //2.通过new的方式,根据组件构造器,可以创建出来一个组件对象
  const toast = new toastContrustor();

  //3.将组件对象,手动挂载到某一个元素上
  toast.$mount(document.createElement('div'));

  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el);
  
  //将Toast对象放在原型上
  vue.prototype.$toast  =toast

}

export default obj;