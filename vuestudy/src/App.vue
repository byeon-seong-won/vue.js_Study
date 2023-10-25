
<template>
  <div> 
    <Discount/>
    <!-- animation -->
    <!-- <div class="start" :class="{ end : modal }">
      <Modal @closeModal="modal = false;" :원룸들="원룸들" :idx="idx" :modal="modal"/>
    </div> -->
    <Transition name="fade">
      <Modal @closeModal="modal = false;" :원룸들="원룸들" :idx="idx" :modal="modal"/>
    </Transition>
    <div class="menu">
      <a v-for="menu in menus" :key="menu">{{menu}}</a>
    </div>
    <button @click="priceSort()">가격순정렬</button>
    <button @click="sortBack()">되돌리기</button>
    <Card @openModal="modal = true; idx = $event" :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="i"/>
  </div>
</template>

<script>
import data from './assets/data.js'
import Discount from './Discount.vue' 
import Modal from './Modal.vue'
import Card from './Card.vue'

export default {
  name : 'App',
  data(){
    return {
      menus : ['Home', 'Shop', 'About'],
      신고수 : [0,1,2,3,4,5],
      idx : 0,
      modal : false,
      원룸들 : data,
      오브젝트 : { name : "byeon", age : 29 }
    }
  },
  components : {
    Discount,
    Modal,
    Card
  },
  methods : {
    priceSort() {
      this.원룸들.sort(function(a,b) {
        return a.price - b.price
      })
    },
    sortBack() {
      
    }
  }
}
</script>

<style>
* {font-family: 'Noto sans KR', sans-serif; letter-spacing: -0.03em;font-size: 18px;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {background : darkslateblue;padding : 15px;border-radius : 5px;}
.menu a {color : white;padding : 10px;}
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
