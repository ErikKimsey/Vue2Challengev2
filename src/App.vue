<template>
  <div id="app">
    <router-link :to="{ name: '', params: {} }">
    <h1 class="gohome">Go home!</h1>
    </router-link>
    <h2>{{msg}}</h2>
    <List></List>
    
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  name: 'app',
  data(){
    return {
      msg: "yo yoyoyoy"
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
