<template>
    <div class="menu">
      <h1>
        <router-link to="/">BYSEONG</router-link>
      </h1>
      <div>
        <router-link to="/list">블로그 글 보러가기</router-link>
        <router-link to="/write">블로그 글 작성하기</router-link>
      </div>
    </div>
</template>
<script>


export default {
  name : 'Menu',
}

</script>

<style>
.menu {width: calc(100% - 80px);border: 1px solid #000;margin: 0 auto;display: flex;justify-content: space-between;align-items: center;background : transparent;padding : 15px;border-radius : 5px;text-align: center;}
.menu>h1>a {color : #444;padding : 10px;font-weight: bold;font-size: 20px;display: inline-block;text-align: left;font-family: 'roboto', sans-serif;}
.menu>div {display: flex;flex: 3;justify-content: end;}
.menu>div>a {color: #444;font-size: 18px;letter-spacing: -0.05em;font-weight: bold;}
.menu>div>a:hover {color: #888;}
.menu>div>a:last-child {display: inline-block;margin-left: 50px;}

</style>