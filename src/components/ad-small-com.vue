<template>
  <div>
    <div class="dis-fl jus-con-cen">
      <div class="main col-theme"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 600px;
  height: 100px;
}

@media only screen and (max-width: 1200px) {
  .main {
    width: 500px;
  }
}

@media only screen and (max-width: 991px) {
  .main {
    width: 100%;
  }
}
</style>
