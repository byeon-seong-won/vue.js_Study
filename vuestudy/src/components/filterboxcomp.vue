

<template>
    <div @click="sendfilter" :class="filter + ' filter-item'" :style="`background-Image : url(${img})`">
        <span class="filtername">{{filter}}</span>
    </div> 
   
</template>




<script>
export default {
    name : 'filterbox',
    props : {
        img : String,
        filter : String
    },
    methods : {
        sendfilter() {
            this.emitter.emit('click', this.filter)
        }
    }

}

</script>


<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  border: 1px solid #ccc;
  cursor: pointer;
}
.filtername {color: #333;font-weight: bold;font-size: 14px;} 
</style>