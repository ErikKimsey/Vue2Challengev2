<template>
  <div id="app">
    <router-link to="/">
    <h1 class="gohome">Go home!</h1>
    </router-link>
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import List from './components/List.vue'
import Item from './components/Item.vue'
export default {
  name: 'app',
  data(){
    return {
      msg: "App Vue"
    }
  },
  components: {
    List
  }
}
</script>

<style lang="scss">
body{

}
#app {
  width: 500px;
  background-color: orange;
}
h1{
  font-size: 2em;
  &.gohome {
    font-size: 3em;
  }
}
</style>
