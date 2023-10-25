<template>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <img :src="원룸들[idx].image" class="room-img">
        <h4>{{원룸들[idx].title}}</h4>
        <p>{{원룸들[idx].price}}만원</p>
        <input v-model.number="month" placeholder="가격입력!!">
        <p>최종가격 : {{month * 10}} 원</p>
        <button @click="closeModal()">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
  name : 'Modal',
  props : {
    원룸들 : Array,
    modal : Boolean,
    idx : Number
  },
  methods : {
    closeModal() {
        this.$emit('closeModal')
    }
  },
  data() {
    return {
      month : "",
    }
  },
  watch : {
    month(a) {
      if(isNaN(a) == true) {
        alert("숫자만 입력하세요")
        this.month = 1;
      }
    }
  },
  // mount후에 실행 (서버에서 데이터 가져옴)
  mounted() {

  }
}
</script>


<style>





</style>