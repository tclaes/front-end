<template>
    <h1 class='title'>Front End</h1>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  h1 {
    color: rgb(255, 255, 255);
    font-family: 'Fredoka One', cursive;
    font-size: 78px;
    padding: 1rem;
  }

  .title::after {
    content:' .';
    color: red;
    display: inline-block;
    padding-left: 1rem;
  }
</style>