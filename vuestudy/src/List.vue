<template>
  <div>
    <h5>{{list.title}}</h5>
    <p>{{list.date}}</p>
   </div>
</template>

<script>
export default {
    props : {
      list : Object
    },
    // methods : {
    //     clickEvent() {
    //         this.$emit('openModal', this.원룸.id)
    //     }
    // }
}
</script>