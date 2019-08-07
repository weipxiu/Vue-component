// 准备个文件store.js - /store/store.js
import Vue from '../vue2.6.js'

export const store = Vue.observable({ count: 0 })  //定义一个变量
export const mutations = {  //定义一个方法，将来在组件中调用这个方法从而能改变上面的变量count值
  setCount (count) {
    store.count = count
  }
}