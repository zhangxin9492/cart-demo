<template>
  <div>
    <ul>
      <li
        v-for="item in goodsList"
        :key="item.id"
      >
        <div>
          <img
            :src="item.img_url"
            alt=""
            class="img"
          >
          <h4>{{item.title}}</h4>
          <p>售价：{{item.sell_price}}</p>
          <p>市场价:
            <del>{{item.market_price}}</del>
          </p>
          <numberbox v-model="item.count"></numberbox>
          <button @click="addToCart(item)">加入购物车</button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
// import axios from "axios";

import numberbox from "../components/numBox.vue";
export default {
  components: {
    numberbox
  },
  data() {
    return {
      goodsList: []
    };
  },
  methods: {
    // ipt(e){
    //     this.value = e.target.value;
    // }，
    addToCart(item) {
      // 当点击加入购物车按钮的时候，使用vuex提供的addToCart mutation将当前的商品id和数量组合成对象加入购物车即可
      this.$store.commit("addToCart", {
        id: item.id,
        count: item.count
      });
    },
    async getGoodsList() {
      let res = await this.axios({
        url: "http://www.liulongbin.top:3005/api/getgoods"
      });
      // 从服务器获取到到数据之后，
      // 给所有的商品数据，添加一个属性  count
      // count是用来在加入购物车的时候，获取当前商品的数量的！
      // console.log(res);
      res.data.message.forEach(v => {
        v.count = 0;
      });

      this.goodsList = res.data.message;
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>

<style>
ul {
  list-style: none;
  padding-left: 0;
}
.img {
  width: 50px;
}
</style>

