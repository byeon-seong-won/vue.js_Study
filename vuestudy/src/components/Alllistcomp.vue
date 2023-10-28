<template>
  <div class="listcont">
    <h1>My Blog List</h1>  
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file"/>
      <label for="file" class="input-plus">+</label>
    </ul>
    <div>
      <List v-for="(a,i) in posts" :key="i" :post="posts[i]"/>
    </div>
  </div>
</template>
<script>

import List from './Listcomp.vue'
export default {
  name : 'list',
  data() {
    return {
      img : ''
    } 
  },
  props : {
    posts : Array
  },
  components : {
    List
  },
  methods : {
    upload(e){
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      this.img = url;
      this.$router.push({name: 'Post', params: {name : "name"}})
 

      // this.step++
    },
    
  },

}
</script>
<style>
  .listcont {
    width: calc(100% - 80px);
    min-height: 1200px;
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 70px;
    position: relative;
    background-color: rgb(245, 245, 245);
    border-radius: 2rem;
  }
  .listcont>h1 {font-size: 8rem;text-align: left;font-family: 'Acme', sans-serif;color: #333;text-transform: uppercase;margin-bottom: 50px;}
  .listcont>div {display: grid;grid-template-columns: repeat(2, 1fr);gap: 30px;}
  .listcont>div>div {padding: 40px 20px;background-color: #eee;color: #333;border-radius: 10px;font-size: 20px;}




  @media (max-width: 1440px) {
    .listcont>div {display: grid;grid-template-columns: repeat(2, 1fr);gap: 30px;}
    .listcont>div>div {padding: 30px;}
  }
  @media (max-width: 1024px) {
    .listcont>div {display: grid;grid-template-columns: repeat(1, 1fr);gap: 30px;}
    .listcont>div>div {padding: 20px;}
  }





</style>