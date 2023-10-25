


<template>
  <div> 
    <Discount/>
    <Modal @closeModal="modal = false;" :원룸들="원룸들" :idx="idx" :modal="modal"/>
    <div class="menu">
      <a v-for="작명 in 3" :key="작명">Home</a>
    </div>
    <Card @openModal="modal = true; idx = $event" :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="i"/>
    <!-- <div class="product" v-for="(room,i) in 원룸들" :key="i">
      <img :src="room.image" class="room-img">
      <h4 @click="modal = true; idx=i">{{원룸들[i].title}}</h4>
      <p>{{원룸들[i].price}}만원</p>
      <button @click="신고수[i]++">허위매물신고</button>
      <span>신고수 : {{신고수[i]}}</span>
    </div> -->
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
      price1 : 60,
      메뉴들 : ['Home', 'Shop', 'About'],
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
</style>
