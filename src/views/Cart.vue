<template>
  <div>
    购物车页面
    <ul>
      <li
        v-for="item in goodsList"
        :key="item.id"
      >
        <div>
          <img
            :src="item.thumb_path"
            alt=""
            class="img"
          >
          <h4>{{item.title}}</h4>
          <p>售价：{{item.sell_price}}</p>
          <p>市场价:
            <del>{{item.market_price}}</del>
          </p>
          <numberbox v-model="item.count"></numberbox>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
import numberbox from "@/components/numBox.vue";
export default {
  components: {
    numberbox
  },
  data() {
    return {
      goodsList: []
    };
  },
  created() {
    if (this.$store.getters.getIds) {
      this.getGoodList();
    }
  },
  methods: {
    async getGoodList() {
      let res = await this.axios({
        url:
          "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
          this.$store.getters.getIds
      });
      //   console.log(res);
      res.data.message.forEach(v => {
        // 当遍历商品列表添加count属性的时候
        // count属性的值，应该是从vuex中存储的购物车中获取对应的数量
        // 通过id去找到对应的count
        v.count = this.$store.getters.getCountById(v.id);
      });

      this.goodsList = res.data.message;
    }
  },
  watch: {
    goodsList: {
      handler() {
        // 当页面中任意商品的数量发生变化的时候
        // 将vuex中保存的购物车信息进行相应的更新
        this.$store.commit("updateCart", this.goodsList);
      },
      deep: true
    }
  }
};
</script>

