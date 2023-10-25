<template>
  <div>
    <h5>{{lists[0].title}}</h5>
    <p>{{lists[0].date}}</p>
    <router-link to="/detail/0">이동</router-link>
  </div>
  <div>
    <h5>{{lists[1].title}}</h5>
    <p>{{lists[1].date}}</p>
    <router-link to="/detail/1">이동</router-link>
  </div>
  <div>
    <h5>{{lists[2].title}}</h5>
    <p>{{lists[2].date}}</p>
    <router-link to="/detail/2">이동</router-link>
  </div>
</template>
<script>


export default {
  name : 'list',
  props : {
    lists : Array
  }
}
</script>
<style>
  router-link {background-color: #fff;color: #333;border: 1px solid #fff;}
</style>