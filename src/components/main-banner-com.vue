<template>
  <swiper
  :spaceBetween="30"
  :loop="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <div class="banner-wrapper dis-fl jus-con-sp-bt">
            <div class="le dis-fl">
              <p class="header pad-mar-no">Up to 25% off</p>
              <a href="" class="a-txt-dec-no dis-fl al-it-cen trans-low">
                <p class="pad-mar-no">Buy it now</p>
                <img src="../assets/icons/arrow_right.png" alt="">
              </a>
            </div>
            <div class="ri dis-fl al-it-cen">
              <img class="" src="../assets/banners/main-banner-1.png" alt="">
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="banner-wrapper dis-fl jus-con-sp-bt">
            <div class="le dis-fl">
              <p class="header pad-mar-no">Up to 25% off</p>
              <a href="" class="a-txt-dec-no dis-fl al-it-cen trans-low">
                <p class="pad-mar-no">Buy it now</p>
                <img src="../assets/icons/arrow_right.png" alt="">
              </a>
            </div>
            <div class="ri dis-fl al-it-cen">
              <img class="" src="../assets/banners/main-banner-1.png" alt="">
            </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="banner-wrapper dis-fl jus-con-sp-bt">
            <div class="le dis-fl">
              <p class="header pad-mar-no">Up to 25% off</p>
              <a href="" class="a-txt-dec-no dis-fl al-it-cen trans-low">
                <p class="pad-mar-no">Buy it now</p>
                <img src="../assets/icons/arrow_right.png" alt="">
              </a>
            </div>
            <div class="ri dis-fl al-it-cen">
              <img class="" src="../assets/banners/main-banner-1.png" alt="">
            </div>
        </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
/* #app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.banner-wrapper{
    width: 100%;
    height: 300px;
    background-color: #ffc000;
}

.le{
  width: 50%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
}

.le .header{
  font-size: 40px;
  font-weight: 500;
}

.le a{
  margin-top: 20px;
  padding: 10px 5px;
  border: 2px solid black;
  color: black;
}

.le a img{
  width: 20px;
  height: 15px;
  margin-left: 10px;
}

.ri{
  width: 50%;
  height: 100%;
  justify-content: flex-end;
}

.ri img{
  max-height: 100%;
}

@media only screen and (max-width: 991px) {

  .banner-wrapper{
    height: 300px;
  }

  .banner-wrapper{
    flex-direction: column;
  }

  .le{
    width: 100%;
    height: 100px;
    padding: 5px 10px;
  }

  .le .header{
    font-size: 25px;
  }

  .le a{
    padding: 0;
    margin-top: 5px;
    border: none;
  }

  .ri{
    width: 100%;
    height: 200px;
    align-items: flex-end;
  }

  .ri img{
    max-width: 100%;
  }
}

</style>
