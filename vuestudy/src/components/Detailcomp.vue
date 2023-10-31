<template>
    <div class="detail">
        <h1>MY DAILY LIFE</h1>  
        <div v-if="modifystate == false">
            <p class="date">{{posts[$route.params.id].date}}</p>
            <div class="post-body" :style="{ backgroundImage : `url('${posts[$route.params.id]. postImage}')`}" :class="`${posts[$route.params.id].filter}`"></div>
            <div class="post-content">
                <p>{{posts[$route.params.id].content}}</p>
            </div>
            <div class="btnClass">
                <button @click="modifystate=true">수정하기</button>
                <router-link to="/post">목록으로 돌아가기</router-link>
            </div>
        </div>
        

        <div v-if="modifystate == true">
            <h4 class="stepTitle">수정할 이미지를 업로드해주세요!</h4>
            <ul>
              <input @change="modiUd" type="file" id="file"/>
              <label for="file" class="input-plus"></label>
            </ul>
            <div class="upload-image" :style="{backgroundImage : `url('${modiImg}')` }" :class="modiFilter">
              <div v-if="uploaded == false" class="uploadPz">
                <img src=".././assets/notfound.png">
                <h4>수정할 이미지를 업로드해주세요!</h4>
              </div>
            </div>
            <div class="filters">
                <p>필터 선택하기 <span class="xi-arrow-down"></span></p>
                <FilterBox :img="modiImg" :filter="filters[i]" v-for="(filter,i) in filters" :key="i">
                  <!-- <template v-slot:b><span>데이터2</span></template> -->
                </FilterBox>
            </div>
            <textarea class="write-box modiWrite-box" @input="modiWrite"></textarea>
            <div class="btnClass">
                <button @click="modify" class="newBtn">수정완료</button>
                <router-link to="/post">취소하기</router-link>
            </div>
        </div>
    </div> 
</template>

<script>
import dayjs from 'dayjs'
import FilterBox from './filterboxcomp.vue'
    export default {
        name : 'Detail',
        data(){
          return {
            modifystate : false,
            modiImg : '',
            modiCont : '',
            modiFilter : '',
            filters : [
              "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
              "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
              "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
            ],
            uploaded : false
          }
        },
        props : {
            posts : Array,
        },
        components : {
            FilterBox
        },
        mounted() {
            this.emitter.on('click', (a)=>{
              this.modiFilter = a
            })
        },
        methods : {
            modiUd(e){
              let 수정파일 = e.target.files;
              let modiurl = URL.createObjectURL(수정파일[0]);
              this.modiImg = modiurl;
              this.uploaded = true;
            },
            modiWrite($event) {
              this.modiCont = $event.target.value
            },
            modify() {
                var 수정게시물 = {
                    id : this.$route.params.id,
                    postImage: this.modiImg,
                    date: dayjs().format("YYYY-MM-DD"),
                    content: this.modiCont,
                    filter: this.modiFilter
                };
                // console.log("수정게시물" + JSON.stringify(수정게시물))
                this.emitter.emit("modify", 수정게시물)
                // console.log("detail 수정게시물" + JSON.stringify(수정게시물) + this.idx)
                // console.log(this.$route.params.id)
                this.modifystate = false;
                alert("수정이 완료되었습니다.")
                this.$router.push({name: 'Post'})
            }
        },
    }
</script>

<style>
.detail {
    width: calc(100% - 80px);
    max-width: 1200px;
    min-height: 800px;
    text-align: left;
    margin: 0 auto;
    position: relative;
    padding: 250px 0;
    }
    .detail>h1 {font-size: 6rem;text-align: left;font-family: 'Acme', sans-serif;color: #333;text-transform: uppercase;margin-bottom: 50px;}
st-header {height: 30px;padding: 10px;}
.detail .btnClass {text-align: right;margin-top: 50px;}
.detail .btnClass a {margin-left: 10px;font-size: 14px;display: inline-block;background: crimson;color: #fff;border: none;padding: 10px;border-radius: 10px;cursor: pointer;}
.detail .post-body {/* background-image: url("https://picsum.photos/600?random=0"); */height: 450px;background-position: center;background-size: contain;background-repeat: no-repeat;width: 100%;flex: 3;}
.detail .post-content {padding:20px; font-size: 14px;flex: 2;background-color: #eee;}
.detail .post-content p {font-size: 18px;}
.detail .date {font-size: 20px;color: #777;margin-bottom: 10px;font-weight: 300;} 
.modiWrite-box {margin-top: 30px;}
</style>