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



## 5.10.better-scroll框架的使用

```html
<template>
  <div class="wrapper">
      <ul class="content">
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
        <li>列表21</li>
        <li>列表22</li>
        <li>列表23</li>
        <li>列表24</li>
        <li>列表25</li>
        <li>列表26</li>
        <li>列表27</li>
        <li>列表28</li>
        <li>列表29</li>
        <li>列表30</li>
        <li>列表31</li>
        <li>列表32</li>
        <li>列表33</li>
        <li>列表34</li>
        <li>列表35</li>
        <li>列表36</li>
        <li>列表37</li>
        <li>列表38</li>
        <li>列表39</li>
        <li>列表40</li>
        <li>列表41</li>
        <li>列表42</li>
        <li>列表43</li>
        <li>列表44</li>
        <li>列表45</li>
        <li>列表46</li>
        <li>列表47</li>
        <li>列表48</li>
        <li>列表49</li>
        <li>列表50</li>
        <li>列表51</li>
        <li>列表52</li>
        <li>列表53</li>
        <li>列表54</li>
        <li>列表55</li>
        <li>列表56</li>
        <li>列表57</li>
        <li>列表58</li>
        <li>列表59</li>
        <li>列表60</li>
        <li>列表61</li>
        <li>列表62</li>
        <li>列表63</li>
        <li>列表64</li>
        <li>列表65</li>
        <li>列表66</li>
        <li>列表67</li>
        <li>列表68</li>
        <li>列表69</li>
        <li>列表70</li>
        <li>列表71</li>
        <li>列表72</li>
        <li>列表73</li>
        <li>列表74</li>
        <li>列表75</li>
        <li>列表76</li>
        <li>列表77</li>
        <li>列表78</li>
        <li>列表79</li>
        <li>列表80</li>
        <li>列表81</li>
        <li>列表82</li>
        <li>列表83</li>
        <li>列表84</li>
        <li>列表85</li>
        <li>列表86</li>
        <li>列表87</li>
        <li>列表88</li>
        <li>列表89</li>
        <li>列表90</li>
        <li>列表91</li>
        <li>列表92</li>
        <li>列表93</li>
        <li>列表94</li>
        <li>列表95</li>
        <li>列表96</li>
        <li>列表97</li>
        <li>列表98</li>
        <li>列表99</li>
        <li>列表100</li>
      </ul>
  </div>
</template>

<script>
//引入优化滚动的框架
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    console.log(BScroll);
    //默认情况下 BScroll是不可以实时的监听滚动位置的
    //probe侦测
    //0,1 都是不实时侦测位置的
    //2 在手指滚动的时候侦测,手中离开的惯性的时候不侦测
    //3 只要是滚动都侦测

    //click 默认为flase,在wrapper范围内的所有事件都会被阻止
    this.scroll = new BScroll(document.querySelector(".wrapper"),{
      probeType:2,
      click:true,
      pullUpLoad:true, //下拉加载更多
    });
    //第一个参数  监听的事件
    //postition当前滚动到哪里(实时)
    this.scroll.on('scroll', (postition)=>{
      // console.log(postition);
    })

    this.scroll.on('pullingUp', ()=>{
      //监听看有没有下拉更多
      console.log('上拉加载更多');

      //发送网络请求,请求更多页面的数据

      //等数据完成之后,并且将新的数据展示出来后
      setTimeout(() => {
        this.scroll.finishPullUp()//表示这次加载更多已完成,可以下一次了
      }, 2000);
    })
  },
};
</script>

<style>
.wrapper {
  height: 200px;
  background-color: red;
  overflow: hidden;
}
</style>
```



## 5.11 better-score的封装

> 将要滚动的内容放入插槽里
>
> 外边要用 wrapper,content包着

```vue
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
   name: 'Scroll',
   data(){
     return {
       scroll:null,
     }
   },
   mounted(){
     this.scroll = new BScroll(this.$refs.wrapper,{

     })
   }
   
}
</script>

<style>
   
</style>
```

### 动态设置高度的两种方法

```css
/* .content{
  margin-top: 44px;
  height: calc(100% - 93px);
} */

.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
}
```



## 5.12返回顶部按钮的封装(backTop)

> 1.native 修饰符,让组件可以触发事件
>
> 2.通过ref可以获取组件对象(scroll)
>
> 3.scroll在里面封装好了scrollT0(x, y, time = 500),可以
>
> 少拿一层(封装思想)
>
> 4.函数的参数可以设置默认值,不传这个参数的话就会用默认值
>
> 





## 5.13返回顶部按钮的显示与隐藏

> 1.在scroll设置**probetupe:3**,开启滚动监听
>
> 2.用封装的思想通过props,动态设置**probetupe**是否监听
>
> 3.将位置信息发送出去
>
> ```js
>    //实时监听滚动位置
>     this.scroll.on('scroll',(position) => {
>       //将滚动的位置发送出去
>       this.$emit('scroll',position);
>     })
> ```
>
> 4.用 v-show,来隐藏
>
> 5.
>
> ```js
>     //3.获取滚动位置的方法
>     contentScroll(position){
>       //注意position的y是负数
>       this.isShowBackTop = (-position.y)  > 1000;
>     },
> ```



## 5.12 下拉加载更多

> 1.使用props,动态