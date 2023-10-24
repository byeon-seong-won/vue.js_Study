<template>
    <div class="black-bg" v-if="modal == true">
      <div class="white-bg">
        <img :src="원룸들[idx].image" class="room-img">
        <h4>{{원룸들[idx].title}}</h4>
        <p>{{원룸들[idx].price}}만원</p>
        <button @click="modal=false">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
  name : 'Modal',
  props : {
    원룸들 : Array,
  }
}
</script>
<style>
  
</style>