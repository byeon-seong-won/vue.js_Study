<template>
  <div class="content">
    <h1>MY  DAILY  LIFE</h1>  
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
  height: calc(100% - 80px); 
  margin: 0 auto;
  border-radius: 2rem;
  overflow: hidden;
  padding: 70px;
  background-image: linear-gradient(rgba(221, 221, 221,0.2), rgba(0, 0, 0,0.6)),url("../assets/main.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: 0.2rem solid #666;
  margin-top: 30px;
}
.content>h1 {
  text-align: center;
  font-size: 12rem;
  font-family: 'Acme', sans-serif;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.content>div>div {cursor: pointer;padding: 20px;background-color: #333;color: #eee;margin-bottom: 20px;border-radius: 10px;}
.content>div>.rightBtn {display: flex;flex-direction: column;}
.content>div>.rightBtn button {display: block;padding: 30px;color: #fff;background-color: #333;}


@media (max-width: 1920px) {
  .content>h1 {font-size: 10rem;}

}
@media (max-width: 1024px) {
  .content {
    width: 100%;
    height: 100vh;
    padding: 70px;
    border-radius: 0;
    margin: 0;
  }
}
@media (max-width:768px) {
  .content>h1 {font-size: 7rem;}
}

</style>