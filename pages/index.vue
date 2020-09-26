<template>
<div class="grid">
  <div class="content">
    <h1 class='title'>Front End</h1>
    <sl-button>Shoelace try button</sl-button>
  </div>
    
    <Copyright class="copyright" />
</div>
</template>

<script>
  import Copyright from '~/components/copyright';
  export default {
    components: {
      Copyright
    }
  }
</script>

<style scoped>
  .grid {
    display: grid;
      grid-template-rows: 1fr 150px;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  .content {
    display: grid;
    align-items: center;
    place-content: center;
  }

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

  .copyright {
    display: flex;
    grid-row-start: 2;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 1rem;
  }

</style>