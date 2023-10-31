

<template>
  <div class="post">
    <div class="removeBtn"><i class="xi-close" @click="this.emitter.emit('remove', this.idx)"></i></div>
    <p class="date">{{post.date}}</p>
    <div class="post-body" :style="{ backgroundImage : `url('${post. postImage}')`}" :class="`${post.filter}`"></div>
    <div class="post-content"><p>{{post.content}}</p></div>
    <div class="detailBtn"><button @click="$router.push('/detail/' + this.idx)">상세보기</button></div>
  </div> 
</template>




<script>

export default {
  name : '',
  props : {
    post : Object,
    idx : Number
  }
}

</script>


<style>
.post {width: 100%;text-align: left;height: 100%;}
.post .removeBtn {text-align: right;cursor: pointer;}
.xi-close:before {font-size: 24px;}
.post .detailBtn {text-align: center;margin-top: 30px;}
.post .detailBtn button {background: #333;width: 25%;padding: 1rem 0;}
.post-body {/* background-image: url("https://picsum.photos/600?random=0"); */min-height: 300px;max-height: 400px;background-position: center;background-size: contain;background-repeat: no-repeat;width: 100%;margin: 20px 0;background-color: #111;}
.post-content {padding: 20px;font-size: 16px;background-color: #fff;border-radius: 20px;min-height: 300px;}
.date {font-size: 16px;color: #333;margin-top: -8px;font-weight: bold;} 

  </style>