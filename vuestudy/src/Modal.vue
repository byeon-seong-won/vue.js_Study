<template>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <img :src="원룸들[idx].image" class="room-img">
        <h4>{{원룸들[idx].title}}</h4>
        <p>{{원룸들[idx].price}}만원</p>
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
        this.$emit('closeModal', this.원룸들.idx)
    }
  }
}
</script>
<style>
  
</style>