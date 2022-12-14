<template>
  <div>
    <div class="main res-py dis-fl jus-con-sp-bt container-xxl">
      <div class="le dis-fl">
        <div class="logo-box">
          <a href="/">
            <img class="img-fit" src="../assets/test/logo.png" alt="" />
          </a>
        </div>
        <div class="search-location-full-dis dis-fl">
          <div class="srch-wrapper dis-fl al-it-cen">
            <div class="icn-srch dis-fl">
              <img src="../assets/icons/search.png" alt="" />
            </div>
            <input class="inp-srch" type="text" name="" id="" placeholder="Search" />
            <div style="width: 1px; height: 70%; background-color: rgba(0, 0, 0, 0.288);"></div>
            <div class="filter-wrapper">
              <button @click="(isFilterVisible = !isFilterVisible)" class="btn-srch-filter f-sz-sm dis-fl al-it-cen">
                <img class="icn-filter" :src="require('../assets/icons/filters/' + selectedFilterImg + '')" alt="" />
                <p class="pad-mar-no">{{ selectedFilter }}</p>
                <img :class="(isFilterVisible === true ? 'icn-expand-tr' : 'icn-expand-fl')"
                  src="../assets/icons/expand.png" alt="" />
              </button>
              <transition name="dropdown-trans">
                <div v-if="isFilterVisible" class="filter-items">
                  <button v-for="(item, index) in filters" :key="index" @click="filterSelect(index)"
                    class="dis-fl f-sz-sm dis-fl al-it-cen">
                    <img class="btn-icn-filter" :src="require('../assets/icons/filters/' + item.image + '')" alt="" />
                    <p class="pad-mar-no">{{ item.name }}</p>
                  </button>
                </div>
              </transition>
            </div>
            <button class="btn-srch f-sz-sm">Search</button>
          </div>
          <div class="location-btn-wrapper">
            <button @click="isLocationvisible = !isLocationvisible"
              class="btn-location f-sz-sm dis-fl al-it-cen jus-con-cen">
              <img class="icn-location" src="../assets/icons/location.png" alt="" />
              <p class="pad-mar-no">{{ selectedLocation }}</p>
            </button>
            <transition name="dropdown-trans">
              <div v-if="isLocationvisible" v-click- class="locations dis-fl">
                <div class="locations-wrapper">
                  <button v-for="(item, index) in locations" :key="index" @click="locationSelect(index)"
                  class="f-sz-sm pad-mar-no">
                  {{ item }}
                </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="ri dis-fl jus-con-sp-bt al-it-cen">
        <div class="dis-fl">
          <div class="register-hide dis-fl">
            <a class="a-log-reg a-txt-dec-no" href="">Register</a>
            <p class="pad-mar-no">&nbsp;or&nbsp;</p>
          </div>
          <a class="a-log-reg a-txt-dec-no" href="">Sign In</a>
        </div>
        <div>
          <a class="a-post-ad a-txt-dec-no col-theme trans-low" href="">Post ad</a>
        </div>
      </div>

    </div>
    <!--  -->
    <div class="search-location-max-width-1200 res-py dis-fl jus-con-sp-bt">
      <div class="srch-wrapper dis-fl al-it-cen">
        <div class="icn-srch dis-fl">
          <img src="../assets/icons/search.png" alt="" />
        </div>
        <input class="inp-srch" type="text" name="" id="" placeholder="Search" />
        <div style="width: 1px; height: 70%; background-color: rgba(0, 0, 0, 0.288);"></div>
        <div class="filter-wrapper">
          <button @click="(isFilterVisible = !isFilterVisible)" class="btn-srch-filter f-sz-sm dis-fl al-it-cen">
            <img class="icn-filter" :src="require('../assets/icons/filters/' + selectedFilterImg + '')" alt="" />
            <p class="select-filter-name pad-mar-no">{{ selectedFilter }}</p>
            <img :class="(isFilterVisible === true ? 'icn-expand-tr' : 'icn-expand-fl')"
              src="../assets/icons/expand.png" alt="" />
          </button>
          <transition name="dropdown-trans">
            <div v-if="isFilterVisible" class="filter-items">
              <button v-for="(item, index) in filters" :key="index" @click="filterSelect(index)"
                class="dis-fl f-sz-sm dis-fl al-it-cen">
                <img class="btn-icn-filter" :src="require('../assets/icons/filters/' + item.image + '')" alt="" />
                <p class="pad-mar-no">{{ item.name }}</p>
              </button>
            </div>
          </transition>
        </div>
        <button class="btn-srch f-sz-sm">Search</button>
        <button class="btn-srch-icon pad-mar-no">
          <img class="img-fit" src="../assets/icons/search.png" alt="">
        </button>
      </div>
      <div class="location-btn-wrapper dis-fl">
        <button @click="isLocationvisible = !isLocationvisible"
          class="btn-location f-sz-sm dis-fl al-it-cen jus-con-cen">
          <img class="icn-location" src="../assets/icons/location.png" alt="" />
          <p class="pad-mar-no">{{ selectedLocation }}</p>
        </button>
        <transition name="dropdown-trans">
          <div v-if="isLocationvisible" v-click- class="locations dis-fl">
            <div class="locations-wrapper">
                  <button v-for="(item, index) in locations" :key="index" @click="locationSelect(index)"
                  class="f-sz-sm pad-mar-no">
                  {{ item }}
                </button>
                </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- <div class="filter">
      <Filter />
    </div> -->
  </div>
</template>

<script>
// import Filter from "../components/filter-com.vue";
export default {
  data() {
    return {
      isLocationvisible: false,
      selectedLocation: "All of Sri Lanka",
      locations: [
        "All of Sri Lanka",
        "Colombo",
        "Kandy",
        "Galle",
        "Ampara",
        "Anuradhapura",
        "Badulla",
        "Batticaloa",
        "Gampaha",
        "Hambantota",
        "Jaffna",
        "Kalutara",
        "Kegalle",
        "Kilinochchi",
        "Kurunegala",
        "Manner",
        "Matale",
        "Matara",
        "Monaragala",
        "Mullativu",
        "Nuwara Eliya",
        "Polonnaruwa",
        "Puttalam",
        "Ratnapura",
        "Trincomalee",
        "Vavunia",
      ],

      isFilterVisible: false,
      selectedFilter: 'All Categoriels',
      selectedFilterImg: 'pet.png',
      filters: [
        { name: 'All Categories', image: 'pet.png' },
        { name: 'Buy & Sell', image: 'pet.png' },
        { name: 'Cars & Vehicles', image: 'pet.png' },
        { name: 'Real Estate', image: 'pet.png' },
        { name: 'Jobs', image: 'pet.png' },
        { name: 'Services', image: 'pet.png' },
        { name: 'Pets', image: 'pet.png' },
        { name: 'Community', image: 'pet.png' },
        { name: 'Vacation Rentals', image: 'pet.png' },
      ],
    };
  },

  components: {
    // Filter,
  },

  mounted() {
    this.getSelectedLocation();
  },

  methods: {

    getSelectedLocation() {
      if (localStorage.getItem("selectedLocation") === null) {
        localStorage.setItem("selectedLocation", "All ofSri Lanka");
      } else {
        if (localStorage.getItem("selectedLocation") == "") {
          localStorage.setItem("selectedLocation", "All ofSri Lanka");
        }
      }
      this.selectedLocation = localStorage.getItem("selectedLocation");
    },

    locationSelect(index) {
      this.selectedLocation = this.locations[index];
      localStorage.setItem("selectedLocation", this.selectedLocation);
      this.isLocationvisible = false;
    },

    filterSelect(index) {
      this.selectedFilter = this.filters[index].name;
      this.selectedFilterImg = this.filters[index].image;
      this.isFilterVisible = false;
    },
  },
};
</script>

<style scoped>

.icn-filter {
  width: 15px;
  height: 15px;
}

.btn-icn-filter {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.icn-expand-tr {
  width: 15px;
  height: 8px;
  transition: .2s;
  transform: rotate(-180deg);
}

.icn-expand-fl {
  width: 15px;
  height: 8px;
  transition: .2s;
  transform: rotate(0deg);
}

.icn-location {
  width: 15px;
  height: 20px;
  margin-right: 10px;
}

.main {
  padding-top: 10px;
  padding-bottom: 10px;
}

.le {
  width: 75%;
}

.ri {
  width: 250px;
}

.logo-box {
  min-width: 100px;
  height: 30px;
  margin-right: 30px;
}

.a-log-reg {
  font-weight: 500;
}

.a-post-ad {
  font-weight: 500;
  padding: 9px 10px;
  border-radius: 5px;
  color: white;
}

.a-post-ad:hover {
  box-shadow: 0px 1px 10px rgba(145, 0, 0, 0.267);
}

.srch-wrapper {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.288);
  border-radius: 5px;
}

.icn-srch {
  min-width: 30px;
  height: 100%;
  padding-bottom: 10px;
  padding-right: 5px;
  justify-content: flex-end;
  align-items: flex-end;
}

.icn-srch img {
  max-width: 60%;
  max-height: 60%;
}

.inp-srch {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

.btn-srch-filter {
  min-width: 170px;
  height: 38px;
  font-weight: 500;
  justify-content: space-evenly;
  border: none;
  background-color: transparent;
}

.btn-srch {
  min-width: 100px;
  height: 100%;
  font-weight: 500;
  border: none;
  background-color: transparent;
  border-left: 1px solid rgba(0, 0, 0, 0.288);
}

.location-btn-wrapper {
  min-width: 130px;
  margin-left: 30px;
  position: relative;
}

.btn-location {
  height: 100%;
  font-weight: 500;
  border: none;
  background-color: transparent;
}

.locations {
  width: 130px;
  height: 300px;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  z-index: 2;
  background-color: red;
}

.locations-wrapper{
  overflow: auto;
  background-color: rgb(241, 241, 241);
}

.locations-wrapper::-webkit-scrollbar{
  width: 5px;
}

.locations-wrapper::-webkit-scrollbar-thumb{
  background: rgba(0, 0, 0, 0.137);
  border-radius: 10px;
}

.locations-wrapper::-webkit-scrollbar-thumb:hover{
  background: rgba(0, 0, 0, 0.212);
}

.locations-wrapper button {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-top: 1px solid white;
  background-color: transparent;
}

.filter-wrapper {
  position: relative;
}

.filter-items {
  width: 100%;
  position: absolute;
  top: 38px;
  background-color: rgb(250, 250, 250);
  z-index: 2;
}

.filter-items button {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  border-top: 1px solid white;
  background-color: transparent;
}

.search-location-max-width-1200 {
  display: none;
}

@media only screen and (max-width: 1200px) {

  .search-location-full-dis {
    display: none;
  }

  .location-btn-wrapper {
    justify-content: flex-end;
  }

  .search-location-max-width-1200 {
    display: flex;
  }

  .locations{
    top: 40px;
  }

  .btn-srch-icon{
    display: none;
  }
}

/* @media only screen and (max-width: 991px) {
  .filter{
    padding: 0;
  }
} */

@media only screen and (max-width: 767px) {
  .register-hide , .select-filter-name , .icn-srch{
    display: none;
  }

  .ri{
    justify-content: flex-end;
  }

  .a-post-ad{
    margin-left: 20px;
  }

  .search-location-max-width-1200{
    flex-direction: column;
  }

  .location-btn-wrapper{
    margin: 10px 0;
    justify-content: flex-start;
  }

  .btn-srch{
    display: none;
  }

  .btn-srch-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;
    border: none;
  }

  .btn-srch-icon img{
    max-width: 50%;
    max-height: 50%;
  }

  .btn-srch-filter{
    min-width: 50px;
    justify-content: space-between;
    padding: 0 8px 0 0;
  }

  .icn-expand-tr , .icn-expand-fl{
    width: 10px;
    height: 6px;
  }

  .icn-filter{
    width: 20px;
    height: 20px;
  }

  .filter-items{
    width: 130px;
    right: 0px;
  }

  .inp-srch{
    padding-left: 10px;
  }

  .locations{
    top: 30px;
  }
}

</style>
