import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List.vue'
import Item from '../components/Item.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: "List", component: List},
    { path: '/Item/:id', name: "Item", component: Item }
  ]
})
