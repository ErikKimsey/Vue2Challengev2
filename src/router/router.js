import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List.vue'
import Item from '../views/Item.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: List },
    { path: '/views/Item', component: Item }
  ]
})
