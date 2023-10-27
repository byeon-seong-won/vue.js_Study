
<template>
    <div class="postcont">
        <h1>RECORD MY LIFE</h1>  

        <!-- tab02 -->
        <div v-if="step == 1">
            <div class="upload-image" :style="{ backgroundImage : `url(${img})`}" :class="filter"></div>
            <div class="filters">
                <filterBox :img="img" :filter="filters[i]" v-for="(filter,i) in filters" :key="i">
                  <template v-slot:default="이름받음">
                    <span>{{이름받음.msg}}</span>
                  </template>
                  <!-- <template v-slot:b><span>데이터2</span></template> -->
                </filterBox>
            </div>
        </div>

        <!-- tab03 -->
        <div v-if="step == 2">
            <div class="upload-image" :style="{ backgroundImage : `url(${img})`}" :class="filter"></div>
            <div class="write">
              <textarea class="write-box" @input="$emit('write', $event.target.value)">
                
              </textarea>
            </div>
        </div>
    </div>
  </template>
  
 
  <script>

  </script>


<style>
 .postcont {
  width: calc(100% - 80px);
  min-height: 1200px;
  height: calc(100% - 80px);
  margin: 0 auto;
  border-radius: 2rem;
  overflow: hidden;
  padding: 70px;
  background-image: linear-gradient(rgba(0, 0, 0,0.4), rgba(0, 0, 0,0.5)),url("../assets/main.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  }
  .postcont>h1 {font-size: 8rem;text-align: left;font-family: 'Acme', sans-serif;color: #fff;text-transform: uppercase;margin-bottom: 50px;}
  .postcont>div {display: grid;grid-template-columns: repeat(3, 1fr);gap: 30px;}
  .postcont>div>div {padding: 40px 20px;background-color: #eee;color: #333;border-radius: 10px;font-size: 20px;}




  @media (max-width: 1440px) {
    .postcont>div {display: grid;grid-template-columns: repeat(2, 1fr);gap: 30px;}
    .postcont>div>div {padding: 30px;}
  }
  @media (max-width: 1024px) {
    .postcont>div {display: grid;grid-template-columns: repeat(1, 1fr);gap: 30px;}
    .postcont>div>div {padding: 20px;}
  }



</style>