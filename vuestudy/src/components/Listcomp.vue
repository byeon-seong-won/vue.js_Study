<template>
  <div>
    <h5>{{lists[0].title}}</h5>
    <p>{{lists[0].date}}</p>
  </div>
  <div>
    <h5>{{lists[1].title}}</h5>
    <p>{{lists[1].date}}</p>
  </div>
  <div>
    <h5>{{lists[2].title}}</h5>
    <p>{{lists[2].date}}</p>
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

</style>