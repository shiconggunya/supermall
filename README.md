# 1.划分目录结构

> assets:静态资源    css+img
>
> common : 公共的js文件     常量,工具方法
>
> components:  common(哪个项目都可以用的组件), content(当前项目的公共组件)
>
> network:网络请求封装
>
> router:路由
>
> store:vuex
>
> views:用来展示的组件



# 2.引入两个css文件

> base.css
>
> normalize.css



# 3.配置路径别名 和引入.editorconfig

> 创建vue.config.js,在里面进行配置





# 4.项目模块划分:tabbar -> 路由映射关系



# 5.首页开发(Home)

## 5.1添加公共的顶部导航栏组件

> 完成了home顶部的导航栏



## 5.2封装网络请求(首页请求数据)

> 1.封装公共的网络请求
>
> 2.封装首页的网络请求
>
> 3.首页刚创建的时候请求数据
>
> 4.将请求到的数据保存到data



## 5.3轮播图

> 使用封装好的轮播图组件
>
> 将返回的数据进行暂时v



## 5.4推荐组件

> 就放了一张图片



## 5.5选项卡组件

> 1.动态绑定active
>
> 设置一个变量currentIndex,用于表示活跃的状态
>
> :class="{active: index === currentIndex}
>
> 创建单击响应函数
>
>  itemClick(index){
>
>    *this*.currentIndex = index;
>
>   }
>
> 2. position: *sticky*;属性css



## 5.6保存商品的数据结构

![image-20210406025413016](https://www.shiconggun.cn/wz/img/image-20210406025413016.png)

## 5.7请求网络数据(商品列表)

```javascript
  data(){
    return {
      banners:[], //保存轮播图的数据
      recommends:[], //保存推荐展示的数据
      //保存商品的数据
      goods:{
        pop:{page:0, list:[]}, //保存流行的数据
        new:{page:0, list:[]},//保存新款的数据
        sell:{page:0, list:[]},//保存精选的数据
      }
    }
  },
  //将网络请求的代码都封装到了methods里
  //创建实例的时候,调用方法请求
   methods:{
      getHomeMultidata(){
      getHomeMultidata().then(res =>{
      //拿到返回的数据
      this.banners = res.data.banner.list //将数据保存到data
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page +1  //取出原来的page+1
      getHomeGoods(type,page).then(res =>{
      this.goods[type].list.push(...res.data.list); //因为有页数,不能直接覆盖,要用push
      this.goods[type].page++;
    })
    }
```



## 5.8商品列表组件

> 父传子传入数据
>
> 展示商品内标



## 5.9点击选项卡展示不同商品列表

> 子发射事件,向父组件传递当前点击的是哪一个类型
>
> 父亲接收到索引值,展示对应的数据

