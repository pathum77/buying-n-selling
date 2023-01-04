<template>
    <div>
        <div class="filter-popup-box dis-fl jus-con-cen container-xxl">
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
                        <a class="a-txt-dec-no" v-for="(item, index) in displaySub" :key="index" href="">{{ item.name
                        }}</a>
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
                { name: 'Arts & Collectibles', hasSub: false, link: '/' },
                { name: 'Audio', hasSub: true, id: 'audio' },
                { name: 'Baby Items', hasSub: true, id: 'babyItems' },
                { name: 'Books', hasSub: true, id: 'books' },
                { name: 'Business & Industrial', hasSub: true, id: 'BusinessIndustrial' },
                { name: 'Cameras & Camcorders', hasSub: false, link: '/' },
                { name: 'CDs, DVDs & Blue-ray', hasSub: false, link: '/' },
                { name: 'Clothing', hasSub: true, id: 'clothing' },
                { name: 'Computers', hasSub: true, id: 'computers' },
                { name: 'Computer Accessories', hasSub: true, id: 'computerAccessories' },
                { name: 'Electronics', hasSub: true, id: 'electronics' },
                { name: 'Free Stuff', hasSub: false, link: '/' },
                { name: 'Furniture', hasSub: true, id: 'furniture' },
                { name: 'Garage Sales', hasSub: false, link: '/' },
                { name: 'Health & Special Needs', hasSub: false, link: '/' },
                { name: 'Hobbies & Crafts', hasSub: false, link: '/' },
                { name: 'Home Appliences', hasSub: true, id: 'homeAppliances' },
                { name: 'Home - Indoor', hasSub: true, id: 'homeIndoor' },
                { name: 'Home -Outdoor & Garden', hasSub: true, id: 'homeOutdoorGarden' },
                { name: 'Home Renovation Materials', hasSub: true, id: 'homeRenovationMaterials' },
                { name: 'Jewellery & Watches', hasSub: false, link: '/' },
                { name: 'Musical Instruments', hasSub: true, id: 'musicalInstruments' },
                { name: 'Phones', hasSub: true, id: 'phones' },
                { name: 'Sporting Goods & Exercise', hasSub: true, id: 'sportingGoodsExercise' },
                { name: 'Tickets', hasSub: false, link: '/' },
                { name: 'Tools', hasSub: true, id: 'tools' },
                { name: 'Toys & Games', hasSub: false },
                { name: 'TVs & Video', hasSub: true, id: 'tvVideo' },
                { name: 'Video Games & Console', hasSub: true, id: 'videoGamesConsole' },
                { name: 'Other', hasSub: false, link: '/others' },
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
                { name: 'See All in Clothing', link: '/' },
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

            electronics: [
                { name: 'See All in Electronics', link: '/' },
                { name: 'General Electronics', link: '/' },
                { name: 'Security Systems', link: '/' },
                { name: 'Other', link: '/' },
            ],

            furniture: [
                { name: 'See All in Furniture', link: '/' },
                { name: 'Beds & Mattresses', link: '/' },
                { name: 'Bookcases & Shelving Units', link: '/' },
                { name: 'Chairs & Recliners', link: '/' },
                { name: 'Coffee Tables', link: '/' },
                { name: 'Couches & Futons', link: '/' },
                { name: 'Desks', link: '/' },
                { name: 'Dining Tables & Sets', link: '/' },
                { name: 'Dressers & Wardrobes', link: '/' },
                { name: 'Hutches & Display Cabinets', link: '/' },
                { name: 'Other Tables', link: '/' },
                { name: 'TV Tables & Entertainment Units', link: '/' },
                { name: 'Multi-item', link: '/' },
                { name: 'Other', link: '/' },
            ],

            homeAppliances: [
                { name: 'See All in Home Appliances', link: '/' },
                { name: 'Coffee Makers', link: '/' },
                { name: 'Dishwashers', link: '/' },
                { name: 'Freezers', link: '/' },
                { name: 'Heaters, Humidifiers & Dehumidifiers', link: '/' },
                { name: 'Irons & Garment Steamers', link: '/' },
                { name: 'Microwaves & Cookers', link: '/' },
                { name: 'Processors, Blenders & Juicers', link: '/' },
                { name: 'Refrigerators', link: '/' },
                { name: 'Stoves, Ovens & Ranges', link: '/' },
                { name: 'Toasters & Toaster Ovens', link: '/' },
                { name: 'Vacuums', link: '/' },
                { name: 'Washers & Dryers', link: '/' },
                { name: 'Other', link: '/' },
            ],

            homeIndoor: [
                { name: 'See All in Home - Indoor', link: '/' },
                { name: 'Bathwares', link: '/' },
                { name: 'Bedding', link: '/' },
                { name: 'Fireplace & Firewood', link: '/' },
                { name: 'Holiday, Event & Seasonal', link: '/' },
                { name: 'Home Décor & Accents', link: '/' },
                { name: 'Indoor Lighting & Fans', link: '/' },
                { name: 'Kitchen & Dining Wares', link: '/' },
                { name: 'Rugs, Carpets & Runners', link: '/' },
                { name: 'Storage & Organization', link: '/' },
                { name: 'Window Treatments', link: '/' },
                { name: 'Other', link: '/' },
            ],

            homeOutdoorGarden: [
                { name: 'See All in Home - Outdoor & Garden', link: '/' },
                { name: 'BBQs & Outdoor Cooking', link: '/' },
                { name: 'Decks & Fences', link: '/' },
                { name: 'Garage Doors & Openers', link: '/' },
                { name: 'Hot Tubs & Pools', link: '/' },
                { name: 'Lawnmowers & Leaf Blowers', link: '/' },
                { name: 'Outdoor Décor', link: '/' },
                { name: 'Outdoor Lighting', link: '/' },
                { name: 'Outdoor Tools & Storage', link: '/' },
                { name: 'Patio & Garden Furniture', link: '/' },
                { name: 'Plants, Fertilizer & Soil', link: '/' },
                { name: 'Snowblowers', link: '/' },
                { name: 'Other', link: '/' },
            ],

            homeRenovationMaterials: [
                { name: 'See All in Home Renovation Materials', link: '/' },
                { name: 'Cabinets & Countertops', link: '/' },
                { name: 'Electrical', link: '/' },
                { name: 'Floors & Walls', link: '/' },
                { name: 'Hardware, Nails & Screws', link: '/' },
                { name: 'Heating, Cooling & Air', link: '/' },
                { name: 'Painting & Paint Supplies', link: '/' },
                { name: 'Plumbing, Sinks, Toilets & Showers', link: '/' },
                { name: 'Roofing', link: '/' },
                { name: 'Windows, Doors & Trim', link: '/' },
                { name: 'Other', link: '/' },
            ],

            musicalInstruments: [
                { name: 'See All in Musical Instruments', link: '/' },
                { name: 'Amps & Pedals', link: '/' },
                { name: 'Brass', link: '/' },
                { name: 'Drums & Percussion', link: '/' },
                { name: 'Guitars', link: '/' },
                { name: 'Performance & DJ Equipment', link: '/' },
                { name: 'Pianos & Keyboards', link: '/' },
                { name: 'Pro Audio & Recording Equipment', link: '/' },
                { name: 'String', link: '/' },
                { name: 'Woodwind', link: '/' },
                { name: 'Other', link: '/' },
            ],

            phones: [
                { name: 'See All in Phones', link: '/' },
                { name: 'Cell Phones', link: '/' },
                { name: 'Cell Phone Accessories', link: '/' },
                { name: 'Cell Phone Services', link: '/' },
                { name: 'Home Phones & Answering Machines', link: '/' },
                { name: 'Other', link: '/' },
            ],

            sportingGoodsExercise: [
                { name: 'See All in Sporting Goods & Exercise', link: '/' },
                { name: 'Baseball & Softball', link: '/' },
                { name: 'Basketball', link: '/' },
                { name: 'Curling', link: '/' },
                { name: 'Exercise Equipment', link: '/' },
                { name: 'Fishing, Camping & Outdoors', link: '/' },
                { name: 'Football', link: '/' },
                { name: 'Golf', link: '/' },
                { name: 'Hockey', link: '/' },
                { name: 'Lacrosse', link: '/' },
                { name: 'Paintball', link: '/' },
                { name: 'Skates & Blades', link: '/' },
                { name: 'Skateboard', link: '/' },
                { name: 'Ski', link: '/' },
                { name: 'Snowboard', link: '/' },
                { name: 'Soccer', link: '/' },
                { name: 'Tennis & Racquet', link: '/' },
                { name: 'Water Sports', link: '/' },
                { name: 'Other', link: '/' },
            ],

            tools: [
                { name: 'See All in Tools', link: '/' },
                { name: 'Hand Tools', link: '/' },
                { name: 'Power Tools', link: '/' },
                { name: 'Tool Storage & Benches', link: '/' },
                { name: 'Ladders & Scaffolding', link: '/' },
                { name: 'Other', link: '/' },
            ],

            tvVideo: [
                { name: 'See All in TVs & Video', link: '/' },
                { name: 'TVs', link: '/' },
                { name: 'Video & TV Accessories', link: '/' },
            ],

            videoGamesConsole: [
                { name: 'See All in Video Games & Consoles', link: '/' },
                { name: 'Nintendo DS', link: '/' },
                { name: 'Nintendo Switch', link: '/' },
                { name: 'Nintendo Wii', link: '/' },
                { name: 'Nintendo Wii U', link: '/' },
                { name: 'Sony Playstation 5', link: '/' },
                { name: 'Sony Playstation 4', link: '/' },
                { name: 'Sony Playstation 3', link: '/' },
                { name: 'Sony PSP & Vita', link: '/' },
                { name: 'Xbox Series X & S', link: '/' },
                { name: 'XBOX 360', link: '/' },
                { name: 'XBOX One', link: '/' },
                { name: 'Older Generation', link: '/' },
                { name: 'PC Games', link: '/' },
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
            if (this.categories[index].hasSub === true) {
                switch (this.categories[index].id) {
                    case 'audio':
                        this.displaySub = this.audio;
                        break;
                    case 'babyItems':
                        this.displaySub = this.babyItems;
                        break;
                    case 'books':
                        this.displaySub = this.books;
                        break;
                    case 'BusinessIndustrial':
                        this.displaySub = this.BusinessIndustrial;
                        break;
                    case 'clothing':
                        this.displaySub = this.clothing;
                        break;
                    case 'computers':
                        this.displaySub = this.computers;
                        break;
                    case 'computerAccessories':
                        this.displaySub = this.computerAccessories;
                        break;
                    case 'electronics':
                        this.displaySub = this.electronics;
                        break;
                    case 'furniture':
                        this.displaySub = this.furniture;
                        break;
                    case 'homeAppliances':
                        this.displaySub = this.homeAppliances;
                        break;
                    case 'homeIndoor':
                        this.displaySub = this.homeIndoor;
                        break;
                    case 'homeOutdoorGarden':
                        this.displaySub = this.homeOutdoorGarden;
                        break;
                    case 'homeRenovationMaterials':
                        this.displaySub = this.homeRenovationMaterials;
                        break;
                    case 'musicalInstruments':
                        this.displaySub = this.musicalInstruments;
                        break;
                    case 'phones':
                        this.displaySub = this.phones;
                        break;
                    case 'sportingGoodsExercise':
                        this.displaySub = this.sportingGoodsExercise;
                        break;
                    case 'tools':
                        this.displaySub = this.tools;
                        break;
                    case 'tvVideo':
                        this.displaySub = this.tvVideo;
                        break;
                    case 'videoGamesConsole':
                        this.displaySub = this.videoGamesConsole;
                        break;
                    case 'others':
                        this.displaySub = this.others;
                        break;
                    default:
                        return;
                }
                this.mainCatIsVisible = false;
                this.subCatIsVisible = true;
                this.selectedCat = this.categories[index].name;
            } else {
                this.$router.push(this.categories[index].link)
            }
        },
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