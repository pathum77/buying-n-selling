<template>
  <div>
    <h2>Daily Deals</h2>
    <div class="main">
      <div class="items-wrapper-main dis-fl jus-con-sp-bt al-it-cen">
        <button @click="scrollLeft()" class="btns left pad-mar-no dis-fl jus-con-cen al-it-cen">
          <img src="../assets/icons/backward.png" alt="" />
        </button>
        <button @click="scrollRight()" class="btns right pad-mar-no dis-fl jus-con-cen al-it-cen">
          <img src="../assets/icons/forward.png" alt="" />
        </button>
      </div>
      <div class="items-wrapper" id="items-scroll">
        <div v-for="(item, index) in items" :key="index" class="item-wrapper dis-fl al-it-cen">
          <router-link to="" class="a-txt-dec-no">
            <div class="img dis-fl jus-con-cen al-it-cen">
              <img src="../assets/test/huawei-nova-2i.png" alt="">
            </div>
            <div class="name">
              <p class="f-sz-sm">{{item.name}}</p>
            </div>
            <div class="dis-fl jus-con-sp-bt">
              <p class="f-sz-sm">Rs. {{item.price}}</p>
              <p class="f-sz-sm"><del>Rs. {{item.priceDel}}</del></p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      items: [
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
        { name: 'Huawei Nova 2i', price: 50000, priceDel: 55000, image: '' },
    ],
    }
  },

  methods: {
    scrollRight() {
      document.getElementById("items-scroll").scrollBy(870, 0);
    },

    scrollLeft() {
      document.getElementById("items-scroll").scrollBy(-870, 0);
    },
  },
};

</script>

<style scoped>

img{
  max-width: 100%;
  max-height: 100%;
}

a{
  color: black;
}

a:hover{
  color: #D2042D;
}

h2 {
  font-size: 25px;
}

.main {
  position: relative;
}

.items-wrapper-main {
  width: 100%;
  height: 250px;
}

.btns {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.568);
  z-index: 1;
}

.btns img{
  max-width: 50%;
  max-height: 50%;
}

.btns .left {
  position: absolute;
  left: 10px;
}

.btns .right {
  position: absolute;
  right: 20px;
}

.items-wrapper {
  width: 100%;
  height: 256px;
  display: flex;
  position: absolute;
  top: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.item-wrapper {
  min-width: 200px;
  height: 250px;
  padding: 10px;
  margin: 0 10px;
  flex-direction: column;
  background-color: aliceblue;
}

.img{
  width: 180px;
  height: 150px;
  margin-bottom: 10px;
  background-color: white;
}

.name{
  width: 180px;
  height: 40px;
  margin-bottom: 10px;
  font-weight: 500;
}

@media only screen and (max-width: 991px) {
  .items-wrapper {
    overflow: auto;
  }
}

</style>
