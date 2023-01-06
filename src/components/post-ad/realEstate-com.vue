<template>
    <div>
        <div class="filter-popup-box dis-fl jus-con-cen container-xxl">
            <div class="filter-popup-wrapper">
                <div class="category-wrapper dis-fl">
                    <div class="main-category">
                        <h5>Real Estate</h5>
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
                        <h5 class="pad-mar-no">Real Estate</h5>
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
                            <p class="pad-mar-no">Back to Real Estate</p>
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
                { name: 'For Rent', hasSub: true, id: 'forRent' },
                { name: 'For Sale', hasSub: true, id: 'forSale' },
                { name: 'Real Estate Services', hasSub: false, link: '/post-ad/Real Estate/Real Estate Services', title: true },
            ],

            forRent: [
                { name: 'Long Term Rentals', link: '/post-ad/Real Estate/For Rent - Long Term Rentals', title: true },
                { name: 'Short Term Rentals', link: '/post-ad/Real Estate/For Rent - Short Term Rentals', title: true },
                { name: 'Room Rentals & Roommates', link: '/post-ad/Real Estate/For Rent - Room Rentals & Roommates', bedRooms: true, bathRooms: true, size: true, address: true, title: true },
                { name: 'Storage & Parking for Rent', link: '/post-ad/Real Estate/For Rent - Storage & Parking for Rent', size: true, title: true, address: true },
                { name: 'Commercial & Office Space for Rent', link: '/post-ad/Real Estate/For Rent - Commercial & Office Space for Rent', size: true, title: true, address: true },
            ],

            forSale: [
                { name: 'Houses for Sale', link: '/post-ad/Real Estate/For Sale - Houses for Sale', bedRooms: true, bathRooms: true, houseSize: true, address: true, title: true },
                { name: 'Land for Sale', link: '/Real Estate/For Sale - Land for Sale', address: true, title: true, landSize: true },
                { name: 'Commercial & Office Space for Sale', link: '/Real Estate/For Sale - Commercial & Office Space for Sale', size: true, title: true, address: true },
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
                    case 'forRent':
                        this.displaySub = this.forRent;
                        break;
                    case 'forSale':
                        this.displaySub = this.forSale;
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