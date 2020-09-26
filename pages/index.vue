<template>
<Layout>
  <div class="content">
    <h1 class='title'>Front End</h1>
    <sl-button>Shoelace try button</sl-button>
  </div>
    
  <Copyright slot="footer" />
</Layout>
</template>

<script>
  import Copyright from '~/components/copyright';
  import Layout from '~/components/layout'
  export default {
    components: {
      Copyright,
      Layout
    }
  }
</script>

<style scoped>
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

</style>