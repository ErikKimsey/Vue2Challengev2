<template>
  <div class="list-container">
    <ul class="item-list" v-for="item in this.items">
      <li class="list-item">
        {{item.title}}
      </li>
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
.list-item {
  border:solid 1px white;
  padding:2px;
  color:white;
  list-style: none;
}
</style>
