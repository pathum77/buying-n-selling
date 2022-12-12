<template>
  <div>
    <div class="main pad-mar-no container-xxl">
      <Navi />
      <div class="con-1">
        <MainBanner />
      </div>
      <div class="con-2 mar-bet-sec res-py">
        <DailyDeals />
      </div>
      <div class="con-3 dis-fl res-py">
        <div class="le-wrapper">
          <div class="mar-bet-sec" id="pop-1">
            <div class="pop-hd dis-fl jus-con-sp-bt al-it-cen">
              <h2 class="popular-head">Popular in Autos in Sri Lanka</h2>
              <router-link to="" class="pop-link a-txt-dec-no">Browse all Autos in Sri Lanka</router-link>
              <router-link to="" class="pop-link-mob a-txt-dec-no">Browse all</router-link>
            </div>
            <div class="row g-3">
              <div v-for="(item, index) in pop1" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-6">
                <router-link :to="'' + item.link">
                  <div>
                    <Pop>
                      <template v-slot:img>
                        <img :src="
                          require('../assets/home/pop1/' + item.image + '')
                        " alt="" />
                      </template>
                      <template v-slot:title>{{ item.name }}</template>
                    </Pop>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="ad-sm mar-bet-sec">
            <!-- small banner add goes here -->
            <AdSmall />
          </div>
          <div class="mar-bet-sec" id="pop-2">
            <div class="pop-hd dis-fl jus-con-sp-bt al-it-cen">
              <h2 class="popular-head">Popular Buy & Sell in Sri Lanka</h2>
              <router-link to="" class="pop-link a-txt-dec-no">Browse all Buy & Sell in Sri Lanka</router-link>
              <router-link to="" class="pop-link-mob a-txt-dec-no">Browse all</router-link>
            </div>
            <div class="row g-3">
              <div v-for="(item, index) in pop2" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-6">
                <router-link :to="'' + item.link">
                  <div>
                    <Pop>
                      <template v-slot:img>
                        <img :src="
                          require('../assets/home/pop1/' + item.image + '')
                        " alt="" />
                      </template>
                      <template v-slot:title>{{ item.name }}</template>
                    </Pop>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="sign-in-note col-theme dis-fl al-it-cen">
            <h5 class="text-center">^Kijiji's^ better when you're a member</h5>
            <p class="text-center">
              See more relevant listings, find what you're looking for quicker,
              and more!
            </p>
            <a class="a-txt-dec-no trans-low" href="">Sign In</a>
          </div>
          <div class="mar-bet-sec" id="pop-3">
            <div class="pop-hd dis-fl jus-con-sp-bt al-it-cen">
              <h2 class="popular-head">Popular Buy & Sell in Sri Lanka</h2>
              <router-link to="" class="pop-link a-txt-dec-no">Browse all Buy & Sell in Sri Lanka</router-link>
              <router-link to="" class="pop-link-mob a-txt-dec-no">Browse all</router-link>
            </div>
            <div class="row g-3">
              <div v-for="(item, index) in pop3" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-6">
                <router-link :to="'' + item.link">
                  <div>
                    <Pop>
                      <template v-slot:img>
                        <img :src="
                          require('../assets/home/pop1/' + item.image + '')
                        " alt="" />
                      </template>
                      <template v-slot:title>{{ item.name }}</template>
                    </Pop>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="ri-wrapper dis-fl">
          <div class="quick-links-wrapper">
            <h5 class="">Popular on ^Kijiji^</h5><br>
            <a href="" class="dis-fl jus-con-sp-bt al-it-cen a-txt-dec-no">
              <p class="pad-mar-no">Free Stuff</p>
              <img src="../assets/icons/forward-black.png" alt="">
            </a>
            <a href="" class="dis-fl jus-con-sp-bt al-it-cen a-txt-dec-no">
              <p class="pad-mar-no">Wanted Ads</p>
              <img src="../assets/icons/forward-black.png" alt="">
            </a>
            <a style="border: none" href="" class="dis-fl jus-con-sp-bt al-it-cen a-txt-dec-no">
              <p class="pad-mar-no">Swap / Trade</p>
              <img src="../assets/icons/forward-black.png" alt="">
            </a>
          </div>
          <div class="ri-ad-box">
            <AdRight />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navi from "../components/navigation-com.vue";
import Pop from "../components/popular-cards-com.vue";
import AdSmall from "../components/ad-small-com.vue";
import AdRight from "../components/ad-right-com.vue";
import DailyDeals from "../components/daily-deals-com.vue";
import MainBanner from "../components/main-banner-com.vue";

export default {
  data() {
    return {
      pop1: [
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
      ],
      pop2: [
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
      ],
      pop3: [
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
        { name: "Cars & Trucks", image: "gtr.jpg", link: "/" },
      ],
    };
  },

  components: {
    Navi,
    Pop,
    AdSmall,
    AdRight,
    DailyDeals,
    MainBanner,
  },
};
</script>

<style scoped>
.main {
  margin: 0 auto;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.le-wrapper {
  max-width: 100%;
}

.popular-head {
  font-size: 20px;
}

.sign-in-note {
  padding: 30px 20px;
  border-radius: 5px;
  flex-direction: column;
  color: white;
}

.sign-in-note a {
  padding: 15px 20px;
  border: 2px solid #d2042d;
  border-radius: 5px;
  font-weight: 500;
  color: #d2042d;
  background-color: white;
}

.sign-in-note a:hover {
  border: 2px solid white;
  color: white;
  background-color: #d2042d;
}

.ri-wrapper {
  min-width: 350px;
  flex-direction: column;
  align-items: flex-end;
}

.quick-links-wrapper {
  width: 300px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.010);
}

.quick-links-wrapper a {
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.050);
  /* color: black; */
}

.quick-links-wrapper a img {
  width: 12px;
  height: 13px;
}

.ri-ad-box {
  margin-top: 20px;
  position: sticky;
  top: 20px;
}

.pop-link-mob {
  display: none;
}

@media only screen and (max-width: 991px) {
  .con-3 {
    flex-direction: column;
  }

  .ri-wrapper {
    min-width: 0;
    width: 100%;
    margin-bottom: 50px;
    flex-direction: row;
    justify-content: space-between;
  }

  .quick-links-wrapper {
    width: 100%;
    margin-right: 20px;
  }

  .pop-hd {
    flex-direction: column;
    align-items: flex-start;
  }

  .pop-link {
    display: none;
  }

  .pop-link-mob {
    display: block;
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 600px) {
  .ri-wrapper {
    flex-direction: column;
    justify-content: center;
  }

  .ri-ad-box {
    width: 100%;
    position: relative;
  }

  .quick-links-wrapper {
    margin-right: 0;
  }
}
</style>
