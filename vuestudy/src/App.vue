
<template>
  <div class="wrap">

    <!-- menu -->
    <Menu/>

    <!-- main -->
    <router-view :posts="posts"></router-view>    
    <!-- <Detail :detail="lists"></Detail> -->

  
  </div>
</template>

<script>
import data from './assets/data.js'
import Menu from './components/Menucomp.vue'

export default {
  name : 'App',
  data(){
    return {
      posts : data
    }
  },
  components : {
    Menu
  },
  
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
  height: 100%;
  background-color: #fff;
  /* background-image: url("./assets/main.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; */
}





#app {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}

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
