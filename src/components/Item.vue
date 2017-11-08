<template>
  <!-- <video id="bgvid" playsinline autoplay loop> -->
    <!-- <source src="./src/assets/rad.mp4" type="video/mp4"> -->
  <div class="item-container">
    <h1>{{ this.item.title }}</h1>
    <div class="post-score">Points: {{this.item.points}}</div>
    <div class="post-url">URL: {{ this.item.url }}</div>
    <ul class="post-comments" v-for="kid in this.item.children">
      <li class="sngl-comment">
        {{ kid }}
      </li>
    </ul>

  </div>
  <!-- </video> -->
</template>
<script>
export default {
  name: 'Item',
  data(){
    return {
      objectID:'',
      item:{}
    }
  },
  created(){
    this.gotTitle();
    this.fetchItem();
  },
  methods: {
    gotTitle(){
      console.log("got tittle ",this.$route.params.id);
      this.objectID = this.$route.params.id;
    },
    fetchItem(){
      this.$http.get('http://hn.algolia.com/api/v1/items/' + this.objectID).then((response) => {

         this.item = response.data;
         console.log(this.item.title);
       })
    }
  }
}
</script>

<style lang="scss">
#bgvid {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  repeat: no-repeat;
 background-size: cover;
 transition: 1s opacity;
}
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
h1 {
  color:white;
}
</style>
