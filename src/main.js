import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import List from './components/List.vue'

Vue.use(VueResource)

new Vue({
  el: '#app',
  created: function () {
    window.Vue = this
  },
  render: h => h(App)
})
