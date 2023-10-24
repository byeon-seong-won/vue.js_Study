


<template>
  <div>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <img :src="원룸들[idx].image" class="room-img">
        <h4>{{원룸들[idx].title}}</h4>
        <p>{{원룸들[idx].price}}만원</p>
        <button @click="modal=false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="작명 in 3" :key="작명">Home</a>
    </div>
    
    <div class="product" v-for="(room,i) in 원룸들" :key="i">
      <img :src="room.image" class="room-img">
      <h4 @click="modal = true; idx=i">{{원룸들[i].title}}</h4>
      <p>{{원룸들[i].price}}만원</p>
      <button @click="신고수[i]++">허위매물신고</button>
      <span>신고수 : {{신고수[i]}}</span>
    </div>

  </div>
</template>


<script>
import data from './assets/data.js'
export default {
  name : 'App',
  data(){
    return {
      price1 : 60,
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      신고수 : [0,1,2,3,4,5],
      idx : 0,
      modal : false,
      원룸들 : data
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
</style>
