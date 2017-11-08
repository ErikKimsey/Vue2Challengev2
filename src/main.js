import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import List from './components/List.vue'
import Item from './components/Item.vue'
import router from './router/router'

Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  data: {
    items : []
  },
  created: function () {
    window.Vue = this
  },
  render: h => h(App)
})
