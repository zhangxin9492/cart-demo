<template>
  <div id="app">
    <router-view/>

    <div class="bottom">
      <router-link to="/">首页</router-link>
      <router-link to="/goods">商品</router-link>
      <router-link to="/cart">购物车 {{$store.getters.totalCount}}</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bottom{
  position: fixed;
  bottom: 0;
}
</style>
