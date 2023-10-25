
<template>
  <div class="wrap">
      <div class="menu">
        <router-link to="/" class="xi-home"></router-link>
        <h1><a href="#none">BYSEONG</a></h1>
        <router-link to="/" class="xi-border-color"></router-link>
      </div>
      <div class="content">
        <h1>My Daily Life</h1>        
        <p>Vue로 만들었음</p>
        <!-- <List :list="lists[i]" v-for="(list, i) in lists" :key="i"/>-->

        <router-link to="/detail">상세페이지 이동하기</router-link>
        <router-link to="/list">리스트 이동하기</router-link>
        <router-view :lists="lists"></router-view> 
        <!-- <List :lists="lists"/> -->
      </div>




      
      <!-- <Detail :detail="lists"></Detail> -->

  
  </div>
</template>

<script>
import data from './assets/data.js'




export default {
  name : 'App',
  data(){
    return {
      menus : ['Home', 'Shop', 'About'],
      신고수 : [0,1,2,3,4,5],
      idx : 0,
      modal : false,
      lists : data,
      오브젝트 : { name : "byeon", age : 29 }
    }
  },
  components : {
    // List
  },
  methods : {
    priceSort() {
      this.원룸들.sort(function(a,b) {
        return a.price - b.price
      })
    },
    sortBack() {
      this.원룸들 = [...this.원룸들복제본]
    }
  }
}
</script>

<style>
/* common style */
*{ margin: 0;padding: 0;font-family: 'roboto','Noto Sans KR', sans-serif; letter-spacing: -0.03em}
html, body {width: 100%;height: 100%;position: relative;}
html {overflow-y: scroll; overflow-x: hidden; } 
article,aside,details,summary,figcaption,figure,
footer,header,hgroup,main,nav,section {display: block;}
li {list-style-type: none;} 
a {text-decoration: none;color: inherit;} 
table {border-collapse: collapse;}
input, select {vertical-align: middle;}
button,
input[type=button],
input[type=submit],
input[type=reset] {cursor: pointer;}
button,input {outline: none;}
h1,h2,h3,h4,h5,h6 {font-size:100%; font-weight: normal; margin-top: 0; }
img {vertical-align:top;font-size:0;border:0;}
/* /// common style /// */



.wrap {
  width: 100%;
  height: 100vh;
  background-image: url("./assets/main.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  width: calc(100% - 80px);
  height: calc(100vh - 80px);
  margin: 0 auto;
  background-color: rgba(255, 255, 255,0.5);
  /* background-color:rgba(0, 0, 0,0.3); */
  border-radius: 2rem;
  overflow: hidden;
  padding: 70px;
}
.content>h1 {font-size: 50px;text-align: left;font-family: 'Candal', sans-serif;color: #444;text-transform: uppercase;margin-bottom: 50px;}
.content>div {cursor: pointer;padding: 20px;background-color: #333;color: #eee;margin-bottom: 20px;border-radius: 10px;}







#app {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}
.menu {width: calc(100% - 80px);margin: 0 auto;display: flex;justify-content: space-between;background : transparent;padding : 15px;border-radius : 5px;text-align: center;}
.menu a {color : #444;padding : 10px;font-weight: bold;font-size: 20px;}
body {margin : 0;}
div {box-sizing: border-box;}
.black-bg {width: 100%; height:100%;background: rgba(0,0,0,0.5);position: fixed; padding: 20px;}
.white-bg {width: 100%; background: white;border-radius: 8px;padding: 20px;} 
.room-img {width: 100%;}
.product {background-color: #eee;margin-bottom: 40px;padding-bottom: 20px;}
button {background: crimson;color: #fff;border: none;padding: 10px;border-radius: 10px;cursor: pointer;margin-right: 10px;}
.start {opacity: 0;transition: all 1s;}
.end {opacity: 1;}


/* Transiton */
.fade-enter-from {opacity: 0;}
.fade-enter-active {transition: all 1s;}
.fade-enter-to {opacity: 1;}





</style>
