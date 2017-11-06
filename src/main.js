import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import List from './components/List.vue'
// import Item from './views/Item'
import router from './router/router'

Vue.use(VueResource)
// Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  data: {
    sharedState : {}
  },
  created: function () {
    window.Vue = this
  },
  render: h => h(App)
})
