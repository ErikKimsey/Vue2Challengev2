<template>
  <div class="list-container">
    <ul class="item-list" v-for="item in this.items">
        <a class="list-item">{{item.title}}</a>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list',
  data(){
    return {
      items: []
    }
  },
  mounted: function(){
    console.log("created");
    this.fetchList();
  },
  methods: {
    fetchList(){
      this.$http.get('http://hn.algolia.com/api/v1/search?tags=front_page').then((response) => {
         console.log(response.data.hits);
         this.items = response.data.hits;
       })
    }
  }
}
</script>

<style lang="scss">
.list-container {
  background-color: blue;
}
a {
  border:solid 1px white;
  padding:2px;
  color:white;
  width:400px;
  &:hover{
    background-color: white;
    color:black;
  }
}
</style>
