<template>
  <div>
    <div class="card">
      <div class="img">
        <slot name="img"></slot>
        <div class="title-wrapper dis-fl jus-con-sp-bt al-it-cen">
          <div class="title trans-low">
            <slot name="title"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  width: 100%;
  /* border: none; */
}

.img {
  width: 100%;
  height: 60%;
}

.title-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
}

.title {
  max-width: 90%;
  margin: auto;
  padding: 0 5px;
  background-color: rgba(255, 0, 0, 0.774);
  text-align: center;
  font-weight: 500;
  color: white;

}

.img:hover .title{
  background-color: rgba(255, 255, 255, 0.767);
  color: rgba(255, 0, 0, 0.774);
}
</style>
