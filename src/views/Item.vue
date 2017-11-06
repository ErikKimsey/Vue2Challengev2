<template>
  <div class="item-container">
    <h1>Individual Post</h1>
    <div class="post-title"></div>
    <div class="post-score"></div>
    <div class="post-url"></div>
    <ul class="post-comments">
      <li class="sngl-comment">

      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'item',
  data(){
    return {
      item: {}
    }
  },
  mounted: function(){
    console.log("created");
    this.fetchList();
  },
  methods: {
    fetchList(){
      this.$http.get('http://hn.algolia.com/api/v1/search?query=javascript&hitsPerPage=25').then((response) => {
         this.items = response.data.hits;
         var i;
         for(i=0; i<25; i++){
           this.items[i].push = this.items[i];
           console.log(this.items);
         }
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
  background-color: red;
}
li {
  list-style: none;
}
.list-item {
  border:solid 1px white;
  padding:2px;
  color:white;
  width:400px;
  &:hover{
    background-color: white;
    color:black;
  }
}
.points {
  padding: 2px;
  color:white;
}
</style>
