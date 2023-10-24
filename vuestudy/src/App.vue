


<template>
  <div>
    <div class="menu">
      <a v-for="작명 in 3" :key="작명">Home</a>
    </div>
    <div>
      <h4>{{products[0]}}</h4>
      <p>50만원</p>
      <button @click="신고수[0]++">허위매물신고</button>
      <span>신고수 : {{신고수[0]}}</span>
    </div>
    <div>
      <h4>{{products[1]}}</h4>
      <p>50만원</p>
      <button @click="신고수[1]++">허위매물신고</button>
      <span>신고수 : {{신고수[1]}}</span>
    </div>
    <div>
      <h4>{{products[2]}}</h4>
      <p>50만원</p>
      <button @click="신고수[2]++">허위매물신고</button>
      <span>신고수 : {{신고수[2]}}</span>
    </div>
    
  </div>
</template>


<script>
export default {
  name : 'App',
  data(){
    return {
      price1 : 60,
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      신고수 : [0,0,0]
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
</style>
