import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List'
import Item from './views/Item'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: List },
      { path: '/views/Item', component: Item }
    ]
  })
