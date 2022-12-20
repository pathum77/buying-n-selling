<template>
    <div>
        <div class="filter-popup-box dis-fl jus-con-cen">
            <div class="filter-popup-wrapper">
                <div class="category-wrapper dis-fl">
                    <div class="main-category">
                        <h5>Buy & Sell</h5>
                        <a class="a-txt-dec-no" href="">See All in Buy & Sell</a><br><br>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            v-for="(category, index) in categories" :key="index" @click="CategorySelect(index)">
                            <p class="pad-mar-no">{{ category.name }}</p>
                            <img :class="category.hasSub ? 'icn-fo-arr' : 'icn-fo-arr-hide'"
                                src="../../assets/icons/forward-black.png" alt="">
                        </button><br>
                    </div>
                    <div class="sub-category">
                        <a class="a-txt-dec-no" v-for="(item, index) in arts" :key="index" href="">{{ item.name }}</a>
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
                        <h5 class="pad-mar-no">Buy & Sell</h5>
                        <button class="btn-close" @click="mainClose()"></button>
                    </div>
                    <a class="f-sz-sm a-txt-dec-no" href="">See All in Buy & Sell</a><br>
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
                            <p class="pad-mar-no">Back to Buy & Sell</p>
                        </button>
                        <button class="btn-close" @click="mainClose()"></button>
                    </div>
                    <div class="bot dis-fl">
                        <h5>Audio</h5>
                        <a href="" class="a-txt-dec-no">See All in Audio</a>
                        <button class="dis-fl jus-con-sp-bt" v-for="(item, index) in arts" :key="index">
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
            categories: [
                { name: 'Arts & Collectibles', hasSub: false, link: '/' },
                { name: 'Audio', hasSub: true },
                { name: 'Baby Items', hasSub: true },
                { name: 'Bikes', hasSub: true },
                { name: 'Books', hasSub: true },
                { name: 'Business & Industrial', hasSub: true },
                { name: 'Cameras & Camcorders', hasSub: false, link: '/' },
                { name: 'CDs, DVDs & Blue-ray', hasSub: false, link: '/' },
                { name: 'Clothing', hasSub: true },
                { name: 'Computers', hasSub: true },
                { name: 'Computer Accessories', hasSub: true },
                { name: 'Electronics', hasSub: true },
                { name: 'Free Stuff', hasSub: false, link: '/' },
                { name: 'Furniture', hasSub: true },
                { name: 'Garage Sales', hasSub: false, link: '/' },
                { name: 'Health & Special Needs', hasSub: false, link: '/' },
                { name: 'Hobbies & Crafts', hasSub: false, link: '/' },
                { name: 'Home Appliences', hasSub: true },
                { name: 'Home - Indoor', hasSub: true },
                { name: 'Home -Outdoor & Garden', hasSub: true },
                { name: 'Home Renovation Materials', hasSub: true },
                { name: 'Jewellery & Watches', hasSub: false, link: '/' },
                { name: 'Musical Instruments', hasSub: true },
                { name: 'Phones', hasSub: true },
                { name: 'Sporting Goods & Exercise', hasSub: true },
                { name: 'Tickets', hasSub: false, link: '/' },
                { name: 'Tools', hasSub: true },
                { name: 'Toys & Games', hasSub: true },
                { name: 'TVs & Video', hasSub: true },
                { name: 'Video Games & Console', hasSub: true },
                { name: 'Other', hasSub: false, link: '/' },
            ],
            arts: [
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
                { name: 'Sub Category', link: '/' },
            ],

            audio: [
                { name: 'See All in Audio', link: '/' },
                { name: 'iPods & MP3s', link: '/' },
                { name: 'iPod & MP3 Accessories', link: '/' },
                { name: 'Headphones', link: '/' },
                { name: 'Speakers', link: '/' },
                { name: 'Stereo Systems & Home Theaters', link: '/' },
                { name: 'Other', link: '/' },
            ],

            babyItems: [
                { name: 'See All in Baby Items', link: '/' },
                { name: 'Bathing & Changing', link: '/' },
                { name: 'Clothing - Preemie', link: '/' },
                { name: 'Clothing - 0-3 Months', link: '/' },
                { name: 'Clothing - 3-6 Months', link: '/' },
                { name: 'Clothing - 6-9 Months', link: '/' },
                { name: 'Clothing - 9-12 Months', link: '/' },
                { name: 'Clothing - 12-18 Months', link: '/' },
                { name: 'Clothing - 18-24 Months', link: '/' },
                { name: 'Clothing - 2T', link: '/' },
                { name: 'Clothing - 3T', link: '/' },
                { name: 'Clothing - 4T', link: '/' },
                { name: 'Clothing - 5T', link: '/' },
                { name: 'Feeding & High Chairs', link: '/' },
                { name: 'Gates, Monitors & Safety', link: '/' },
                { name: 'Playpens, Swings Saucers', link: '/' },
                { name: 'Strollers, Careeiers & Car Seats', link: '/' },
                { name: 'Toys', link: '/' },
                { name: 'Multi Items', link: '/' },
                { name: 'Other', link: '/' },
            ],

            books: [
                { name: 'See All in Books', link: '/' },
                { name: 'Textbooks', link: '/' },
                { name: 'Magazines', link: '/' },
                { name: 'Children & Young Adult', link: '/' },
                { name: 'Comic & Graphic Novels', link: '/' },
                { name: 'Fiction', link: '/' },
                { name: 'Non-Fiction', link: '/' },
                { name: 'Other', link: '/' },
            ],

            BusinessIndustrial: [
                { name: 'See All in Business & Industrial', link: '/' },
                { name: 'Industrial Kitchen Supply', link: '/' },
                { name: 'Industrial Shelving & Racking', link: '/' },
                { name: 'Storage Containers', link: '/' },
                { name: 'Other Business Industrial', link: '/' },
            ],

            clothing: [
                { name: 'Clothing', link: '/' },
                { name: 'Costumes', link: '/' },
                { name: 'Kids & Youth', link: '/' },
                { name: 'Mens\'s', link: '/' },
                { name: 'Men\'s Shoes', link: '/' },
                { name: 'Multi-item', link: '/' },
                { name: 'Wedding', link: '/' },
                { name: 'Women\'s - Bags & Wallets', link: '/' },
                { name: 'Women\'s - Bottoms', link: '/' },
                { name: 'Women\'s - Dresses & Skirts', link: '/' },
                { name: 'Women\'s - Maternity', link: '/' },
                { name: 'Women\'s - Shoes', link: '/' },
                { name: 'Women\'s - Tops & Outerwear', link: '/' },
                { name: 'Women\'s - Other', link: '/' },
                { name: 'Other', link: '/' },
            ],

            computers: [
            { name: 'See All in Computers', link: '/' },
            { name: 'Desktop Computers', link: '/' },
            { name: 'iPads & Tablets', link: '/' },
            { name: 'Laptops', link: '/' },
            { name: 'Servers', link: '/' },
            { name: 'Other', link: '/' },
            ],

            computerAccessories: [
            { name: 'See All in Computer Accessories', link: '/' },
            { name: 'Cables & Connectors', link: '/' },
            { name: 'Flash Memory & USB Sticks', link: '/' },
            { name: 'iPad & Tablet Accessories', link: '/' },
            { name: 'Laptop Accessories', link: '/' },
            { name: 'Mouse, Keyboards & Webcams', link: '/' },
            { name: 'Monitors', link: '/' },
            { name: 'Networking', link: '/' },
            { name: 'Printers, Scanners & Fax', link: '/' },
            { name: 'Services (Training & Rapire)', link: '/' },
            { name: 'Software', link: '/' },
            { name: 'Speakers, Headsets & Mics', link: '/' },
            { name: 'System Components', link: '/' },
            { name: 'Other', link: '/' },
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
            console.log(index);
            this.mainCatIsVisible = false;
            this.subCatIsVisible = true;
        },
    },

}

</script>

<style scoped>
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

.sub-category a {
    margin: 8px 0;
    color: black;
    z-index: 1;
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