<template>
    <div>
        <div class="filter-popup-box dis-fl jus-con-cen container-xxl">
            <div class="filter-popup-wrapper">
                <div class="category-wrapper dis-fl">
                    <div class="main-category">
                        <h5>Cars & Vehicles</h5>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            v-for="(category, index) in categories" :key="index" @click="CategorySelect(index)">
                            <p class="pad-mar-no">{{ category.name }}</p>
                            <img :class="category.hasSub ? 'icn-fo-arr' : 'icn-fo-arr-hide'"
                                src="../../assets/icons/forward-black.png" alt="">
                        </button><br>
                    </div>
                    <div class="sub-category">
                        <button class="a-txt-dec-no" v-for="(item, index) in displaySub" :key="index" @click="subCategorySelect(index)">{{ item.name
                        }}</button>
                        <div class="sub-cat-bg-img-box dis-fl">
                            <img class="img-fit" src="../../assets/test/house.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter-popup-mob">
            <transition name="main-cat-trans">
                <div v-if="mainCatIsVisible" class="main-category-mob">
                    <div class="dis-fl jus-con-sp-bt al-it-cen">
                        <h5 class="pad-mar-no">Cars & Vehicles</h5>
                        <button class="btn-close" @click="mainClose()"></button>
                    </div>
                    <button class="btn-mob-cat pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                        v-for="(category, index) in categories" :key="index" @click="CategorySelect(index)">
                        <p class="pad-mar-no">{{ category.name }}</p>
                        <img :class="category.hasSub ? 'icn-fo-arr' : 'icn-fo-arr-hide'"
                            src="../../assets/icons/forward-black.png" alt="">
                    </button>
                </div>
            </transition>
            <transition name="sub-cat-trans">
                <div v-if="subCatIsVisible" class="sub-category-mob">
                    <div class="top dis-fl jus-con-sp-bt al-it-cen">
                        <button class="btn-back pad-mar-no dis-fl al-it-cen" @click="subClose()">
                            <img src="../../assets/icons/backward_theme.png" alt="">
                            <p class="pad-mar-no">Back to Cars & Vehicles</p>
                        </button>
                        <button class="btn-close" @click="mainClose()"></button>
                    </div>
                    <div class="bot dis-fl">
                        <p class="selected-cat"> {{ selectedCat }} </p>
                        <!-- <a href="" class="a-txt-dec-no">See All in Audio</a> -->
                        <button class="dis-fl jus-con-sp-bt" v-for="(item, index) in displaySub" :key="index">
                            <p class="pad-mar-no">{{ item.name }}</p>
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            mainCatIsVisible: true,
            subCatIsVisible: false,
            selectedCat: '',
            displaySub: [],
            categories: [
                { name: 'Cars', hasSub: false, link: '/post-ad/Cars & Vehicles/Cars', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true  },
                { name: 'Three Wheelers', hasSub: false, link: '/post-ad/Cars & Vehicles/Three Wheelers', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Vans', hasSub: false, link: '/post-ad/Cars & Vehicles/Vans', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Lorries', hasSub: false, link: '/post-ad/Cars & Vehicles/Lorries', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Auto Accessories', hasSub: true, id: 'vehicleParts', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Automotive Services', hasSub: true, id: 'services', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Motorbikes', hasSub: false, link: '/post-ad/Cars & Vehicles/Motorbikes', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Bicycles', hasSub: false, link: '/post-ad/Cars & Vehicles/Bicycles', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Boats & Watercraft', hasSub: false, link: '/post-ad/Cars & Vehicles/Boats & Watercraft', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Rentals', hasSub: false, link: '/post-ad/Cars & Vehicles/Rentals', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Buses', hasSub: false, link: '/post-ad/Cars & Vehicles/Buses', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'RVs, Campers & Trailers', hasSub: false, link: '/post-ad/Cars & Vehicles/RVs, Campers & Trailers', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Heavy Equipments', hasSub: true, id: 'heavy', conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
                { name: 'Other', hasSub: false, link: '/post-ad/Cars & Vehicles/Other',conditionRe: true, brand: true, model: true, edition: true, yearOfManufacture: true, mileage: true, engineCapacity: true, fuelType: true, transmission: true },
            ],

            vehicleParts: [
                { name: 'Audio & GPS', link: '/post-ad/Cars & Vehicles/Vehicle Parts - Audio & GPS', title: true, conditionRe: true },
                { name: 'Auto Body Parts', link: '/post-ad/Cars & Vehicles/Vehicle Parts - Auto Body Parts', title: true, conditionRe: true },
                { name: 'Engine & Engine Parts', link: '/post-ad/Cars & Vehicles/Vehicle Parts - Engine & Engine Parts', title: true, conditionRe: true },
                { name: 'Tires & Rims', link: '/post-ad/Cars & Vehicles/Vehicle Parts - Tires & Rims', title: true, conditionRe: true },
                { name: 'Other Parts & Accessories', link: '/post-ad/Cars & Vehicles/Vehicle Parts - Other Parts & Accessories', title: true, conditionRe: true },
            ],

            services: [
                { name: 'Auto Insurance & Financing', link: '/post-ad/Cars & Vehicles/Services - Auto Insurance & Financing', title: true },
                { name: 'Detailing & Cleaning', link: '/post-ad/Cars & Vehicles/Services - Detailing & Cleaning', title: true },
                { name: 'Repairs & Maintenance', link: '/post-ad/Cars & Vehicles/Services - Repairs & Maintenance', title: true },
                { name: 'Towing & Scrap Removal', link: '/post-ad/Cars & Vehicles/Services - Towing & Scrap Removal', title: true },
                { name: 'Other', link: '/post-ad/Cars & Vehicles/Services - Other', title: true },
            ],

            heavy: [
                { name: 'Farming Equipment', link: '/post-ad/Cars & Vehicles/Heavy - Farming Equipment', title: true, conditionRe:true  },
                { name: 'Heavy Equipment', link: '/post-ad/Cars & Vehicles/Heavy - Heavy Equipment', title: true, conditionRe:true },
                { name: 'Heavy Trucks', link: '/post-ad/Cars & Vehicles/Heavy - Heavy Trucks', brand: true, model: true, edition: true, conditionRe: true, title: true },
                { name: 'Other', link: '/post-ad/Cars & Vehicles/Heavy - Other', title: true, conditionRe:true },
            ],
        }
    },

    methods: {
        mainClose() {
            this.$emit('isVisible', false);
        },

        subClose() {
            this.subCatIsVisible = false;
            this.mainCatIsVisible = true;
        },

        CategorySelect(index) {
            if (this.categories[index].hasSub === true) {
                switch (this.categories[index].id) {
                    case 'vehicleParts':
                        this.displaySub = this.vehicleParts;
                        break;
                    case 'services':
                        this.displaySub = this.services;
                        break;
                    case 'heavy':
                        this.displaySub = this.heavy;
                        break;
                    default:
                        return;
                }
                this.mainCatIsVisible = false;
                this.subCatIsVisible = true;
                this.selectedCat = this.categories[index].name;
            } else {
                this.$router.push({ path: this.categories[index].link, query: this.categories[index] });
            }
        },

        subCategorySelect(index){
            this.$router.push({ path: this.displaySub[index].link, query: this.displaySub[index] });
        }
    },

}

</script>

<style scoped>

.selected-cat{
    font-weight: bold;
    font-size: 20px;
}

.icn-fo-arr {
    width: 10px;
    height: 15px;
}

.icn-fo-arr-hide {
    display: none;
}

.filter-popup-box {
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 100px;
    z-index: 2;
}

.category-wrapper {
    height: 100%;
    padding: 20px;
    padding-right: 0;
}

.filter-popup-wrapper {
    width: 100%;
    height: 100%;
    margin: 0 50px;
    background-color: white;
}

.filter-popup-mob {
    display: none;
}

.main-category {
    width: 300px;
    height: 100%;
    overflow: auto;
}

.main-category::-webkit-scrollbar {
    width: 6px;
}

.main-category::-webkit-scrollbar-track {
    border-radius: 10px;
}

.main-category::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.315);
    border-radius: 10px;
}

.main-category::-webkit-scrollbar-thumb:hover {
    background: rgba(128, 128, 128, 0.493);
}

.main-category button,
.btn-mob-cat,
.sub-category-mob .bot button {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.050);
    background-color: transparent;
}

.sub-category {
    width: 100%;
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
}

.sub-category button {
    margin: 8px 0;
    color: black;
    z-index: 1;
    border: none;
    background-color: transparent;
}

.sub-cat-bg-img-box {
    height: 100%;
    opacity: .5;
    align-items: flex-end;
    position: absolute;
    right: 0;
}

@media only screen and (max-width: 1200px) {
    .filter-popup-box {
        top: 130px;
    }

    .sub-cat-bg-img-box {
        display: none;
    }
}

@media only screen and (max-width: 991px) {

    .filter-popup-box {
        display: none;
    }

    .filter-popup-mob {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 2;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.281);
        backdrop-filter: blur(2px);
    }

    .main-category-mob {
        width: 700px;
        margin: auto;
        padding: 20px 10px 50px 10px;
        display: flex;
        position: relative;
        flex-direction: column;
        background-color: white;
    }

    .sub-category-mob {
        width: 700px;
        margin: auto;
        display: flex;
        position: relative;
        flex-direction: column;
        background-color: white;
    }

    .sub-category-mob .top {
        padding: 15px 10px;
        background-color: #d2042d11;
    }

    .btn-back {
        border: none;
        background-color: transparent;
    }

    .btn-back img {
        width: 6px;
        height: 11px;
        margin-right: 5px;
    }

    .btn-back p {
        color: #D2042D;
    }

    .sub-category-mob .bot {
        padding: 20px 10px 50px 10px;
        flex-direction: column;
    }
}

@media only screen and (max-width: 767px) {

    .main-category-mob,
    .sub-category-mob {
        width: 100%;
    }
}
</style>