<template>
    <div>
        <div class="pop-up" v-if="popUpIsVisible">
            <button class="btn-close" @click="popUpClose()"></button>
            <BuyNSell v-if="buySellIsVisible" @isVisible="getVisible" />
            <CarsNVehicles v-if="carsVehiclesIsVisible" @isVisible="getVisible" />
            <Community v-if="communityIsVisible" @isVisible="getVisible" />
            <Jobs v-if="jobsIsVisible" @isVisible="getVisible" />
            <Pets v-if="petsIsVisible" @isVisible="getVisible" />
            <RealEstate v-if="realEstateIsVisible" @isVisible="getVisible" />
            <Services v-if="servicesIsVisible" @isVisible="getVisible" />
            <VacationRentals v-if="vacationRentalsIsVisible" @isVisible="getVisible" />
        </div>
        <div class="main res-py container-xxl">
            <div class="top dis-fl jus-con-sp-bt al-it-cen">
                <div class="logo-box">
                    <router-link to="/">
                        <img class="img-fit" src="../assets/test/logo.png" alt="" />
                    </router-link>
                </div>
                <!-- <p class="pad-mar-no">Post Ad</p> -->
                <button class="btn-close" @click="this.$router.push('/')"></button>
            </div>
            <div class="content">
                <h1 class="title">Welcome Pathum Madusanka! Let's post an ad</h1>
                <p class="sub-title">Choose suitable option below</p>
                <div class="list-wrp dis-fl jus-con-sp-bt">
                    <div class="list-box">
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="buySellIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Buy & Sell</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="carsVehiclesIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Cars & Vehicles</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="realEstateIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Real Estate</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                        <button class="item-hide pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="communityIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Community</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                    </div>
                    <div class="list-box">
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="jobsIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Jobs</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="servicesIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Services</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="petsIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Pets</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                        <button class="item-hide pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="vacationRentalsIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Vacation Rentals</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                    </div>
                    <div class="list-box list-box-hide">
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="communityIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Community</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            @click="vacationRentalsIsVisible = true; popUpIsVisible = true;">
                            <p class="pad-mar-no">Vacation Rentals</p>
                            <img src="../assets/icons/forward-black.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BuyNSell from '../components/post-ad/buyNSell-com.vue'
import CarsNVehicles from '../components/post-ad/carsNVehicles-com.vue'
import Community from '../components/post-ad/community-com.vue'
import Jobs from '../components/post-ad/jobs-com.vue'
import Pets from '../components/post-ad/pets-com.vue'
import RealEstate from '../components/post-ad/realEstate-com.vue'
import Services from '../components/post-ad/services-com.vue'
import VacationRentals from '../components/post-ad/vacationRentals-com.vue'

export default {

    data() {
        return {
            popUpIsVisible: false,
            carsVehiclesIsVisible: false,
            communityIsVisible: false,
            jobsIsVisible: false,
            petsIsVisible: false,
            realEstateIsVisible: false,
            servicesIsVisible: false,
            vacationRentalsIsVisible: false,
        }
    },

    components: {
        BuyNSell,
        CarsNVehicles,
        Community,
        Jobs,
        Pets,
        RealEstate,
        Services,
        VacationRentals,
    },

    methods: {
        getVisible(value) {
            this.popUpIsVisible = value;
            this.buySellIsVisible = value;
            this.carsNVehiclesIsVisible = value;
            this.realEstateisVIsible = value;
            this.jobsIsVisible = value;
            this.petsIsVisible = value;
            this.servicesIsVisible = value;
            this.communityIsVisible = value;
            this.vacationRentalsIsVisible = value;
        },

        popUpClose() {
            this.popUpIsVisible = false;
            this.carsNVehiclesIsVisible = false;
            this.realEstateisVIsible = false;
            this.jobsIsVisible = false;
            this.petsIsVisible = false;
            this.servicesIsVisible = false;
            this.communityIsVisible = false;
            this.vacationRentalsIsVisible = false;
            this.buySellIsVisible = false;
        }
    }
}
</script>

<style scoped>
.item-hide {
    display: none;
}

.top {
    padding: 10px 0;
}

.top p {
    font-size: 18px;
    font-weight: 500;
}

.logo-box {
    height: 30px;
}

.content {
    min-height: 70vh;
    padding-top: 30px;
    background-color: rgba(0, 0, 0, 0.041);
}

.title {
    text-align: center;
    font-size: 20px;
}

.sub-title {
    text-align: center;
}

.list-wrp {
    width: 1000px;
    margin: 0 auto;
    margin-top: 100px;
}

.list-box {
    width: 200px;
}

.list-wrp .list-box button {
    width: 100%;
    margin-bottom: 10px;
    border: none;
    background-color: transparent;
}

.list-wrp .list-box button:hover {
    color: grey;
}

.list-wrp .list-box button img {
    width: 15px;
}

.pop-up {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.288);
    backdrop-filter: blur(3px);
    z-index: 1;
}

.pop-up button {
    position: absolute;
    top: 60px;
    right: 60px;
}

@media only screen and (max-width: 1200px) {
    .list-wrp {
        width: 800px;
    }
}

@media only screen and (max-width: 991px) {

    .list-wrp {
        width: 100%;
    }

    .list-box-hide {
        display: none;
    }

    .item-hide {
        display: flex;
    }
}

@media only screen and (max-width: 500px) {
    .list-wrp {
        margin-top: 50px;
        display: block;
    }

    .list-box {
        width: 100%;
    }

    .content {
        padding-bottom: 30px;
    }

    .list-wrp .list-box button {
        margin-bottom: 20px;
    }
}
</style>