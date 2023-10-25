<template>
    <div>
        <h4>상세페이지</h4>
        <h5>{{lists[$route.params.id].title}}</h5>
        <p>{{lists[$route.params.id].date}}</p>
        <p>{{lists[$route.params.id].content}}</p>
    </div>
</template>

<script>
    export default {
        props : {
          lists : Array
        },
    }
</script>