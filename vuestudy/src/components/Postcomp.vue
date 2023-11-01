

<template>
    <div class="postcont" @goBack="step = 0">
      <h1>MY BLOG LIST</h1>  
      <!-- tab01 -->
      <button @click="step = 1" v-if="step == 0" class="newBtn">+ 새글 작성하기</button>
      <h3>{{id}}</h3>
      <div v-if="step == 0" class="list" @modiIdx="modiidx = $event">
        <List v-for="(a,i) in posts" :key="i" :post="posts[i]" :idx="i"/>
      </div>
      <!-- tab02 -->
      <div v-if="step == 1">
        <h4 class="stepTitle">블로그에 업로드 할 이미지를 넣어주세요!</h4>
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
              <p>필터 선택하기 <span class="xi-arrow-down"></span></p>
              <FilterBox :img="img" :filter="filters[i]" v-for="(filter,i) in filters" :key="i"></FilterBox>
          </div>
          <button @click="step = 0" class="newBtn goback">취소하기</button>
          <button @click="checkImg();" class="newBtn">다음단계로</button>
      </div>
      <!-- tab03 -->
      <div v-if="step == 2">
        <h4 class="stepTitle">블로그에 업로드 할 내용을 입력해주세요!</h4>
        <div class="upload-image" :style="{backgroundImage : `url('${img}')` }" :class="clickedFilter"></div>
        <div class="write">
          <textarea class="write-box" @input="write" placeholder="블로그에 업로드 할 내용을 입력해주세요." onfocus="this.placeholder = ''" onblur="this.placeholder = '블로그에 업로드 할 내용을 입력해주세요.'"></textarea>
        </div>
        <button @click="step = 0" class="newBtn goback">취소하기</button>
        <button @click="checkInput();" class="newBtn">등록하기</button>
      </div>
    </div>
</template>


<script>
import dayjs from 'dayjs'
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
      idx : '',
      modiidx:''
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
    checkImg() {
      if(this.uploaded == false) {
        alert('이미지를 업로드해주세요!')
        return;
      } else {
        this.step = 2;
      }
    },
    checkInput() {
      if(this.input == '') {
        alert('내용을 입력해주세요')
        return;
      } else {
        this.publish();
      }
    },
    publish() {
      var length = this.posts.length;
      console.log(length)
      var 새게시물 = {
        id : length++,
        postImage: this.img,
        date: dayjs().format("YYYY-MM-DD"),
        content: this.input,
        filter: this.clickedFilter
      };
      this.posts.unshift(새게시물);
      this.step = 0;
    }
  },
  mounted() {
    this.emitter.on('click', (a)=> {
      this.clickedFilter = a
    })
    this.emitter.on('remove', (a)=> {
      return this.posts.splice(a,1)
    })
    this.emitter.on('modify', (modiPost)=> {
      var 수정게시물 = {
        id : modiPost.id,
        postImage: modiPost.postImage,
        date: modiPost.date,
        content: modiPost.content,
        filter: modiPost.filter
      };
      this.posts[modiPost.id] = 수정게시물
    })
  }
}
</script>

<style>
.postcont {
  width: calc(100% - 160px);
  max-width: 1400px;
  min-height: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 250px 0;
}
.postcont>h1 {font-size: 6rem;text-align: left;font-family: 'Acme', sans-serif;color: #333;text-transform: uppercase;margin-bottom: 50px;}
.postcont>div.list {display: grid;grid-template-columns: repeat(2, 1fr);row-gap: 150px;column-gap: 50px;}
.postcont>div.list>div {border: 0.13rem solid #888;padding: 30px 40px;background-color: whitesmoke;color: #333;border-radius: 2rem;font-size: 20px;min-height: 500px}
.postcont button:hover {opacity: 0.85;}
.postcont button.newBtn {margin-bottom: 30px;margin-top: 30px;}
.postcont button.newBtn.goback {margin-right: 10px;}
.postcont h4.stepTitle {font-size: 22px;margin-bottom: 20px;}
.upload-image {
  width: 100%;
  height: 500px;
  margin: 30px auto 50px;
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
.filters {overflow-x:scroll;white-space: nowrap;}
.filters::-webkit-scrollbar {height: 8px;}
.filters::-webkit-scrollbar-track {background: #f1f1f1; }
.filters::-webkit-scrollbar-thumb {background: #09030578;border-radius: 5px;}
.filters::-webkit-scrollbar-thumb:hover {background: #555; }
.write-box {
  border: none;
  width: 100%;
  height: 300px;
  padding: 20px;
  margin: auto;
  display: block;
  outline: none;
  border: 1px solid #aaa;
  box-sizing: border-box;
}
.write-box:focus {outline: none;}


@media (max-width: 1920px) {
  .postcont {padding-top: 200px;}
  .postcont>h1 {font-size: 5rem;}
  .postcont>div.list>div {padding: 20px;}
}
@media (min-width: 1440px) and (max-width: 1920px) {
  .postcont {width: calc(100% - 200px);}
}
@media (min-width: 1440px) {
  .postcont {width: calc(100% - 200px);}
}
@media (max-width: 1024px) {
  .postcont {width: calc(100% - 80px);}
  .postcont>div.list {display: grid;grid-template-columns: repeat(1, 1fr);gap: 100px;}
}
@media (max-width: 768px) {
  .postcont {width: calc(100% - 40px);}
  .postcont>h1 {font-size: 3rem;margin-bottom: 0;}
  .post .detailBtn button {width: 45%;padding: 0.8rem 0;}
  .postcont h4.stepTitle {font-size: 18px;}
  .postcont {padding-top: 150px;}
}

</style>