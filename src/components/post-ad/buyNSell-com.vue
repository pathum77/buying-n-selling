<template>
    <div>
        <div class="filter-popup-box dis-fl jus-con-cen container-xxl">
            <div class="filter-popup-wrapper">
                <div class="category-wrapper dis-fl">
                    <div class="main-category">
                        <h5>Buy & Sell</h5>
                        <button class="pad-mar-no dis-fl jus-con-sp-bt al-it-cen"
                            v-for="(category, index) in categories" :key="index" @click="CategorySelect(index)">
                            <p class="pad-mar-no">{{ category.name }}</p>
                            <img :class="category.hasSub ? 'icn-fo-arr' : 'icn-fo-arr-hide'"
                                src="../../assets/icons/forward-black.png" alt="">
                        </button><br>
                    </div>
                    <div class="sub-category">
                        <button class="a-txt-dec-no" v-for="(item, index) in displaySub" :key="index" @click="subCategorySelect(index)">{{ item.name}}</button>
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
                { name: 'Arts & Collectibles', hasSub: false, link: '/post-ad/Buy & Sell/Arts & Collectibles', title: true },
                { name: 'Audio', hasSub: true, id: 'audio' },
                { name: 'Baby Items', hasSub: true, id: 'babyItems' },
                { name: 'Books', hasSub: true, id: 'books' },
                { name: 'Business & Industrial', hasSub: true, id: 'BusinessIndustrial' },
                { name: 'Cameras & Camcorders', hasSub: false, link: '/post-ad/Buy & Sell/Cameras & Camcorders', title: true, condition: true, },
                { name: 'CDs, DVDs & Blue-ray', hasSub: false, link: '/post-ad/Buy & Sell/CDs, DVDs & Blue-ray', title: true, condition: true,},
                { name: 'Clothing', hasSub: true, id: 'clothing' },
                { name: 'Computers', hasSub: true, id: 'computers' },
                { name: 'Computer Accessories', hasSub: true, id: 'computerAccessories' },
                { name: 'Electronics', hasSub: true, id: 'electronics' },
                { name: 'Free Stuff', hasSub: false, link: '/post-ad/Buy & Sell/Free Stuff', title: true, },
                { name: 'Furniture', hasSub: true, id: 'furniture' },
                { name: 'Garage Sales', hasSub: false, link: '/post-ad/Buy & Sell/Garage Sales', title: true, },
                { name: 'Health & Special Needs', hasSub: false, link: '/post-ad/Buy & Sell/Health & Special Needs', title: true, condition: true, },
                { name: 'Hobbies & Crafts', hasSub: false, link: '/post-ad/Buy & Sell/Hobbies & Crafts', title: true, condition: true, },
                { name: 'Home Appliences', hasSub: true, id: 'homeAppliances' },
                { name: 'Home - Indoor', hasSub: true, id: 'homeIndoor' },
                { name: 'Home -Outdoor & Garden', hasSub: true, id: 'homeOutdoorGarden' },
                { name: 'Home Renovation Materials', hasSub: true, id: 'homeRenovationMaterials' },
                { name: 'Jewellery & Watches', hasSub: false, link: '/post-ad/Buy & Sell/Jewellery & Watches', title: true, condition: true,},
                { name: 'Musical Instruments', hasSub: true, id: 'musicalInstruments' },
                { name: 'Phones', hasSub: true, id: 'phones' },
                { name: 'Sporting Goods & Exercise', hasSub: true, id: 'sportingGoodsExercise' },
                { name: 'Tickets', hasSub: false, link: '/post-ad/Buy & Sell/Tickets', title: true, },
                { name: 'Tools', hasSub: true, id: 'tools' },
                { name: 'Toys & Games', hasSub: false, link: '/post-ad/Buy & Sell/Toys & Games', title: true, condition: true, },
                { name: 'TVs & Video', hasSub: true, id: 'tvVideo' },
                { name: 'Video Games & Console', hasSub: true, id: 'videoGamesConsole' },
                { name: 'Other', hasSub: false, link: '/post-ad/Buy & Sell/Other', title: true, condition: true, },
            ],

            audio: [
                { name: 'iPods & MP3s', link: '/post-ad/Buy & Sell/Audio - iPods & MP3s', title: true, condition: true, },
                { name: 'iPod & MP3 Accessories', link: '/post-ad/Buy & Sell/Audio - iPod & MP3 Accessories', title: true, condition: true, },
                { name: 'Headphones', link: '/post-ad/Buy & Sell/Audio - Headphones', title: true, condition: true, },
                { name: 'Speakers', link: '/post-ad/Buy & Sell/Audio - Speakers', title: true, condition: true, },
                { name: 'Stereo Systems & Home Theaters', link: '/post-ad/Buy & Sell/Audio - Stereo Systems & Home Theaters', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Audio - Other', title: true, condition: true, },
            ],

            babyItems: [
                { name: 'Bathing & Changing', link: '/post-ad/Buy & Sell/Baby Items - Bathing & Changing', title: true, condition: true, },
                { name: 'Clothing - Preemie', link: '/post-ad/Buy & Sell/Baby Items - Clothing - Preemie', title: true, condition: true, },
                { name: 'Clothing - 0-3 Months', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 0-3 Months', title: true, condition: true, },
                { name: 'Clothing - 3-6 Months', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 3-6 Months', title: true, condition: true, },
                { name: 'Clothing - 6-9 Months', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 6-9 Months', title: true, condition: true, },
                { name: 'Clothing - 9-12 Months', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 9-12 Months', title: true, condition: true, },
                { name: 'Clothing - 12-18 Months', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 12-18 Months', title: true, condition: true, },
                { name: 'Clothing - 18-24 Months', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 18-24 Months', title: true, condition: true, },
                { name: 'Clothing - 2T', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 2T', title: true, condition: true, },
                { name: 'Clothing - 3T', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 3T', title: true, condition: true, },
                { name: 'Clothing - 4T', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 4T', title: true, condition: true, },
                { name: 'Clothing - 5T', link: '/post-ad/Buy & Sell/Baby Items - Clothing - 5T', title: true, condition: true, },
                { name: 'Feeding & High Chairs', link: '/post-ad/Buy & Sell/Baby Items - Feeding & High Chairs', title: true, condition: true, },
                { name: 'Gates, Monitors & Safety', link: '/post-ad/Buy & Sell/Baby Items - Gates, Monitors & Safety', title: true, condition: true, },
                { name: 'Playpens, Swings Saucers', link: '/post-ad/Buy & Sell/Baby Items - Playpens, Swings Saucers', title: true, condition: true, },
                { name: 'Strollers, Careeiers & Car Seats', link: '/post-ad/Buy & Sell/Baby Items - Strollers, Careeiers & Car Seats', title: true, condition: true, },
                { name: 'Toys', link: '/post-ad/Buy & Sell/Baby Items - Toys', title: true, condition: true, },
                { name: 'Multi Items', link: '/post-ad/Buy & Sell/Baby Items - Multi Items', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Baby Items - Other', title: true, condition: true, },
            ],

            books: [
                { name: 'Textbooks', link: '/post-ad/Buy & Sell/Books - Textbooks', title: true, },
                { name: 'Magazines', link: '/post-ad/Buy & Sell/Books - Magazines', title: true, },
                { name: 'Children & Young Adult', link: '/post-ad/Buy & Sell/Books - Children & Young Adult', title: true, },
                { name: 'Comic & Graphic Novels', link: '/post-ad/Buy & Sell/Books - Comic & Graphic Novels', title: true, },
                { name: 'Fiction', link: '/post-ad/Buy & Sell/Books - Fiction', title: true, },
                { name: 'Non-Fiction', link: '/post-ad/Buy & Sell/Books - Non-Fiction', title: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Books - Other', title: true, },
            ],

            BusinessIndustrial: [
                { name: 'Industrial Kitchen Supply', link: '/post-ad/Buy & Sell/Business & Industrial - Industrial Kitchen Supply', title: true, },
                { name: 'Industrial Shelving & Racking', link: '/post-ad/Buy & Sell/Business & Industrial - Industrial Shelving & Racking', title: true, },
                { name: 'Storage Containers', link: '/post-ad/Buy & Sell/Business & Industrial - Storage Containers', title: true, },
                { name: 'Other Business Industrial', link: '/post-ad/Buy & Sell/Business & Industrial - Other Business Industrial', title: true, },
            ],

            clothing: [
                { name: 'Costumes', link: '/post-ad/Buy & Sell/Cloting - Costumes', title: true, },
                { name: 'Kids & Youth', link: '/post-ad/Buy & Sell/Cloting - Kids & Youth', title: true, },
                { name: 'Mens\'s', link: '/post-ad/Buy & Sell/Cloting - Mens\'s', title: true, },
                { name: 'Men\'s Shoes', link: '/post-ad/Buy & Sell/Cloting - Men\'s Shoes', title: true, },
                { name: 'Multi-item', link: '/post-ad/Buy & Sell/Cloting - Multi-item', title: true, },
                { name: 'Wedding', link: '/post-ad/Buy & Sell/Cloting - Wedding', title: true, },
                { name: 'Women\'s - Bags & Wallets', link: '/post-ad/Buy & Sell/Cloting - Women\'s - Bags & Wallets', title: true, },
                { name: 'Women\'s - Bottoms', link: '/post-ad/Buy & Sell/Cloting - Women\'s - Bottoms', title: true, },
                { name: 'Women\'s - Dresses & Skirts', link: '/post-ad/Buy & Sell/Women\'s - Dresses & Skirts', title: true, },
                { name: 'Women\'s - Maternity', link: '/post-ad/Buy & Sell/Cloting - Costumes', title: true, },
                { name: 'Women\'s - Shoes', link: '/post-ad/Buy & Sell/Cloting - Costumes', title: true, },
                { name: 'Women\'s - Tops & Outerwear', link: '/post-ad/Buy & Sell/Cloting - Costumes', title: true, },
                { name: 'Women\'s - Other', link: '/post-ad/Buy & Sell/Cloting - Costumes', title: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Cloting - Costumes', title: true, },
            ],

            computers: [
                { name: 'Desktop Computers', link: '/post-ad/Buy & Sell/Computers - Desktop Computers', title: true, condition: true, },
                { name: 'iPads & Tablets', link: '/post-ad/Buy & Sell/Computers - iPads & Tablets', title: true, condition: true, },
                { name: 'Laptops', link: '/post-ad/Buy & Sell/Computers - Laptops', title: true, condition: true, },
                { name: 'Servers', link: '/post-ad/Buy & Sell/Computers - Servers', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Computers - Other', title: true, condition: true, },
            ],

            computerAccessories: [
                { name: 'Cables & Connectors', link: '/post-ad/Buy & Sell/Computer Accessories - Cables & Connectors', title: true, condition: true, },
                { name: 'Flash Memory & USB Sticks', link: '/post-ad/Buy & Sell/Computer Accessories - Flash Memory & USB Sticks', title: true, condition: true, },
                { name: 'iPad & Tablet Accessories', link: '/post-ad/Buy & Sell/Computer Accessories - iPad & Tablet Accessories', title: true, condition: true, },
                { name: 'Laptop Accessories', link: '/post-ad/Buy & Sell/Computer Accessories - Laptop Accessories', title: true, condition: true, },
                { name: 'Mouse, Keyboards & Webcams', link: '/post-ad/Buy & Sell/Computer Accessories - Mouse, Keyboards & Webcams', title: true, condition: true, },
                { name: 'Monitors', link: '/post-ad/Buy & Sell/Computer Accessories - Monitors', title: true, condition: true, },
                { name: 'Networking', link: '/post-ad/Buy & Sell/Computer Accessories - Networking', title: true, condition: true, },
                { name: 'Printers, Scanners & Fax', link: '/post-ad/Buy & Sell/Computer Accessories - Printers, Scanners & Fax', title: true, condition: true, },
                { name: 'Services (Training & Rapire)', link: '/post-ad/Buy & Sell/Computer Accessories - Services (Training & Rapire)', title: true, condition: true, },
                { name: 'Software', link: '/post-ad/Buy & Sell/Computer Accessories - Software', title: true, condition: true, },
                { name: 'Speakers, Headsets & Mics', link: '/post-ad/Buy & Sell/Computer Accessories - Speakers, Headsets & Mics', title: true, condition: true, },
                { name: 'System Components', link: '/post-ad/Buy & Sell/Computer Accessories - System Components', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Computer Accessories - Other', title: true, condition: true, },
            ],

            electronics: [
                { name: 'General Electronics', link: '/post-ad/Buy & Sell/Electronics - General Electronics', title: true, condition: true, },
                { name: 'Security Systems', link: '/post-ad/Buy & Sell/Electronics - Security Systems', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Electronics - Other', title: true, condition: true, },
            ],

            furniture: [
                { name: 'Beds & Mattresses', link: '/post-ad/Buy & Sell/Furniture - Beds & Mattresses', title: true, condition: true, },
                { name: 'Bookcases & Shelving Units', link: '/post-ad/Buy & Sell/Furniture - Bookcases & Shelving Units', title: true, condition: true, },
                { name: 'Chairs & Recliners', link: '/post-ad/Buy & Sell/Furniture - Chairs & Recliners', title: true, condition: true, },
                { name: 'Coffee Tables', link: '/post-ad/Buy & Sell/Furniture - Coffee Tables', title: true, condition: true, },
                { name: 'Couches & Futons', link: '/post-ad/Buy & Sell/Furniture - Couches & Futons', title: true, condition: true, },
                { name: 'Desks', link: '/post-ad/Buy & Sell/Furniture - Desks', title: true, condition: true, },
                { name: 'Dining Tables & Sets', link: '/post-ad/Buy & Sell/Furniture - Dining Tables & Sets', title: true, condition: true, },
                { name: 'Dressers & Wardrobes', link: '/post-ad/Buy & Sell/Furniture - Dressers & Wardrobes', title: true, condition: true, },
                { name: 'Hutches & Display Cabinets', link: '/post-ad/Buy & Sell/Furniture - Hutches & Display Cabinets', title: true, condition: true, },
                { name: 'Other Tables', link: '/post-ad/Buy & Sell/Furniture - Other Tables', title: true, condition: true, },
                { name: 'TV Tables & Entertainment Units', link: '/post-ad/Buy & Sell/Furniture - TV Tables & Entertainment Units', title: true, condition: true, },
                { name: 'Multi-item', link: '/post-ad/Buy & Sell/Furniture - Multi-item', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Furniture - Other', title: true, condition: true, },
            ],

            homeAppliances: [
                { name: 'Coffee Makers', link: '/post-ad/Buy & Sell/Home Appliances - Coffee Makers', title: true, condition: true, },
                { name: 'Dishwashers', link: '/post-ad/Buy & Sell/Home Appliances - Dishwashers', title: true, condition: true, },
                { name: 'Freezers', link: '/post-ad/Buy & Sell/Home Appliances - Freezers', title: true, condition: true, },
                { name: 'Heaters, Humidifiers & Dehumidifiers', link: '/post-ad/Buy & Sell/Home Appliances - Heaters, Humidifiers & Dehumidifiers', title: true, condition: true, },
                { name: 'Irons & Garment Steamers', link: '/post-ad/Buy & Sell/Home Appliances - Irons & Garment Steamers', title: true, condition: true, },
                { name: 'Microwaves & Cookers', link: '/post-ad/Buy & Sell/Home Appliances - Microwaves & Cookers', title: true, condition: true, },
                { name: 'Processors, Blenders & Juicers', link: '/post-ad/Buy & Sell/Home Appliances - Processors, Blenders & Juicers', title: true, condition: true, },
                { name: 'Refrigerators', link: '/post-ad/Buy & Sell/Home Appliances - Refrigerators', title: true, condition: true, },
                { name: 'Stoves, Ovens & Ranges', link: '/post-ad/Buy & Sell/Home Appliances - Stoves, Ovens & Ranges', title: true, condition: true, },
                { name: 'Toasters & Toaster Ovens', link: '/post-ad/Buy & Sell/Home Appliances - Toasters & Toaster Ovens', title: true, condition: true, },
                { name: 'Vacuums', link: '/post-ad/Buy & Sell/Home Appliances - Vacuums', title: true, condition: true, },
                { name: 'Washers & Dryers', link: '/post-ad/Buy & Sell/Home Appliances - Washers & Dryers', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Home Appliances - Other', title: true, condition: true, },
            ],

            homeIndoor: [
                { name: 'Bathwares', link: '/post-ad/Buy & Sell/Home - Indoor - Bathwares', title: true, condition: true, },
                { name: 'Bedding', link: '/post-ad/Buy & Sell/Home - Indoor - Bedding', title: true, condition: true, },
                { name: 'Fireplace & Firewood', link: '/post-ad/Buy & Sell/Home - Indoor - Fireplace & Firewood', title: true, condition: true, },
                { name: 'Holiday, Event & Seasonal', link: '/post-ad/Buy & Sell/Home - Indoor - Holiday, Event & Seasonal', title: true, condition: true, },
                { name: 'Home Décor & Accents', link: '/post-ad/Buy & Sell/Home - Indoor - Home Décor & Accents', title: true, condition: true, },
                { name: 'Indoor Lighting & Fans', link: '/post-ad/Buy & Sell/Home - Indoor - Indoor Lighting & Fans', title: true, condition: true, },
                { name: 'Kitchen & Dining Wares', link: '/post-ad/Buy & Sell/Home - Indoor - Kitchen & Dining Wares', title: true, condition: true, },
                { name: 'Rugs, Carpets & Runners', link: '/post-ad/Buy & Sell/Home - Indoor - Rugs, Carpets & Runners', title: true, condition: true, },
                { name: 'Storage & Organization', link: '/post-ad/Buy & Sell/Home - Indoor - Storage & Organization', title: true, condition: true, },
                { name: 'Window Treatments', link: '/post-ad/Buy & Sell/Home - Indoor - Window Treatments', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Home - Indoor - Other', title: true, condition: true, },
            ],

            homeOutdoorGarden: [
                { name: 'BBQs & Outdoor Cooking', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - BBQs & Outdoor Cooking', title: true, condition: true, },
                { name: 'Decks & Fences', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Decks & Fences', title: true, condition: true, },
                { name: 'Garage Doors & Openers', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Garage Doors & Openers', title: true, condition: true, },
                { name: 'Hot Tubs & Pools', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Hot Tubs & Pools', title: true, condition: true, },
                { name: 'Lawnmowers & Leaf Blowers', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Lawnmowers & Leaf Blowers', title: true, condition: true, },
                { name: 'Outdoor Décor', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Outdoor Décor', title: true, condition: true, },
                { name: 'Outdoor Lighting', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Outdoor Lighting', title: true, condition: true, },
                { name: 'Outdoor Tools & Storage', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Outdoor Tools & Storage', title: true, condition: true, },
                { name: 'Patio & Garden Furniture', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Patio & Garden Furniture', title: true, condition: true, },
                { name: 'Plants, Fertilizer & Soil', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Plants, Fertilizer & Soil', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Home - Outdoor & Garden - Other', title: true, condition: true, },
            ],

            homeRenovationMaterials: [
                { name: 'Cabinets & Countertops', link: '/post-ad/Buy & Sell/Home Renovation Materials - Cabinets & Countertops', title: true, condition: true, },
                { name: 'Electrical', link: '/post-ad/Buy & Sell/Home Renovation Materials - Electrical', title: true, condition: true, },
                { name: 'Floors & Walls', link: '/post-ad/Buy & Sell/Home Renovation Materials - Floors & Walls', title: true, condition: true, },
                { name: 'Hardware, Nails & Screws', link: '/post-ad/Buy & Sell/Home Renovation Materials - Hardware, Nails & Screws', title: true, condition: true, },
                { name: 'Heating, Cooling & Air', link: '/post-ad/Buy & Sell/Home Renovation Materials - Heating, Cooling & Air', title: true, condition: true, },
                { name: 'Painting & Paint Supplies', link: '/post-ad/Buy & Sell/Home Renovation Materials - Painting & Paint Supplies', title: true, condition: true, },
                { name: 'Plumbing, Sinks, Toilets & Showers', link: '/post-ad/Buy & Sell/Home Renovation Materials - Plumbing, Sinks, Toilets & Showers', title: true, condition: true, },
                { name: 'Roofing', link: '/post-ad/Buy & Sell/Home Renovation Materials - Roofing', title: true, condition: true, },
                { name: 'Windows, Doors & Trim', link: '/post-ad/Buy & Sell/Home Renovation Materials - Windows, Doors & Trim', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Home Renovation Materials - Other', title: true, condition: true, },
            ],

            musicalInstruments: [
                { name: 'Amps & Pedals', link: '/post-ad/Buy & Sell/Musical Instruments - Amps & Pedals', title: true, condition: true, },
                { name: 'Brass', link: '/post-ad/Buy & Sell/Musical Instruments - Brass', title: true, condition: true, },
                { name: 'Drums & Percussion', link: '/post-ad/Buy & Sell/Musical Instruments - Drums & Percussion', title: true, condition: true, },
                { name: 'Guitars', link: '/post-ad/Buy & Sell/Musical Instruments - Guitars', title: true, condition: true, },
                { name: 'Performance & DJ Equipment', link: '/post-ad/Buy & Sell/Musical Instruments - Performance & DJ Equipment', title: true, condition: true, },
                { name: 'Pianos & Keyboards', link: '/post-ad/Buy & Sell/Musical Instruments - Pianos & Keyboards', title: true, condition: true, },
                { name: 'Pro Audio & Recording Equipment', link: '/post-ad/Buy & Sell/Musical Instruments - Pro Audio & Recording Equipment', title: true, condition: true, },
                { name: 'String', link: '/post-ad/Buy & Sell/Musical Instruments - String', title: true, condition: true, },
                { name: 'Woodwind', link: '/post-ad/Buy & Sell/Musical Instruments - Woodwind', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Musical Instruments - Other', title: true, condition: true, },
            ],

            phones: [
                { name: 'Cell Phones', link: '/post-ad/Buy & Sell/Phones - Cell Phones', title: true, condition: true, features: true, },
                { name: 'Cell Phone Accessories', link: '/post-ad/Buy & Sell/Phones - Cell Phone Accessories', title: true, condition: true, },
                { name: 'Cell Phone Services', link: '/post-ad/Buy & Sell/Phones - Cell Phone Services', title: true, },
                { name: 'Home Phones & Answering Machines', link: '/post-ad/Buy & Sell/Phones - Home Phones & Answering Machines', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Phones - Other', title: true, condition: true, },
            ],

            sportingGoodsExercise: [
                { name: 'Basketball', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Basketball', title: true, condition: true, },
                { name: 'Cricket', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Cricket', title: true, condition: true, },
                { name: 'Exercise Equipment', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Exercise Equipment', title: true, condition: true, },
                { name: 'Fishing, Camping & Outdoors', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Fishing, Camping & Outdoors', title: true, condition: true, },
                { name: 'Football', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Football', title: true, condition: true, },
                { name: 'Golf', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Golf', title: true, condition: true, },
                { name: 'Hockey', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Hockey', title: true, condition: true, },
                { name: 'Paintball', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Paintball', title: true, condition: true, },
                { name: 'Rugby', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Rugby', title: true, condition: true, },
                { name: 'Tennis & Racquet', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Tennis & Racquet', title: true, condition: true, },
                { name: 'Vollyball', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Vollyball', title: true, condition: true, },
                { name: 'Water Sports', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Water Sports', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Sporting Goods & Excercise - Other', title: true, condition: true, },
            ],

            tools: [
                { name: 'Hand Tools', link: '/post-ad/Buy & Sell/Tools - Hand Tools', title: true, condition: true, },
                { name: 'Power Tools', link: '/post-ad/Buy & Sell/Tools - Power Tools', title: true, condition: true, },
                { name: 'Tool Storage & Benches', link: '/post-ad/Buy & Sell/Tools - Tool Storage & Benches', title: true, condition: true, },
                { name: 'Ladders & Scaffolding', link: '/post-ad/Buy & Sell/Tools - Ladders & Scaffolding', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Tools - Other', title: true, condition: true, },
            ],

            tvVideo: [
                { name: 'TVs', link: '/post-ad/Buy & Sell/TVs & Video - TVs', title: true, condition: true, },
                { name: 'Video & TV Accessories', link: '/post-ad/Buy & Sell/TVs & Video - Video & TV Accessories', title: true, condition: true, },
            ],

            videoGamesConsole: [
                { name: 'Nintendo DS', link: '/post-ad/Buy & Sell/Video Games & Console - Nintendo DS', title: true, condition: true, },
                { name: 'Nintendo Switch', link: '/post-ad/Buy & Sell/Video Games & Console - Nintendo Switch', title: true, condition: true, },
                { name: 'Nintendo Wii', link: '/post-ad/Buy & Sell/Video Games & Console - Nintendo Wii', title: true, condition: true, },
                { name: 'Nintendo Wii U', link: '/post-ad/Buy & Sell/Video Games & Console - Nintendo Wii U', title: true, condition: true, },
                { name: 'Sony Playstation 5', link: '/post-ad/Buy & Sell/Video Games & Console - Sony Playstation 5', title: true, condition: true, },
                { name: 'Sony Playstation 4', link: '/post-ad/Buy & Sell/Video Games & Console - Sony Playstation 4', title: true, condition: true, },
                { name: 'Sony Playstation 3', link: '/post-ad/Buy & Sell/Video Games & Console - Sony Playstation 3', title: true, condition: true, },
                { name: 'Sony PSP & Vita', link: '/post-ad/Buy & Sell/Video Games & Console - Sony PSP & Vita', title: true, condition: true, },
                { name: 'Xbox Series X & S', link: '/post-ad/Buy & Sell/Video Games & Console - Xbox Series X & S', title: true, condition: true, },
                { name: 'XBOX 360', link: '/post-ad/Buy & Sell/Video Games & Console - XBOX 360', title: true, condition: true, },
                { name: 'XBOX One', link: '/post-ad/Buy & Sell/Video Games & Console - XBOX One', title: true, condition: true, },
                { name: 'Older Generation', link: '/post-ad/Buy & Sell/Video Games & Console - Older Generation', title: true, condition: true, },
                { name: 'PC Games', link: '/post-ad/Buy & Sell/Video Games & Console - PC Games', title: true, condition: true, },
                { name: 'Other', link: '/post-ad/Buy & Sell/Video Games & Console - Other', title: true, condition: true, },
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
    border: none;
    background-color: transparent;
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