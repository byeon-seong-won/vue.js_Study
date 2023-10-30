

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
  }
}

</script>


<style>
.post {width: 100%;text-align: left;height: 100%;}
.post-body {/* background-image: url("https://picsum.photos/600?random=0"); */min-height: 300px;max-height: 400px;background-position: center;background-size: contain;background-repeat: no-repeat;width: 100%;margin: 20px 0;background-color: #111;}
.post-content {padding: 20px;font-size: 14px;background-color: #fff;border-radius: 20px;}
.date {font-size: 16px;color: #333;margin-top: -8px;font-weight: bold;} 
  </style>