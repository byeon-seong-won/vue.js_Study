

<template>
  <div class="post">
    <p class="date">{{post.date}}</p>
    <div class="post-body" :style="{ backgroundImage : `url('${post. postImage}')`}" :class="`${post.filter}`"></div>
    <div class="post-content"><p>{{post.content}}</p></div>
  </div> 
</template>




<script>
export default {
  name : '',
  props : {
    post : Object
  },
  
}

</script>


<style>
.post {width: 100%;display: flex;justify-content: space-between;align-items: center;flex-direction: column;}
st-header {height: 30px;padding: 10px;}
.post-body {/* background-image: url("https://picsum.photos/600?random=0"); */height: 450px;background-position: center;background-size: contain;background-repeat: no-repeat;width: 100%;}
.post-content {padding-left: 15px;padding-right: 15px;font-size: 14px;flex: 1;border: 1px solid #000;}
.date {font-size: 11px;color: grey;margin-top: -8px;} 
  </style>