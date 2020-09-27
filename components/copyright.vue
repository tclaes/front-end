<template>
  <div>
    <p>&copy; {{ currentDate.getFullYear() }} - {{ siteName.toUpperCase() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      siteName: "front-end.eu",
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #fff;
  font-family: "Fredoka One", sans-serif;
  font-size: 0.8rem;
}
</style>
