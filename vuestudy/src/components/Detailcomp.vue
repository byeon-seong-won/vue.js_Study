<template>
    <div class="detail">
        <p class="date">{{posts[$route.params.id].date}} 의 일상</p>
        <button @click="modify=true">수정하기</button>
        <div v-if="modify == false">
            <div class="post-body" :style="{ backgroundImage : `url('${posts[$route.params.id]. postImage}')`}" :class="`${posts[$route.params.id].filter}`"></div>
            <div class="post-content">
                <p>{{posts[$route.params.id].content}}</p>
            </div>
        </div>

        <div v-if="modify == true">
            <p>수정할 이미지를 업로드해주세요!</p>
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
              <textarea class="write-box" @input="write">

              </textarea>
            <button @click="publish()" class="newBtn">등록하기</button>
        </div>
    </div> 
</template>

<script>
    export default {
        name : 'Detail',
        data(){
          return {
            modify : false
          }
        },
        props : {
            posts : Array
        }
    }
</script>

<style>
.detail {
    width: calc(100% - 80px);
    max-width: 1000px;
    min-height: 800px;
    height: calc(100% - 80px);
    margin: 70px auto 0;
    position: relative;
    text-align: left;
    }
st-header {height: 30px;padding: 10px;}
.detail .post-body {/* background-image: url("https://picsum.photos/600?random=0"); */height: 450px;background-position: center;background-size: contain;background-repeat: no-repeat;width: 100%;flex: 3;}
.detail .post-content {padding:20px; font-size: 14px;flex: 2;background-color: #eee;}
.detail .post-content p {font-size: 18px;}
.detail .date {font-size: 22px;color: #555;margin-bottom: 40px;} 
</style>