<template>
    <div>
        <BuyNSell v-if="buyNSellIsVisible" @isVisible="getVisible" />
        <CarsNVehicles v-if="carsNVehiclesIsVisible" @isVisible="getVisible" />
        <Community v-if="communityIsVisible" @isVisible="getVisible" />
        <Jobs v-if="jobsIsVisible" @isVisible="getVisible" />
        <Pets v-if="petsIsVisible" @isVisible="getVisible" />
        <RealEstate v-if="realEstateisVIsible" @isVisible="getVisible" />
        <Services v-if="servicesIsVisible" @isVisible="getVisible" />
        <VacationRentals v-if="vacationRentalsIsVisible" @isVisible="getVisible" />
        <div class="main">
            <div class="pc-v dis-fl jus-con-sp-bt al-it-cen">
                <button class="pad-mar-no f-sz-sm" v-for="(item, index) in items" :key="index"
                    @click="openFilterOptions(index)" :id="'fil-btn-'+index+''">{{ item.name }}</button>
            </div>
            <div class="mob-v">
                <button class="pad-mar-no dis-fl al-it-cen" v-for="(item, index) in items" :key="index"
                    @click="openFilterOptions(index)">
                    <div class="img-box dis-fl jus-con-cen al-it-cen">
                        <img :src="require('../assets/icons/filters/' + item.image + '')" alt="">
                    </div>
                    <div class="fil-n f-sz-sm dis-fl jus-con-cen al-it-cen">
                        <p class="pad-mar-no">{{ item.name }}</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import BuyNSell from './filter-categoriels/buyNSell-com.vue'
import CarsNVehicles from './filter-categoriels/carsNVehicles-com.vue'
import Community from './filter-categoriels/community-com.vue'
import Jobs from './filter-categoriels/jobs-com.vue'
import Pets from './filter-categoriels/pets-com.vue'
import RealEstate from './filter-categoriels/realEstate-com.vue'
import Services from './filter-categoriels/services-com.vue'
import VacationRentals from './filter-categoriels/vacationRentals-com.vue'

export default {
    data() {
        return {
            oldIndex: null,
            items: [
                { name: 'Buy & Sell', image: 'pet_col.png' },
                { name: 'Cars & Vehicles', image: 'pet_col.png' },
                { name: 'Real Estate', image: 'pet_col.png' },
                { name: 'Jobs', image: 'pet_col.png' },
                { name: 'Services', image: 'pet_col.png' },
                { name: 'Pets', image: 'pet_col.png' },
                { name: 'Community', image: 'pet_col.png' },
                { name: 'Vacation Rentals', image: 'pet_col.png' },
            ],
            buyNSellIsVisible: false,
            carsNVehiclesIsVisible: false,
            realEstateisVIsible: false,
            jobsIsVisible: false,
            servicesIsVisible: false,
            petsIsVisible: false,
            communityIsVisible: false,
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
        openFilterOptions(index) {
            switch (index) {
                case 0:
                    this.buyNSellIsVisible = !this.buyNSellIsVisible;
                    this.carsNVehiclesIsVisible = false;
                    this.realEstateisVIsible = false;
                    this.jobsIsVisible = false;
                    this.servicesIsVisible = false;
                    this.petsIsVisible = false;
                    this.communityIsVisible = false;
                    this.vacationRentalsIsVisible = false;
                    break;
                case 1:
                    this.buyNSellIsVisible = false;
                    this.carsNVehiclesIsVisible = !this.carsNVehiclesIsVisible;
                    this.realEstateisVIsible = false;
                    this.jobsIsVisible = false;
                    this.servicesIsVisible = false;
                    this.petsIsVisible = false;
                    this.communityIsVisible = false;
                    this.vacationRentalsIsVisible = false;
                    break;
                case 2:
                    this.buyNSellIsVisible = false;
                    this.carsNVehiclesIsVisible = false;
                    this.realEstateisVIsible = !this.realEstateisVIsible;
                    this.jobsIsVisible = false;
                    this.servicesIsVisible = false;
                    this.petsIsVisible = false;
                    this.communityIsVisible = false;
                    this.vacationRentalsIsVisible = false;
                    break;
                case 3:
                    this.buyNSellIsVisible = false;
                    this.carsNVehiclesIsVisible = false;
                    this.realEstateisVIsible = false;
                    this.jobsIsVisible = !this.jobsIsVisible;
                    this.servicesIsVisible = false;
                    this.petsIsVisible = false;
                    this.communityIsVisible = false;
                    this.vacationRentalsIsVisible = false;
                    break;
                case 4:
                    this.buyNSellIsVisible = false;
                    this.carsNVehiclesIsVisible = false;
                    this.realEstateisVIsible = false;
                    this.jobsIsVisible = false;
                    this.servicesIsVisible = !this.servicesIsVisible;
                    this.petsIsVisible = false;
                    this.communityIsVisible = false;
                    this.vacationRentalsIsVisible = false;
                    break;
                case 5:
                    this.buyNSellIsVisible = false;
                    this.carsNVehiclesIsVisible = false;
                    this.realEstateisVIsible = false;
                    this.jobsIsVisible = false;
                    this.servicesIsVisible = false;
                    this.petsIsVisible = !this.petsIsVisible;
                    this.communityIsVisible = false;
                    this.vacationRentalsIsVisible = false;
                    break;
                case 6:
                    this.buyNSellIsVisible = false;
                    this.carsNVehiclesIsVisible = false;
                    this.realEstateisVIsible = false;
                    this.jobsIsVisible = false;
                    this.servicesIsVisible = false;
                    this.petsIsVisible = false;
                    this.communityIsVisible = !this.communityIsVisible;
                    this.vacationRentalsIsVisible = false;
                    break;
                case 7:
                    this.buyNSellIsVisible = false;
                    this.carsNVehiclesIsVisible = false;
                    this.realEstateisVIsible = false;
                    this.jobsIsVisible = false;
                    this.servicesIsVisible = false;
                    this.petsIsVisible = false;
                    this.communityIsVisible = false;
                    this.vacationRentalsIsVisible = !this.vacationRentalsIsVisible;
                    break;
                default:
                    return;
            }
        },

        getVisible(value) {
            this.buyNSellIsVisible = value;
        }
    }
}
</script>

<style scoped>
img {
    max-width: 50%;
    max-height: 50%;
}

.main {
    padding: 0 50px;
}

.pc-v {
    width: 870px;
    height: 40px;
}

.pc-v button {
    border: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    font-weight: 500;
    transition: .4s;
}

.pc-v button:hover , .pc-v button:focus {
    border-bottom: 2px solid #D2042D;
}

.mob-v {
    display: none;
}

@media only screen and (max-width: 991px) {

    .main {
        padding: 0;
    }

    .pc-v {
        display: none;
    }

    .mob-v {
        width: 100%;
        padding: 10px 0;
        display: flex;
        align-items: center;
        overflow-x: auto;
    }

    .mob-v::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .mob-v button {
        min-width: 100px;
        height: 100px;
        margin-right: 10px;
        border: none;
        flex-direction: column;
        justify-content: flex-start;
        background-color: transparent;
    }

    .img-box {
        min-width: 50px;
        min-height: 50px;
        margin-bottom: 5px;
        border-radius: 50%;
        background-color: #d2042d11;
    }

    .fil-n {
        width: 100%;
        height: 33px;
        font-weight: 500;
    }
}
</style>