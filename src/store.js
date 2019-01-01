import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const STORAGE_KEY = "cart_info"

function writeToLocalStorage(cartList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartList));
}

function readFromLocalStorage() {
  let str = localStorage.getItem(STORAGE_KEY)
  return JSON.parse(str || "[]")
}


export default new Vuex.Store({
  state: {
    // [{id: 88, count: 1}]
    cartList: readFromLocalStorage()
  },
  mutations: {
    addToCart(state, cartInfo) {
      // cartInfo就是一个对象 {id: ,count:}
      // 1. 判断购物车中是否已经有当前商品信息
      let temp = state.cartList.find(v => {
        return v.id == cartInfo.id;
      })

      if (temp) {
        // 2. 如果有，就将count进行累加
        temp.count += cartInfo.count;
      } else {
        // 3. 如果没有，就新增一个对象 
        state.cartList.push(cartInfo);
      }

      writeToLocalStorage(state.cartList);
    },
    updateCart(state, goodsList) {
      state.cartList = goodsList.map(v => {
        return {
          id: v.id,
          count: v.count
        }
      })
      writeToLocalStorage(state.cartList);
    }
  },
  getters: {
    // totalCount就类似于一个计算属性
    // 这个计算属性可以用来获取购物车中所有的商品数量总和！
    // 根组件中的购物车数量总和就可以直接使用  $store.getters.totalCount进行获取！
    totalCount(state) {
      let sum = 0;
      state.cartList.forEach(v => {
        sum += v.count;
      })
      return sum;
    },
    getIds(state) {
      return state.cartList.map(v => v.id).join(",")
    },

    getCountById(state) {
      return function (id) {
        return state.cartList.find(v => v.id == id).count
      }
    }

    // getCountById: state => id => state.cartList.find(v => v.id == id).count
  }
})
