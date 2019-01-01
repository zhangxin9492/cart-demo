<template>
  <div class="mui-numbox-cms">
    <button
      type="button"
      class="mui-btn mui-btn-numbox-minus-cms"
      @click="minus"
    >-</button>
    <input
      type="number"
      class="mui-input-numbox-cms"
      v-model="num"
    >
    <button
      type="button"
      class="mui-btn mui-btn-numbox-plus-cms"
      @click="plus"
    >+</button>
  </div>
</template>

<script>
// 如果想要在当前组件上使用v-model这个指令
// 1. 当前组件需要接受value属性  这个属性就是 v-model="数据" 等号后的数据值
// 2. 当前组件内数据发生变化，想要通知外面的时候，需要手动触发input事件 将变化后的数据 传递给外面  this.$emit("input", 改变后的数据)

export default {
  props: ["value", "min", "max"],
  data() {
    return {
      num: 0
    };
  },
  methods: {
    minus() {
      if (this.num > (this.min || 0)) {
        this.num--;
      }
    },
    plus() {
      if (this.num < (this.max || Infinity)) {
        this.num++;
      }
    }
  },
  watch: {
    num(value, oldValue) {
      this.$emit("input", value);
    }
  },
  created() {
    this.num = this.value;
  }
};
</script>


<style>
.mui-numbox-cms {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 120px;
  height: 35px;
  padding: 0 40px;
  vertical-align: top;
  vertical-align: middle;
  border: 1px solid #bbb;
  border-radius: 3px;
  background-color: #efeff4;
}

.mui-numbox-cms .mui-btn-numbox-minus-cms,
.mui-numbox-cms .mui-numbox-cms-btn-minus {
  left: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.mui-btn-numbox-plus-cms {
  right: 0;
}

.mui-btn-numbox-minus-cms {
  left: 0;
}

.mui-numbox-cms [class*="btn-numbox"],
.mui-numbox-cms [class*="numbox-btn"] {
  font-size: 18px;
  font-weight: 400;
  line-height: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 40px;
  height: 100%;
  padding: 0;
  color: #555;
  border: none;
  border-radius: 0;
  background-color: #f9f9f9;
}

.mui-numbox-cms .mui-input-numbox-cms,
.mui-numbox-cms .mui-numbox-cms-input {
  display: inline-block;
  overflow: hidden;
  width: 100% !important;
  height: 100%;
  margin: 0;
  padding: 0 3px !important;
  text-align: center;
  text-overflow: ellipsis;
  word-break: normal;
  border: none !important;
  border-right: 1px solid #ccc !important;
  border-left: 1px solid #ccc !important;
  border-radius: 0 !important;
}
</style>

