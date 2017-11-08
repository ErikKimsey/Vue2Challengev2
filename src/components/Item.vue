<template>
  <div class="item-container">
    <h1>{{ this.item.title }}</h1>
    <div class="post-score">Points: {{this.item.points}}</div>
    <a v-bind:href="this.item.url" target="_blank"> <div class="post-url">URL: {{ this.item.url }}</div> </a>
    <h3>Comments:</h3>
    <div class="comment-container">
      <ul class="post-comments" v-for="kid in this.item.children">
        <li class="sngl-comment">
          <b>User: {{ kid.author }}</b>
        </br>
          <b>Says...  </b>
        </br>
          {{ kid.text }}
        </li>
      </ul>
    </div>
  </div>

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
.item-container {
  background-color: black;
  height:600px;
  width:800px;
  color:yellow;
  .comment-container {
    height: 400px;
    overflow-y: scroll;
  }
  a {
    color: white;
  }
  .post-url {
    background-color: gray;
  }
  li {
    list-style: none;
  }
  .post-score {
    padding: 2px;
    color:orange;
    background-color: black;
  }
  h3 {
    color: Orange;
  }
}
h1 {
  color:white;
}
</style>
