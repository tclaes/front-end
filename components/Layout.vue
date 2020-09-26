<template>
  <div class="grid">
    <slot />
    <div class="footer">
      <slot name="footer" />
    </div>    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
      grid-template-rows: 1fr 150px;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  .footer {
    display: flex;
    grid-row-start: 2;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 1rem;
  }
</style>