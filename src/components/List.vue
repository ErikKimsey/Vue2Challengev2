<template>
  <div class="list-container">
    <h1>List </h1>
    <ul class="item-list" v-for="(item, index) in this.items">
      <li>
        <router-link class="list-item" :to="'Item/' + item.objectID">
          {{index + 1}}. {{item.title}}
          <div class="points">
            Points: {{item.points}}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'List',
  props:[],
  data(){
    return {
      items: []
    }
  },
  mounted: function(){
    // console.log("created");
    this.fetchList();
  },
  methods: {
    fetchList(){
      this.$http.get('http://hn.algolia.com/api/v1/search?query=javascript&hitsPerPage=25').then((response) => {

         this.items = response.data.hits;
        //  console.log(this.items);
       })
    }
  }
}
</script>

<style lang="scss">
h1 {
  background-color: red;
  color:blue;
}
.list-container {
  background-color: blue;
}
router-link {
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
