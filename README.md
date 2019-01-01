# cms

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

###总结

```
1:在组件中使用 v-model,需要在子组件中用 value 接收值,子传父使用\$emit 触发 input 事件

```

###购物车逻辑

```
1:添加到购物车,给添加购物车按钮注册事件,触发VueX中的addToCart事件,获取到当前添加商品的id和数量,添加到购物车商品列表中,判断是否存在,若存在加上数量,不存在添加新商品
2:获取购物车商品的总数,需要给VueX中getters添加一个方法,计算商品总数
3:购物车展示商品的功能,根据cartList中的id(调接口)查到到对应的商品信息,再根据每一个商品的id查找到对应的商品数,展示在购物车中
4:跟新购物车,购物车页面监听购物车列表数据,数据变化之后触发VueX中的的updatecartList事件
5:把数据存入到localStorage中,每次改变cartList都将数据存入到本地中,VueX中读取localStorage中

```
