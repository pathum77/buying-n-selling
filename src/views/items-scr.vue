<template>
    <div>
        <div class="main pad-mar-no container-xxl">
            <Navi />
            <transition name="filter-trans">
                <div v-if="mobileFilterIsVisible" class="filter-wrp-sm">
                    <div class="btn-wrapper dis-fl">
                        <button @click="(mobileFilterIsVisible = false)" class="btn-close"></button>
                    </div>
                    <div class="filter-wrp-lg">
                        <p class="f-sz-sm pad-mar-no">Short result by</p>
                        <select name="" id="">
                            <option value="">Date: Newest on top</option>
                            <option value="">Date: Oldest on top</option>
                            <option value="">Price: High to low</option>
                            <option value="">Price: Low to high</option>
                        </select><br><br>
                        <p class="f-sz-sm pad-mar-no">Short item type by</p>
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">New</option>
                            <option value="">Used</option>
                        </select><br><br>
                        <p class="f-sz-sm pad-mar-no">Price (Rs)</p>
                        <div class="dis-fl jus-con-sp-bt">
                            <input type="text" name="" id="" placeholder="Min">
                            <input type="text" name="" id="" placeholder="Max">
                        </div><br>
                        <p class="f-sz-sm pad-mar-no">Type of poster</p>
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">Members</option>
                            <option value="">Non-members</option>
                        </select><br><br>
                        <button class="pad-mar-no col-theme">FILTER</button>
                    </div>
                </div>
            </transition>
            <div class="top-info dis-fl jus-con-sp-bt res-py">
                <a class="a-txt-dec-no f-sz-sm dis-fl al-it-cen" href="">
                    <img src="../assets/icons/backward_theme.png" alt="">
                    <p class="pad-mar-no">Back to Home</p>
                </a>
                <button @click="(mobileFilterIsVisible = true)" class="btn-filter pad-mar-no">
                    <img src="../assets/icons/filter.png" alt="">
                </button>
            </div><br>
            <div class="items-filter-lg-wrapper dis-fl jus-con-sp-bt res-py">
                <div class="lg-filter">
                    <div class="filter-wrp-lg">
                        <p class="f-sz-sm pad-mar-no">Short result by</p>
                        <select name="" id="">
                            <option value="">Date: Newest on top</option>
                            <option value="">Date: Oldest on top</option>
                            <option value="">Price: High to low</option>
                            <option value="">Price: Low to high</option>
                        </select><br><br>
                        <p class="f-sz-sm pad-mar-no">Short item type by</p>
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">New</option>
                            <option value="">Used</option>
                        </select><br><br>
                        <p class="f-sz-sm pad-mar-no">Price (Rs)</p>
                        <div class="dis-fl jus-con-sp-bt">
                            <input type="text" name="" id="" placeholder="Min">
                            <input type="text" name="" id="" placeholder="Max">
                        </div><br>
                        <p class="f-sz-sm pad-mar-no">Type of poster</p>
                        <select name="" id="">
                            <option value="">All</option>
                            <option value="">Members</option>
                            <option value="">Non-members</option>
                        </select><br><br>
                        <button class="pad-mar-no col-theme">FILTER</button>
                    </div>
                </div>
                <div class="items-wrp-lg">
                    <a v-for="(item, index) in displayItems" :key="index" href=""
                        class="item-wrp-lg dis-fl a-txt-dec-no">
                        <div class="img-box dis-fl jus-con-cen">
                            <img :src="require('../assets/test/' + item.image + '')" alt="">
                        </div>
                        <div class="content-box">
                            <p class="item-name pad-mar-no">{{ item.name }}</p>
                            <span
                                :class="(item.isMember === true ? 'membership pad-mar-no f-sz-sm' : 'membership-none')">MEMBER</span>
                            <p class="pad-mar-no">{{ item.location }}</p>
                            <p class="price pad-mar-no">Rs {{ item.price.toLocaleString() }}</p>
                            <div class="dis-fl jus-con-sp-bt al-it-cen f-sz-sm">
                                <p class="pad-mar-no"></p>
                                <p class="pad-mar-no">{{ item.time }}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="items-wrp-sm">
                    <a v-for="(item, index) in displayItems" :key="index" href="" class="items-sm dis-fl a-txt-dec-no">
                        <img :src="require('../assets/test/' + item.image + '')" alt="">
                        <p class="item-name pad-mar-no f-sz-sm">{{ item.name }}</p>
                        <p class="price pad-mar-no f-sz-sm f-col-theme">Rs {{ item.price.toLocaleString() }}</p>
                        <p class="location pad-mar-no f-sz-sm">{{ item.location }}</p>
                        <span
                            :class="(item.isMember === true ? 'membership pad-mar-no f-sz-sm' : 'membership-none')">Member</span>
                        <div class="dis-fl jus-con-sp-bt">
                            <p class="pad-mar-no f-sz-sm"></p>
                            <p class="time-status pad-mar-no">{{ item.time }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navi from '../components/navigation-com.vue'

export default {

    data() {
        return {
            mobileFilterIsVisible: false,
            displayItems: [
                { name: 'HP Middle EastHP', image: 'ads_sample.jpg', price: 150000, location: 'Kandy', time: '5 mins', isMember: true, link: '' },
                { name: 'Huawei Nova 2i', image: 'huawei-nova-2i.png', price: 43000, location: 'Colombo', time: 'yesterday', isMember: true, link: '' },
                { name: 'Honda FIT GP5 2015 Car', image: 'sample-ad-2.jpg', price: 6750000, location: 'Kurunegala', time: 'yesterday', isMember: true, link: '' },
                { name: 'HP Middle EastHP', image: 'ads_sample.jpg', price: 150000, location: 'Kandy', time: '5 mins', isMember: true, link: '' },
                { name: 'Huawei Nova 2i', image: 'huawei-nova-2i.png', price: 43000, location: 'Colombo', time: 'yesterday', isMember: true, link: '' },
                { name: 'Honda FIT GP5 2015 Car', image: 'sample-ad-2.jpg', price: 6750000, location: 'Kurunegala', time: 'yesterday', isMember: true, link: '' },
                { name: 'HP Middle EastHP', image: 'ads_sample.jpg', price: 150000, location: 'Kandy', time: '5 mins', isMember: true, link: '' },
                { name: 'Huawei Nova 2i', image: 'huawei-nova-2i.png', price: 43000, location: 'Colombo', time: 'yesterday', isMember: true, link: '' },
                { name: 'Honda FIT GP5 2015 Car', image: 'sample-ad-2.jpg', price: 6750000, location: 'Kurunegala', time: 'yesterday', isMember: true, link: '' },
            ],
        }
    },

    components: {
        Navi,
    }

}
</script>

<style scoped>
.filter-wrp-sm {
    display: none;
}

.main {
    min-height: 100vh;
    margin: 0 auto;
}

.btn-filter {
    display: none;
}

.top-info a {
    color: #D2042D;
}

.top-info a img {
    width: 7px;
    height: 10px;
    margin-right: 5px;
}

.filter-wrp-lg {
    width: 300px;
    padding-right: 20px;
}

.filter-wrp-lg select {
    width: 100%;
    height: 35px;
    outline: none;
    border-radius: 5px;
}

.filter-wrp-lg input {
    width: 45%;
    height: 35px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
}

.filter-wrp-lg button {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    color: white;
}

.items-wrp-lg {
    width: 100%;
}

.items-wrp-sm {
    display: none;
}

.item-wrp-lg {
    padding: 10px;
    padding-left: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.048);
    color: black;
}

.item-wrp-lg .img-box {
    min-width: 160px;
    height: 115px;
    margin-right: 10px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.034);
}

.item-wrp-lg .img-box img {
    max-height: 100%;
}

.item-wrp-lg .content-box {
    width: 100%;
}

.item-wrp-lg .content-box .item-name {
    font-weight: 500;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.item-wrp-lg .content-box .membership {
    padding: 0 4px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.048);
}

.item-wrp-lg .content-box .membership-none {
    display: none;
}

.item-wrp-lg .content-box .price {
    font-weight: 500;
    color: #D2042D;
}

@media only screen and (max-width: 991px) {

    .filter-wrp-lg {
        padding: 0;
    }

    .lg-filter {
        display: none;
    }

    .top-info {
        padding: 5px 30px;
        margin-top: 10px;
        background-color: #d2042d0a;
    }

    .btn-filter {
        width: 30px;
        height: 30px;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .filter-wrp-sm {
        width: 400px;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        background-color: rgb(241, 241, 241);
    }

    .filter-trans-enter-from , .filter-trans-leave-to {
        right: -100%;
    }

    .filter-trans-enter-active , .filter-trans-leave-active {
        transition: all .2s ease;
    }

    .filter-wrp-sm .btn-wrapper {
        width: 100%;
        margin-bottom: 30px;
        justify-content: flex-start;
    }
}

@media only screen and (max-width: 767px) {

    .top-info {
        padding: 5px 10px;
        margin: 0;
    }

    .item-wrp-lg .img-box {
        min-width: 100px;
        height: 80px;
    }
}

@media only screen and (max-width: 575px) {
    .filter-wrp-sm {
        width: 100%;
    }

    .filter-wrp-sm .btn-wrapper {
        justify-content: flex-end;
    }

    .items-wrp-lg {
        display: none;
    }

    .items-wrp-sm {
        display: inline;
        -webkit-column-count: 2;
        /* Chrome, Safari, Opera */
        -moz-column-count: 2;
        /* Firefox */
        column-count: 2;
        -webkit-column-gap: 10px;
        /* Chrome, Safari, Opera */
        -moz-column-gap: 10px;
        /* Firefox */
        column-gap: 10px;
        width: 100vw;
    }

    .items-sm {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        vertical-align: top;
        border-radius: 5px;
        display: inline-block;
        color: black;
        background-color: rgba(0, 0, 0, 0.062);
    }

    .items-sm img {
        max-width: 100%;
    }

    .items-sm .item-name {
        font-weight: 900;
        font-size: 14px;
    }

    .items-sm .price {
        font-weight: 500;
        font-size: 14px;
    }

    .items-sm .membership {
        padding: 0 4px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.048);
    }

    .items-sm div .time-status {
        font-size: 10px;
        font-weight: 300;
    }

}
</style>