<template>
  <div id="app">
    <h2>something</h2>
    <h1>{{msg}}</h1>
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
  height: 500px;
  background-color: orange;
}

h1{
  font-size: 2em;
}
</style>
