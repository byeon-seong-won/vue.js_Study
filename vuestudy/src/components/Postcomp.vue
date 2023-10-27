

<template>
    <div class="postcont">
      <h1>RECORD MY LIFE</h1>  
        <!-- tab02 -->
      <div v-if="step == 0">
          <div class="upload-image" :style="`background-Image : url({this.$route.params.img})`" :class="filter">이미지 : `{{$route.params.name}}`</div>
          <div class="filters">
              <filterBox :img="img" :filter="filters[i]" v-for="(filter,i) in filters" :key="i">
                <template v-slot:default="이름받음">
                  <span>{{이름받음.msg}}</span>
                </template>
                <!-- <template v-slot:b><span>데이터2</span></template> -->
              </filterBox>
          </div>
          <button @click="step = 1">Next</button>
      </div>

      <!-- tab03 -->
      <div v-if="step == 1">
          <!-- <div class="upload-image" :style="`background-Image : url({$route.params.img})`" :class="filter"></div> -->
          <div class="write">
            <textarea class="write-box" @input="$emit('write', $event.target.value)">
              
            </textarea>
          </div>
          <button>발행하기</button>
      </div>
    </div>
</template>




<script>
export default {
  name : 'Postcomp',
  data() {
    return {
      step : 0,
    }
  },
  props : {
    img : String
  }
  
}

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


  .upload-image{
    width: 80%;
    height: 450px;
    margin: 0 auto;
    background: cornflowerblue;
    border: 5px solid #000;
    background-size : cover;
  }
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;

background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}





  @media (max-width: 1440px) {
    .postcont>div {display: grid;grid-template-columns: repeat(2, 1fr);gap: 30px;}
    .postcont>div>div {padding: 30px;}
  }
  @media (max-width: 1024px) {
    .postcont>div {display: grid;grid-template-columns: repeat(1, 1fr);gap: 30px;}
    .postcont>div>div {padding: 20px;}
  }



</style>