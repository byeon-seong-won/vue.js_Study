<template>
    <div class="menu">
      <h1>
        <router-link to="/">BYSEONG</router-link>
      </h1>
      <div>
        <router-link to="/list">블로그 글 보러가기</router-link>
        <router-link to="/list">블로그 글 작성하기</router-link>
      </div>
    </div>
</template>
<script>


export default {
  name : 'Menu',
}

</script>

<style>
.menu {width: calc(100% - 80px);margin: 0 auto;display: flex;justify-content: space-between;align-items: center;background : transparent;padding : 15px;border-radius : 5px;text-align: center;}
.menu>h1>a {color : #444;padding : 10px;font-weight: 500;font-size: 20px;display: inline-block;text-align: left;}
.menu>div {display: flex;flex: 3;justify-content: end;}
.menu>div>a {color: #333;font-size: 18px;}
.menu>div>a:last-child {display: inline-block;margin-left: 50px;}

</style>