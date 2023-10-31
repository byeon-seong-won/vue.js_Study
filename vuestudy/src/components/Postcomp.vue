

<template>
    <div class="postcont">
      <h1>MY BLOG LIST</h1>  
      <!-- tab01 -->
      <button @click="step = 1" v-if="step == 0" class="newBtn">+ 새글 작성하기</button>
      <div v-if="step == 0" class="list">
        <List v-for="(a,i) in posts" :key="i" :post="posts[i]" :idx="i"/>
      </div>
      <!-- tab02 -->
      <div v-if="step == 1">
        <p>블로그에 업로드 할 이미지를 넣어주세요!</p>
        <ul>
          <input @change="upload" type="file" id="file"/>
          <label for="file" class="input-plus"></label>
        </ul>
          <div class="upload-image" :style="{backgroundImage : `url('${img}')` }" :class="clickedFilter">
            <div v-if="uploaded == false" class="uploadPz">
              <img src=".././assets/notfound.png">
              <h4>이미지를 업로드해주세요!</h4>
            </div>
          </div>
          <div class="filters">
              <p>필터 선택하기</p>
              <FilterBox :img="img" :filter="filters[i]" v-for="(filter,i) in filters" :key="i">
                <!-- <template v-slot:b><span>데이터2</span></template> -->
              </FilterBox>
          </div>
          <button @click="step = 2" class="newBtn">글 작성하기</button>
      </div>

      <!-- tab03 -->
      <div v-if="step == 2">
          <div class="upload-image" :style="{backgroundImage : `url('${img}')` }" :class="clickedFilter"></div>
          <div class="write">
            <textarea class="write-box" @input="write">
              
            </textarea>
          </div>
          <button @click="publish()" class="newBtn">등록하기</button>
      </div>
    </div>
</template>




<script>
import data from '.././assets/data.js'
import FilterBox from './filterboxcomp.vue'
import List from './Listcomp.vue'
export default {
  name : 'Post',
  data() {
    return {
      posts : data,
      step : 0,
      filters : [
        "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
      ],
      img : '',
      clickedFilter : '',
      input : '',
      uploaded : false,
      idx : ''
    }
  },
  components : {
    FilterBox,
    List
  },
  methods : {
    upload(e){
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      this.img = url;
      this.uploaded = true;
    },
    write($event) {
      this.input = $event.target.value
    },
    publish() {
      var 새게시물 = {
        postImage: this.img,
        date: "Oct 30",
        content: this.input,
        filter: this.clickedFilter
      };
      this.posts.unshift(새게시물);
      this.step = 0;
      // this.$router.push({name: 'List', params: {name : 새게시물}})
    }
  },
  mounted() {
    this.emitter.on('click', (a)=> {
      this.clickedFilter = a
    })
    this.emitter.on('remove', (a)=> {
      return this.posts.splice(a,1)
    })
  }
  
}

</script>


<style>
 .postcont {
    width: calc(100% - 80px);
    max-width: 1400px;
    min-height: 1200px;
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 70px;
    position: relative;
  }
  .postcont .newBtn {margin-bottom: 30px;}
  .postcont>Div:nth-child(2) button {margin-top: 30px;}
  .postcont button:hover {opacity: 0.85;}
  .postcont>h1 {font-size: 4rem;text-align: left;font-family: 'Acme', sans-serif;color: #333;text-transform: uppercase;margin-bottom: 50px;}
  .postcont>div.list {display: grid;grid-template-columns: repeat(2, 1fr);gap: 50px;cursor: pointer;}
  .postcont>div.list>div {padding: 40px 20px;background-color: #eee;color: #333;border-radius: 2rem;font-size: 20px;min-height: 500px}




  .upload-image{
    width: 100%;
    height: 500px;
    margin: 30px auto 10px;
    text-align: center;
    background-size : contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    position: relative;
    border: 0.12rem solid #eee;
  }
  .upload-image>div.uploadPz {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}
  .upload-image>div.uploadPz>h4 {font-size: 20px;color: #333;}
  .upload-image>div.uploadPz>img {width: 100%;}
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
width: 100%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
border: 0.15rem solid #ccc;
    box-sizing: border-box;
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