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

> 1.使用props,动态开启下拉加载更多
>
> ```vue
>       pullUpLoad:this.pullUpLoad, //下拉加载更多
>       
>     `pullUpLoad:{
>       typeof: Boolean,
>       default(){
>         return false;
>       }
>     }
> ```
>
> 2.在监听到下拉加载更多时发送事件,告诉外部已经下拉加载更多
>
> ```javascript
>     //3.监听下拉加载更多事件
>     this.scroll.on('pullingUp',() => {
>      this.$emit('pullingUp') //发射事件告诉别人可以加载更多
>     })
> 
> ```
>
> 3.外部接收到事件,开始发送网络请求,请求下一页数据
>
> ```javascript
>     //4.下拉加载更多
>     loadMore(){
>       this.getHomeGoods(this.currentType);
>     },
> ```
>
> 4.注意请求完的时候记得完成这一次下拉动作,
>
> ```javascript
>   //2.获取商品数据的方法
>     getHomeGoods(type) {
>         this.$refs.scroll.finishPullUp();
>       });
>     },
> ```
>
> 





## 5.13 解决better-score的滚动bug

* Better-Scroll在决定有多少区域可以滚动时, 是根据scrollerHeight属性决定
  * scrollerHeight属性是根据放Better-Scroll的content中的子组件的高度
  * 但是我们的首页中, 刚开始在计算scrollerHeight属性时, 是没有将图片计算在内的
  * 所以, 计算出来的告诉是错误的(1300+)
  * 后来图片加载进来之后有了新的高度, 但是scrollerHeight属性并没有进行更新.
  * 所以滚动出现了问题
* 如何解决这个问题了?
  * 监听每一张图片是否加载完成, 只要有一张图片加载完成了, 执行一次refresh()
  * 如何监听图片加载完成了?
    * 原生的js监听图片: img.onload = function() {}
    * Vue中监听: @load='方法'
  * 调用scroll的refresh()
* 如何将GoodsListItem.vue中的事件传入到Home.vue中
  * 因为涉及到非父子组件的通信, 所以这里我们选择了**事件总线**
    * bus ->总线
    * Vue.prototype.$bus = new Vue()
    * this.bus.emit('事件名称', 参数)
    * this.bus.on('事件名称', 回调函数(参数))


* 问题一: refresh找不到的问题
  * 第一: 在Scroll.vue中, 调用this.scroll的方法之前, 判断this.scroll对象是否有值
  * 第二: 在mounted生命周期函数中使用 this.$refs.scroll而不是created中



```javascript
//注意 ref 不要在created()调用
```



##  5.14 对于refresh非常频繁的问题, 进行防抖操作

* 防抖debounce/节流throttle(课下研究一下)
* 防抖函数起作用的过程:
  * 如果我们直接执行refresh, 那么refresh函数会被执行30次.
  * 可以将refresh函数传入到debounce函数中, 生成一个新的函数.
  * 之后在调用非常频繁的时候, 就使用新生成的函数.
  * 而新生成的函数, 并不会非常频繁的调用, 如果下一次执行来的非常快, 那么会将上一次取消掉

```javascript
    //封装的防抖函数
    debounce(func,delay){ //1.传入要防抖的函数  2.延时的时间
      let timer = null;  //定义一个变量记录定时器

      return function (...args){
        if(timer) clearTimeout(timer);  //清除上一次定时器

        timer = setTimeout(() => {
          func.apply(this,args);
        }, delay);
      }
```





## 5.15 tabControl的吸顶效果

> 1.必须知道滚动到多少时,开始有吸顶效果
>
>  1.1通过ref获取tabControl元素,拿到offsetTop
>
>  1.2由于图片加载的原因,直接在mounted(),拿到的offsetTop是不正确的,所以要在轮播图监听图片是否加载完成
>
> ```javascript
>     //监听图片是否加载完成(轮播图组件里)
>   methods: {
>     //监听图片是否加载完成
>     imageLoad() {
>       if (!this.isLoad) { //如果还没有加载
>         //加载完成发送事件
>         this.$emit("swiperImageLoad");
>         this.isLoad = !this.isLoad;
>       }
>     },
>   },  
> 
>     methods: {    //(home组件)
>      //5.轮播图片加载完成
>     swiperImageLoad(){
>     //2.获取tabControl的tabOffsetTop
>     //所有组件都有一个属性$el,用于获取组件中的元素
>     this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
>     },
>   }, 
> 
> 	
> ```
>
> 2.拿到位置后判断,是否到达该位置,到达该位置后就用狸猫换太子
>
> ```javascript
>     //3.滚动位置的监听
>     contentScroll(position) {
>       //2.判断tabControl是否固定(吸顶)
>       this.isTabFixed = -position.y > this.tabOffsetTop;
>     },
> ```
>
> 3.狸猫换太子
>
> ​	3.1现在上面复制一个一样的,刚好在顶部导航条下面,默认v-show隐藏,当监听到了吸顶的位置
>
> ​		时在显示出来,盖住原来的
>
> ```vue
>     <tab-control
>       :titles="['流行', '新款', '精选']"
>       @tabClick="tabClick"
>       ref="tabControl1"
>       class="tab-contral"
>       v-show="isTabFixed"
>     ></tab-control>
> ```
>
> 3.2狸猫换太子的bug
>
>   两个一样的标签栏状态会不统一,要把两个的状态改为一致
>
>   1.分别拿到两个状态栏的currentIndex这个标记当前点击的变量
>
>  2.将这两个变量改为一致的
>
> ```javascript
>     tabClick(index) {
>       switch (index) {
>         case 0:
>           this.currentType = "pop";
>           break;
> 
>         case 1:
>           this.currentType = "new";
>           break;
> 
>         case 2:
>           this.currentType = "sell";
>           break;
> 
>         default:
>           break;
>       }
>       //让两个的点击状态保持一致
>       this.$refs.tabControl1.currentIndex=index;
>       this.$refs.tabControl2.currentIndex=index;
>     },
> ```
>
> 



## 5.15让Home保持原来的状态

> 1. 让Home不要随意销毁(keep-alive)
>
> ```vue
>   <keep-alive>
>     <router-view></router-view>
>   </keep-alive>
> ```
>
> 2.让home中的内容保持原来的位置
>
> ​	2.1离开时,保存一个位置信息 ,saveY
>
> ​	2.2进来时,将位置设置为原来保存的位置saveY信息即可
>
> ```javascript
>   activated() {
>     //路由活跃的时候(进来)
>     //进来时设置保存的高度
>     this.$refs.scroll.scrollTo(0, this.saveY, 0);
>     this.$refs.scroll.refresh() //刷新一下
>   },
>   deactivated() {
>     //不活跃的时候(离开)
>     //离开时保存高度
>     this.saveY = this.$refs.scroll.getScrollY();
>   },
> ```
>
> 



# 6.详情页开发

> 1.在视图文件夹创建detail,添加detail组件
>
> 2.配置路由datail ,配置动态路由
>
> 3.监听GoodLstItem (商品列表的每张图片),点击的时候发送id跳转到对应的详情页
>
> ```javascript
>  itemClick(){
>       //跳转到对应的详情页面
>       this.$router.push('/detail/'+this.goodsItem.iid);
>     }
> ```
>
> 4.详情页接收到路由穿过来的id
>
> ```javascript
>  created() {
>     this.iid = this.$route.params.iid; ////保存动态路由传过来的id
>   },
> ```
>
> 

## 6.1封装导航栏

> 1.在detail 文件夹下添加新文件夹childComps(存放这个组件的子组件)
>
> 2.在childComps 下创建组件 childComps (封装详情页的导航栏)
>
> 3.引入公共组件导航栏组件NavBar
>
> 4.详情页的导航栏,left,center ,需要往这两个插槽插入内容
>
> 5.left插槽 插入图片
>
> ```vue
>       <div slot="left" class="back" @click="backClick">
>         <img src="../../../assets/img/common/back.svg" alt="" />
>       </div>
> ```
>
> 6.center插槽, 遍历展示props传入过来的数据,
>
> ```vue
>       <div slot="center" class="title">
>         <div
>           v-for="(item, index) in tltles"
>           class="titleitem"
>           :key="index"
>           :class="{ active: currentIndex === index }"
>           @click="titleClick(index)"
>         >
>           {{ item }}
>         </div>
> ```
>
> 7.通过currentIndex设置点击哪个,哪个变颜色



## 6.2封装详情页的轮播图

> 1.请求数据
>
> 1.1 在network,新建文件detail.js 封装好关于详情页的网络请求
>
> ```javascript
> //封装首页用到的网络请求
> import {request} from './request'
> 
> //获取对应id的详情页
> export function getDetail(iid){
>   return request({
>     url:'/detail',
>     params:{
>       iid,
>     }
>   })
> }
> ```
>
> 1.2 在crated()里通过id请求数据,并将数据保存在data
>
> ```javascript
>   created() {
>     this.iid = this.$route.params.iid; ////保存动态路由传过来的id
>     //请求对应id的数据
>     getDetail(this.iid).then((res) => {
>       console.log(res);
>       this.topImages = res.result.itemInfo.topImages;
>     });
>   },
> ```
>
> 2.在childComps下,创建DetailSwiper(封装的轮播图组件)
>
> 3.将获取到的轮播图数据传递给DetailSwiper
>
> 4.DetailSwiper,组件引入公共轮播图组件
>
> 5.将穿过来的数据展示
>
> ```javascript
>   <swiper class="detail-swiper">
>     <swiper-item  v-for="(item,index) in topImages" :key='index'>
>         <img :src="item" alt="">
>     </swiper-item>
>   </swiper>
> ```
>
> 6.给轮播图设置css样式
>
> ```css
>    .detail-swiper{
>      height: 300px; 
>      overflow: hidden;
>    }
> ```



## 6.3 商品的基本信息展示

> 1.整合数据,用于数据比较杂乱无章,需要先整合为一个对象,在传递过去
>
> 1.1在network下detail.js下创建一个类,用于整合数据
>
> ```javascript
> //创建一个类,整理商品的基本信息
> export class Goods {
> 	constructor(itemInfo, columns, services) {
> 		this.title = itemInfo.title
> 		this.desc = itemInfo.desc
> 		this.newPrice = itemInfo.price
> 		this.oldPrice = itemInfo.oldPrice
> 		this.discount = itemInfo.discountDesc
> 		this.columns = columns
> 		this.services = services
> 		this.realPrice = itemInfo.lowNowPrice
> 	}
> }
> ```
>
> 2. 在childComps下创建DetailBaseInfo组件(展示商品信息)
>
> 3. 获取数据,将数据传递给DetailBaseInfo组件()
>
>    ```javascript
>      created() {
>        this.iid = this.$route.params.iid; ////保存动态路由传过来的id
>        //请求对应id的数据
>        getDetail(this.iid).then((res) => {
>          console.log(res);
>          const data = res.result
>        //保存轮播图的数据
>          this.topImages = res.result.itemInfo.topImages;  
>    
>        //保存商品信息数据
>          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
>    
>        });
>      },
>    ```
>
>    4.DetailBaseInfo拿到数据展示数据
>
>    ```vue
>    <template>
>      <div v-if="Object.keys(goods).length !== 0" class="base-info">
>        <div class="info-title">{{goods.title}}</div>
>        <div class="info-price">
>          <span class="n-price">{{goods.newPrice}}</span>
>          <span class="o-price">{{goods.oldPrice}}</span>
>          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
>        </div>
>        <div class="info-other">
>          <span>{{goods.columns[0]}}</span>
>          <span>{{goods.columns[1]}}</span>
>          <span>{{goods.services[goods.services.length-1].name}}</span>
>        </div>
>        <div class="info-service">
>          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
>            <img :src="goods.services[index-1].icon">
>            <span>{{goods.services[index-1].name}}</span>
>          </span>
>        </div>
>      </div>
>    </template>
>    ```
>
>    5.补充<div v-if="Object.keys(goods).length !== 0" class="base-info">
>
>    Object.keys(goods).length可以判断改对象是否为空,如果为空,就不展示数据

## 6.4店铺信息展示

> 1.1在network下detail.js下创建一个类,用于整合数据
>
> ```javascript
> //封装店铺信息
> export class Shop {
> 	constructor(shopInfo) {
> 		this.logo = shopInfo.shopLogo;
> 		this.name = shopInfo.name;
> 		this.fans = shopInfo.cFans;
> 		this.sells = shopInfo.cSells;
> 		this.score = shopInfo.score;
> 		this.goodsCount = shopInfo.cGoods
> 	}
> }
> ```
>
> 2.在childComps下创建DetailShopInfo组件(展示店铺信息)
>
> 3.获取数据,将数据传递给DetailShopInfo
>
> ```javascript
>   created() {
>     this.iid = this.$route.params.iid; ////保存动态路由传过来的id
>     //请求对应id的数据
>     getDetail(this.iid).then((res) => {
>       console.log(res);
>       const data = res.result
>       //保存轮播图的数据
>       this.topImages = res.result.itemInfo.topImages;  
> 
>       //保存商品信息数据
>       this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
> 
>       //保存商店信息
>       this.shop = new Shop(data.shopInfo);
>     });
>   },
> ```
>
> 4.DetailShopInfo展示数据



## 6.5加入滚动效果Scroll

> 1.将底部的导航条去掉
>
> 1.1 通过修改层级来将底部导航条覆盖掉
>
> ```css
>   #detail{
>     position: relative;
>     z-index: 10;
>     background-color: #fff;
>   }
> ```
>
> 2.引入Scroll组件
>
> 3.Scroll的使用
>
> 3.1 将要滚动的区域放入Scroll组件里面
>
> ```vue
>     <!--滚动区域  -->
>     <scroll  class="content">
>       <!-- 轮播与图-->
>       <detail-swiper :topImages="topImages" />
>       <!-- 商品信息 -->
>       <detail-base-info :goods="goods" />
>       <!-- 店铺信息 -->
>       <detail-shop-info :shop="shop" />
>     </scroll>
> ```
>
> 3.2 Scroll最外层要有一个固定的高度  所以设置类名,添加样式
>
> ```css
> .content{
>   height: calc(100% - 44px);
> }
> ```
>
> 3.3补充
>
> .content 的100%高度要相对于父元素的,所以要给父元素设置视图100vh
>
> ```css
> #detail {
>   position: relative;
>   z-index: 9;
>   background-color: #fff;
>   height: 100vh;
> }
> ```
>
> 滚动的时候顶部的导航栏会被覆盖,所以要提高一下层级,
>
> ```css
> .detail-bar{
>   position: relative;
>   z-index: 9;
>   background-color: #fff;
> }
> ```
>
> 



## 6.6 商品详情信息组件

> 1.获取商品详情信息数据,保存数据(由于数据比较简单,所以不用类)
>
> ```javascript
>       //保存商品详情图片的信息
>       this.detailInfo = data.detailInfo;
> ```
>
> 2.在childComps下创建DetailGoodsInfo组件(展示商品详情信息)
>
> 3.将数据传递给DetailGoodsInfo子组件
>
> 4.DetailGoodsInfo展示接收到的数据
>
> 5.解决Scrollbug
>
> 1.监听图片是否加载完成  @*load*="imgLoad"
>
> ​	1.到最后一张图片加载完毕,在发射事件(每张图片加载完就发射,发射太多次了)
>
> ```javascript
> 	    imgLoad() {
>         this.counter +=1; //每一次进来加一
>         //当计数器等于图片的长度的时候,也就是加载完最后一张图片执行
>         if(this.counter === this.imagesLength){
>           this.$emit('imageLoad');
>         }
> 	    }
> ```
>
>  通过watch监听图片长度的变化获取图片长度
>
> ```javascript
>     watch: {
>       //获取图片长度
> 	    detailInfo() {
> 	    	this.imagesLength = this.detailInfo.detailImage[0].list.length
> 	    }
>     }
> ```
>
> 2.父组件收到图片加载完毕事件刷新,重新计算高度
>
> ```javascript
>     imageLoad(){
>       //图片加载完成
>       this.$refs.scroll.refresh();  //调用刷新,重新计算高度
>     }
> ```
>
> 

## 6.7商品参数组件

> 1.在network 下 detail.js 创建一个类整理数据
>
> 2.在detail组件请求数据,保存
>
> 3.在childComps下创建DetailParamInfo组件(展示商品参数)
>
> 4.将保存的数据传给DetailParamInfo组件
>
> 5.DetailParamInfo展示拿到的数据
>
> 



## 6.8 评论组件

> 1.请求数据
>
> 2.获取数据保存
>
> 3.将数据传递给子组件
>
> 4.子组件展示数据

### 扩充:时间戳转化(重要)

> 1.引入工具类
>
> 2.通过过滤器的方式,将转换时间戳格式
>
> ```javascript
>     filters:{
>       showDate(value){
>         //1.将时间戳转化成Date()对象
>         const date = new Date(value *1000); //*1000是要将秒转化为毫秒
>         //2.将data进行格式化
>         return formatDate(date,'yyyy/MM/dd hh:mm:ss')
>       }
>     }
> ```



## 6.9商品推荐组件

> 1.引入商品列表推荐组件
>
> 2.传入数据
>
> 3.里面有张图片的的路径不对,可通过计算属性先做一个判断



## 6.10 混入(重复代码的复用)

> 1.在公共js文件夹下,新建文件mixin.js
>
> 2.在里面存放公共的代码(生命周期,data...都可以用)
>
> ```javascript
> //混入
> //引入一些工具方法
> import { debounce } from "common/utils";
> 
> export const itemListenerMixin = {
>   mounted() {
>     //1.加载防抖
>     const refresh = debounce(this.$refs.scroll.refresh, 500);
>     //监听item图片加载完成(事件总线)
>     //对监听的事件进行保存
>     this.itemImgListener =() => {
>       refresh();}
>     this.$bus.$on("itemImageLoad", this.itemImgListener
>     );
>     console.log('混入');
>   },
> }
> ```
>
> 3.引入mixin.js文件里对应的模块
>
> 4,在实例对象里面,有一个mixins属性 存放数组
>
> ```javascript
> mixins:[itemListenerMixin,],
> ```
>
> 5.混入的代码,和原本生命周期里面的代码都会执行,(相当于合并)



## 6.11标题和内容的联动效果

### 1.点击标题,滚动到对应主题

> 1.在中监听标题的点击,获取对应index
>
> 2.滚动到对应的主题
>
> ```javascript
> daat(){
> 	return {
> 		themTopYs: [], //每一个标题的高度
> 		getThemeTopY: null, //防抖(保存获取各个主题的高度)
> 	}
> }
> 
> create(){
> 	//3.给getThemeTopY赋值
>     this.getThemeTopY = debounce(() => {
>       //第一个,商品的高度
>       this.themTopYs.push(0);
>       //第二个,参数的高度
>       this.themTopYs.push(this.$refs.params.$el.offsetTop);
>       //第三个,评论的高度
>       this.themTopYs.push(this.$refs.comment.$el.offsetTop);
>       //第四个,推荐的高度
>       this.themTopYs.push(this.$refs.recommend.$el.offsetTop);
>     });
> }
> 
>   methods: {
>     //1.图片加载完毕
>     imageLoad() {
>       //每一个标题对应的高度
>       this.getThemeTopY();
>     },
>     //2.点击标题,跳转到对应位置
>     titleClick(index) {
>       this.$refs.scroll.scrollTo(0, -this.themTopYs[index], 100);
>     },
>   }
> ```
>
> ​	问题:在哪里才能获取到正确的offsetTop
>
> ​	1.created 肯定不行,压根不能获取ref
>
> ​	2.mounted也不行,数据还没获取到
>
> ​	3.获取到数据的回调中也不行,DOM还没有绚烂完毕
>
> ​	4.$nextTick,也不行,因为图片的高度还没有被计算在内
>
> ​    正确:
>
> ​		在图片加载完毕后获取高度才是正确的,
>
> ​		获取多次可以用防抖函数



### 2.滚动到对应的位置时,标题发生对应的改变

> 1.监听scroll组件的滚动时发射的事件,并获取滚动的位置
>
> 2.将位置和每个主题的位置进行对比,原来每个主题的位置保存到themTopYs
>
> ```javascript
> data(){
> return {
> 	currentIndex:null,  //保存对应高度的i值
> }
> }
> 
>     //监听滚动的位置
>     contentScroll(position){
>       //获取y值
>       const positionY = -position.y
> 
>       //2.获取到的值和主题中值进行对比,
>       let length = this.themTopYs.length; 
>       for(let i=0;i<this.themTopYs.length;i++){
>         if((this.currentIndex !== i) &&((i<length-1 && positionY > this.themTopYs[i] && positionY <= this.themTopYs[i+1]) || (
>           i=== length-1 && positionY >= this.themTopYs[i]
>         ) )){
>           //保存i值
>           this.currentIndex = i;
>           this.$refs.nav.currentIndex= this.currentIndex;
>         }
>       }
>     }
> ```
>
> 

## 6.12 底部工具栏

> 创建组件,引入样式



## 6.13 返回顶部组件混入

> 1. 复用返回顶部按钮组件
>
> 2. 将重复的代码抽离出来用混入
>
> 3. 组件注册也可抽入混入
>
>    ```javascript
>    
>    //2.返回顶部按钮的混入
>    export const backTopMixin = {
>      components:{
>        BackTop, //返回顶部
>      },
>      data() {
>        return {
>          isShowBackTop: false, //决定时候显示返回顶部按钮
>        }
>      },
>      methods: {
>        //2.返回顶部按钮的监听
>        backClick() {
>          //通过ref拿到scroll组件对象,这个组件对象里的data有scroll
>          this.$refs.scroll.scrollTo(0, 0, 500);
>        },
>        listenShowBackTop(position){
>          //1.判断backTop是否显示
>          //注意position的y是负数
>          this.isShowBackTop = -position.y > 1000;
>        }
>      },
>    }
>    
>    
>    {
>         mixins: [backTopMixin],
>    }
>    ```
>
>    



## 6.14 将商品添加入购物车

### 1.获取商品的数据

> 1.点击加入购物车时,发射事件,通知父组件添加购物车
>
> 2.父组件监听发射事件
>
> 3.创建一个对象,用来保存商品展示在购物车中的信息
>
> ```javascript
>  methods:{
>     addToCart(){
>       //1.获取购物车需要展示的信息
>       const product ={};
>       product.image = this.topImages[0]; //商品图片
>       product.titil = this.goods.title;  //商品标题
>       product.desc = this.goods.desc //详情信息
>       product.price = this.goods.realPrice //商品价格
>       product.iid = this.iid //商品的id
> 
>     },
>  }
> ```
>
> 



### 2.将商品数据保存在vuex中

#### 2.1 vuex复习

> 1.在store文件夹下创建index.js文件
>
> ```javascript
> //1.引入
> import Vue from 'vue'
> import Vuex from 'vuex';
> 
> //2.安装插件
> Vue.use(Vuex);
> 
> //3.创建Store对象
> const store = new Vuex({
>   state:{},
>   mutations:{}
> })
> 
> //4.挂载Vue实例三
> export default store;
> 
> ```
>
> 2.将 store挂载到vue实例上
>
> ```javascript
> import Vue from 'vue'
> import App from './App.vue'
> import router from './router/index'
> import store from './store/index.js';
> 
> Vue.prototype.$bus = new Vue();   //在原型上添加事件总线
> 
> new Vue({
>   render : h=>h(App),
>   router,
>   store,
> }).$mount('#app')
> ```
>
> 



#### 2.2 保存数据

> 1.对文件进行抽离
>
> ```javascript
> //1.引入
> import Vue from 'vue'
> import Vuex from 'vuex';
> 
> import mutations from './mutations';
> import actions from './actions';
> 
> //2.安装插件
> Vue.use(Vuex);
> 
> const store={
>   cartList:[],  //购物车数据
>   
> }
> //3.创建Store对象
> const store = new Vuex.Store({
>   state,
>   mutations,
>   actions,
> })
> 
> //4.挂载Vue实例三
> export default store;
> 
> ```
>
> 2.在actions中进行判断,购物车添加商品时是否是一样的商品
>
> ```javascript
> import {
>   ADD_COUNTER,
>   ADD_TO_CART,
> } from './mutations-types';
> 
> export default {
>   //除了异步操作外,一些判断逻辑的操作也可以放在actions
>   addCart(context,payload){ //payload新添加的商品
>     //context上下文
>     //另一种方法,查早数组是否有改商品
>     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
> 
>     //如果存在,数量加一,否则添加新商品到购物车
>     if(oldProduct){
>       context.commit(ADD_COUNTER,oldProduct) //如果一样的话,上面已经将内存地址给了oldProduct,只要将数量加一
>     }else{
>       context.commit(ADD_TO_CART,payload);
>     }
>   },
> 
> }
> ```
>
> 



## 7 购物车页面开发

### 7.1导航栏开发

#### 1.引入公共nav-bar导航栏组件

```vue
<template>
  <div>
    <!-- 顶部导航条组件 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
// 导航条组件
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'Cart',
  components:{
    NavBar,

  },

</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
```



#### 2.用vuex的getters映射计算属性

> 1.在store文件夹下,创建getters.js文件
>
> ```js
> export default{
>   //返回购物车列表的长度
>   cartLength(state){
>     return state.cartList.length;
>   },
>   //返回购物车数据
>   cartList(state){
>     return state.cartList;
>   }
> }
> ```
>
> 2.在store文件夹下的index.js,中引入getters
>
> ```js
> //1.引入
> 
> import getters from './getters';
> 
> //3.创建Store对象
> const store = new Vuex.Store({
>   state,
>   mutations,
>   actions,
>   getters,
> })
> 
> //4.挂载Vue实例三
> export default store;
> 
> ```
>
> 3.使用getters
>
> //在计算方法里面直接使用,用分对象,和数组两种语法
>
> ```javascript
> import {mapGetters} from 'vuex'
> 
> computed:{
>     //两种语法
>     //数组用原来的名字, 对象可以改名字
>     // ...mapGetters(['cartLength','cartList'])
>     ...mapGetters({
>       length:'cartLength', //不想用原来名字的话,可以用第二种写法,
>       lest:'cartList',
>     })
> 
>   }
> }
> ```
>
> 



### 7.2商品列表

#### 1.创建cartlist组件

```vue
<template>
  <div class="cart-list">
      
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from 'components/scroll/Scroll.vue';
export default {
  components: { Scroll },
  name: "cartList",
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
.cart-list{
  height: 100%;
}
.content{
  height: calc(100% - 44px - 49px);
}
</style>
```

#### 2.引入scroll组件

> 1.引入scroll组件
>
> 2.将要滚动的内容,放置在scroll中
>
> 3.设置scroll的高度
>
> 4.设置scroll父元素的高度
>
> ```vue
> <template>
>   <div class="cart-list">
>   <!--滚动区域  -->
>    <scroll class="content">
>      <li>1</li>
>      <li>1</li>
>      <li>1</li>
>    </scroll>
>   </div>
> </template>
> 
> <script>
> import { mapGetters } from "vuex";
> import Scroll from 'components/scroll/Scroll.vue';
> export default {
>   components: { Scroll },
>   name: "cartList",
>   computed: {
>     ...mapGetters(["cartList"]),
>   },
> };
> </script>
> 
> <style scoped>
> .cart-list{
>    height: calc(100% - 44px - 49px);
> }
> .content{
>   height: 100vh;
> }
> </style>
> ```
>
> 

#### 3.创建组件CartListItem

> 1.创建CartListItem组件
>
> 2.用for循环CartListItem组件
>
> 遍历的时候可以直接用getters拿到数据
>
> 3.将每一个商品的数据用props传入
>
> ```vue
> <template>
>   <div class="cart-list">
>   <!--滚动区域  -->
>    <scroll class="content" ref="scroll">
>      <cart-list-item v-for="(item,index) in cartList "  :key="index" 				    	:product='item'/>
>    </scroll>
>   </div>
> </template>
> 
> <script>
> import { mapGetters } from "vuex";
> import Scroll from 'components/scroll/Scroll.vue';
> import CartListItem from './CartListItem.vue';
> export default {
>   components: { 
>     Scroll,
>     CartListItem,
>   },
>   name: "CartList",
>   computed: {
>     ...mapGetters(["cartList"]),
>   },
>   activated(){
>     this.$refs.scroll.refresh();
>   }
> };
> </script>
> 
> <style scoped>
> .cart-list{
>   height: calc(100% - 44px - 49px);
> }
> .content{
>   height: 100%;
>   overflow: hidden;
> }
> </style>
> ```
>
> 4.**小bug:scroll刚开始是有一个高度的,但将商品加入购物车时,scroll不知道有新的东西添加进来,**
>
> 解决: 在路由跳转到 购物车页面的时候,重新计算一下高度
>
> ```js
>   activated(){
>     this.$refs.scroll.refresh();
>   }
> ```
>
> 

#### 4.商品选不选中,按钮

> **1.创建CheckButton组件**
>
> **2.props里设置isChecked,来表示是否选中**
>
> **3..设置设置动态类名,来显示按钮是否被选中**
>
> ```vue
> <template>
>   <div class="check-button" :class="{active:isChecked}">
>     <img src="~assets/img/cart/tick.svg"/>
>   </div>
> </template>
> 
> <script>
> 
> export default {
>    name: 'CheckButton',
>    props:{
>      isChecked:{
>        type:Boolean,
>        default:false,
>      }
>    }
> }
> </script>
> 
> <style scoped>
>   .check-button{
>     border-radius: 50%;
>     border: 2px solid #aaa;
>   }
>   .active{
>     background-color: red;
>     border-color:red;
>   }
> </style>
> ```
>
> **4.在购物车添加一个新商品的时候,设置一个属性,来标记是否选中**
>
> //一般在数据列表,有商品选不选中时的需求时,可以添加一属性来标记
>
> 在store文件夹下的mutations.js
>
> ```js
> import {
>   ADD_COUNTER,
>   ADD_TO_CART,
> } from './mutations-types';
> 
> export default {
>   //mutations唯一的目的就是修改state中状态
>   //mutations中每一方法尽可能完成的事件比较单一
>   [ADD_COUNTER](state,payload){
>     payload.count+=1;
>   },
>   [ADD_TO_CART](state,payload){
>     payload.checked = true;  //商品默认选中
>     payload.count =1
>     state.cartList.push(payload)
>   },
> }
> ```
>
> 5.将isChecked传入
>
> ```vue
>  <check-button isChecked='itemInfo.checked'/>
> ```
>
> 

		### 7.3.底部工具栏

> 1.导入check-button按钮组件,来表示选不选中
>
> ```vue
>     <div class="check-content">
>       <check-button class="check-botton" />
>       <span>全选</span>
>     </div>
> ```
>
> 2.计算购物车选中商品的总价格
>
> ```vue
>     <div class="price">
>       合计 {{ totalPrice }}
>     </div>
>     
> <script>
> 	 computed: {
>     //计算选中商品总价格
>     totalPrice() {
>       return (
>         "$" +
>         this.$store.state.cartList
>           .filter((item) => item.checked)
>           .reduce((preValue, item) => {
>             return preValue + item.price * item.count;
>           }, 0).toFixed(2)   //toFixed,保留小数
>       );
>     },
>   },
> 
> </script>
> ```
>
> 3.计算选中商品的个数
>
> ```vue
>     <div class="calculate">
>       去计算: {{checkLength}}
>     </div>
>     
> 	<script>
> computed: {
>     //计算选中商品的个数
>     checkLength(){
>       return this.$store.state.cartList.filter(item => item.checked).length
>     }
>   },
> 	</script>
>     
> ```

#### 		2.购物车全选按钮

##### 				1.显示状态

> //判断是否有一个不选中,全选就是不选中状态
>
> ```vue
>       <check-button 
>       class="check-botton"  
>       :isChecked='isSelectAll'/>
> 
> <script>
>   computed: {
>     //是否全部选中
>     isSelectAll(){
>       //1.长度为0的时候是不选中的
>       //2.选中的个数是否等于列表原来的个数
>       return  this.$store.state.cartList.length !==0 && 		(this.$store.state.cartList.filter(item => item.checked).length === 
>       this.$store.state.cartList.length)
>     }
> 
>   },
> 
> </script>
> ```
>
> 

##### 		2.点击全选按钮

> 1.如果原来都是选中的,点击一次,全部不选中,
>
> 2,.如果原来都是不选中的(部分没选中),点击一次,全部选中
>
> ```javascript
>   methods:{
>     //监听全选按钮
>     checkClick(){
>       if(this.isSelectAll){ //如果全部选中,点击一次全部不选中按
>         this.$store.state.cartList.forEach(item => {
>           return item.checked = false;
>         })
>       }else{ //否则就是有不选中的
>         this.$store.state.cartList.forEach(item => {
>           return item.checked = true;
>         })
> 
>       }
>     }
>   },
> ```
>
> 

### 7.4添加购物车的弹窗

#### 1.vux的补充

> 1.actions可以返回一个promise
>
> ```js
> export default {
>   //除了异步操作外,一些判断逻辑的操作也可以放在actions
>   addCart(context,payload){ //payload新添加的商品
>     //context上下文
>     return new Promise((resolve , reject)=>{
>     //另一种方法,查早数组是否有改商品
>     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
> 
>     //如果存在,数量加一,否则添加新商品到购物车
>     if(oldProduct){
>       context.commit(ADD_COUNTER,oldProduct) //如果一样的话,上面已经将内存地址给了oldProduct,只要将数量加一
>       resolve('当前商品数量加一')
>     }else{
>       context.commit(ADD_TO_CART,payload);
>       resolve('添加新的商品')
>     }
>     })
>   },
> 
> }
> ```
>
> 2.mapActions 的映射关系
>
> //可以将actions的方法映射到methods
>
> ```js
> import {mapActions} from 'vuex' //映射methods
> 
> methods:{
> ...mapActions(['addCart']),
> }
> ```
>
> 

#### 2.Toast组件(消息弹出组件)

> 1.创建组件
>
> ```vue
> <template>
>   <div class="toast" v-show='show'>
>     <div> {{message}} </div>
>   </div>
> </template>
> 
> <script>
> 
> export default {
>    name: 'Toast',
>    props:{
>      message:{
>        type:String,
>        default:''
>      },
>      show:{
>        type:Boolean,
>        default:false,
>      }
>    },
> }
> ```
>
> 2.加入购物车成功时提示
>
> ```js
> methods:{
>    //4.添加购物车
>     addCart(){
>       //1.获取购物车需要展示的信息 
>       const product ={};
>       product.image = this.topImages[0]; //商品图片
>       product.titil = this.goods.title;  //商品标题
>       product.desc = this.goods.desc //详情信息
>       product.price = this.goods.realPrice //商品价格
>       product.iid = this.iid //商品的id
>       
> 
>       //2.将商品添加到购物车里(1.Promise 2.mapAction)
>       // this.$store.commit('addCart',product);
>       //将actions的方法,映射到methods
>       this.add(product).then(res =>{
>         //购物车添加成功
>         this.show =true 
>         this.message=res;
>         setTimeout(() => {
>             this.show =false
>         }, 1500);
>       })
>     },
> 
> }
> ```
>
> 

#### 4.Toast封装插件

> 1.在toast文件夹下创建index.js文件
>
> ```js
> import Toast from './Toast.vue';
> const obj ={
> }
> 
> //安装了插件会自动调用install函数
> obj.install = function(vue){
>   //将template放到body后面
>   //1.创建组件构造器(通过组件构造器可以创建出一个组件对象)
>   const toastContrustor = vue.extend(Toast)
> 
>   //2.通过new的方式,根据组件构造器,可以创建出来一个组件对象
>   const toast = new toastContrustor();
> 
>   //3.将组件对象,手动挂载到某一个元素上
>   toast.$mount(document.createElement('div'));
> 
>   //4.toast.$el对应的就是div
>   document.body.appendChild(toast.$el);
>   
>   //将Toast对象放在原型上
>   vue.prototype.$toast  =toast
> 
> }
> 
> export default obj;
> ```
>
> 2.在mian.js下安装插件
>
> ```js
> import Vue from 'vue'
> import App from './App.vue'
> import router from './router/index'
> import store from './store/index.js';
> import toast from 'components/common/toast';
> 
> Vue.prototype.$bus = new Vue();   //在原型上添加事件总线
> 
> //安装toast插件
> Vue.use(toast);
> 
> new Vue({
>   render : h=>h(App),
>   router,
>   store,
> }).$mount('#app')
> 
> ```
>
> 3.使用插件
>
> ```js
>     //4.添加购物车
>     addCart(){
>       //2.将商品添加到购物车里(1.Promise 2.mapAction)
>       // this.$store.commit('addCart',product);
>       //将actions的方法,映射到methods
>       this.add(product).then(res =>{
>         //购物车添加成功
>         this.$toast.show(res,1500);
>       })
>     },
> ```
>
> 

## 8.补充一些细节

### 1.fastClick 减少点击的延迟

> 1.安装  npm install fastclick -save
>
> 2.使用
>
> ```js
> import Vue from 'vue'
> import App from './App.vue'
> import router from './router/index'
> import store from './store/index.js';
> import toast from 'components/common/toast';
> import FastClick from 'fastclick';
> Vue.prototype.$bus = new Vue();   //在原型上添加事件总线
> 
> //安装toast插件
> Vue.use(toast);
> 
> //解决移动端300ms延迟
> FastClick.attach(document.body);
> 
> new Vue({
>   render : h=>h(App),
>   router,
>   store,
> }).$mount('#app')
> 
> ```
>
> 

### 2.图片懒加载

> 什么是懒加载?
>
> 图片用到时在加载

#### vue-lazyload

> 1.安装 npm i vue-lazyload -s
>
> 2.导入,Vue.use()
>
> 3修改img :src ->v-lazy
>
> 

### 3.px2vw-css 单位转换

> 1.安装 npm install postcss-px-to-viewport --save-dev
>
> 2.配置postcss.config.js
>
> ```js
> module.exports = {
>   plugins: {
>     autoprefixer: {},
>     "postcss-px-to-viewport": {
>       viewportWidth: 375, //视口的宽度，对应的时设计稿的宽度/2，一般为750
>       viewportHeight: 667, //视口的高度，对应的是设计稿的高度（也可以不配置）
>       unitPrecision: 5, //指定‘px’转换为视口单位值的小数位数（很多时候无法整除）
>       viewportUnit: 'vw', //指定需要转换成的视口单位，建议使用vw
>       selectorBlankList: ['ignore', 'tab-bar'], //指定不需要转换的类
>       minPixelValue: 1, //小于或等于‘1px’不转换为视口单位
>       mediaQuery: false,//允许在媒体查询中转换为‘px’
>       exclude:[/Tabbar/]  //不需要转化的组件文件名正则，必须是正则表达式
>     },
>   }
> }
> ```
>
> 

## 9.nginx在window下的部署

> https://nginx.org/

## 10.远程部署




