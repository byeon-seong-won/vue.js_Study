<template>
    <div class="detail">
        <div class="post-body" :style="{ backgroundImage : `url('${posts[$route.params.id]. postImage}')`}" :class="`${posts[$route.params.id].filter}`"></div>
        <div class="post-content">
            <p class="date">{{posts[$route.params.id].date}}</p>
            <p>{{posts[$route.params.id].content}}</p>
        </div>
    </div> 
</template>

<script>
    export default {
        name : 'Detail',
        props : {
            posts : Array
        },
    }
</script>

<style>
.detail {
    width: calc(100% - 80px);
    max-width: 1200px;
    min-height: 1200px;
    height: calc(100% - 80px);
    margin: 70px auto 0;
    position: relative;
    border: 3px solid red;
    display: flex;justify-content: space-between;align-items: center;flex-direction: column;row-gap: 50px;}
st-header {height: 30px;padding: 10px;}
.detail .post-body {/* background-image: url("https://picsum.photos/600?random=0"); */height: 450px;background-position: center;background-size: 100%;background-repeat: no-repeat;width: 100%;border: 1px solid #000;flex: 3;border: 2px solid blue;}
.detail .post-content {padding-left: 15px;padding-right: 15px;font-size: 14px;flex: 1;border: 1px solid #000;flex: 2;border: 2px solid green;}
.detail .post-content p {font-size: 20px;}
.detail .date {font-size: 16px;color: grey;} 
</style>