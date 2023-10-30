<template>
  <div class="content">
    <h1>My Daily Life</h1>  
  </div>
</template>
<script>


export default {
  name : 'Main',
  
}
</script>
<style>
.content {
  width: calc(100% - 80px);
  /* min-height: 1200px;*/
  height: calc(100% - 80px); 
  /* height: 100%; */
  margin: 0 auto;
  border-radius: 2rem;
  overflow: hidden;
  padding: 70px;
  /* background-image: linear-gradient(rgba(221, 221, 221,0.5), rgba(221, 221, 221,0.2)),url("./assets/main.png"); */
  background-image: linear-gradient(rgba(221, 221, 221,0.1), rgba(0, 0, 0,0.2)),url("../assets/main.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.content>h1 {text-align: center;font-size: 12rem;font-family: 'Acme', sans-serif;color: #fff;text-transform: uppercase;margin-bottom: 50px;position: absolute;top: 50%;
left: 50%;transform: translate(-50%,-50%);}
/* .content>div {display: flex;justify-content: space-between;border: 1px solid rgb(0, 0, 0);} */
.content>div>div {cursor: pointer;padding: 20px;background-color: #333;color: #eee;margin-bottom: 20px;border-radius: 10px;}
/* .content>div>img {border-radius: 5rem;} */
.content>div>.rightBtn {display: flex;flex-direction: column;}
.content>div>.rightBtn button {display: block;padding: 30px;color: #fff;background-color: #333;}










</style>