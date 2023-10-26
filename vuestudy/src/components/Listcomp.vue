<template>
  <div class="listcont">
    <h1>My Blog List</h1>  
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
  .listcont {
  width: calc(100% - 80px);
  min-height: 1200px;
  height: calc(100% - 80px);
  margin: 0 auto;
  border-radius: 2rem;
  overflow: hidden;
  padding: 70px;
  background-image: linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)),url("../assets/main.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  }
  .listcont>h1 {font-size: 8rem;text-align: left;font-family: 'Acme', sans-serif;color: #fff;text-transform: uppercase;margin-bottom: 50px;}
  .listcont>div {display: grid;grid-template-columns: repeat(2, 1fr);gap: 30px;}
  .listcont>div>div {padding: 30px 20px;background-color: #eee;color: #333;border-radius: 10px;}

</style>