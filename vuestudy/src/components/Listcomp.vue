<template>
  <div class="listcont">
    <div>
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
    </div>
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
    /* list page */
  .listcont {
    width: calc(100% - 80px);
    min-height: 1200px;
    height: calc(100% - 80px);
    margin: 0 auto;
    border-radius: 2rem;
    overflow: hidden;
    padding: 70px;
  }
  .listcont>div {border:3px solid red;}


</style>