<template>
    <div>
        <Navi />
        <div class="main res-py container-xxl">
            <div class="cov-pro-img-wrp">
                <div class="cov-img-box">
                    <img src="../assets/test/cover-img-test.jpg" alt="">
                </div>
                <div class="pro-img-con dis-fl jus-con-cen">
                    <div class="pro-img-box">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
            <div class="item-info-wrp dis-fl">
                <div class="info-box">
                    <div class="info-1">
                        <p class="name pad-mar-no">Next Mobile</p>
                        <p class="status pad-mar-no">Click to the future</p>
                        <span class="membership pad-mar-no">MEMBER</span>
                        <p class="member-since pad-mar-no f-sz-sm">Member since june 2017</p>
                    </div>
                    <div class="info-2 dis-fl al-it-cen">
                        <div class="icn">
                            <img class="img-fit" src="../assets/icons/phone-theme.png" alt="">
                        </div>
                        <p class="pad-mar-no">077XXXXXXX</p>
                    </div>
                    <div class="info-2 dis-fl al-it-cen">
                        <div class="icn">
                            <img class="img-fit" src="../assets/icons/chat-theme.png" alt="">
                        </div>
                        <p class="pad-mar-no">Chat</p>
                    </div>
                    <div class="info-2 dis-fl">
                        <div class="icn">
                            <img class="img-fit" src="../assets/icons/phone-theme.png" alt="">
                        </div>
                        <p class="pad-mar-no">Gampaha, Sri Lanka.</p>
                    </div>
                    <div class="info-3">
                        <p class="pad-mar-no">We are the leading mobile dealer of Gampaha , Giving the sustainable value
                            for the customers.</p>
                    </div>
                </div>
                <div class="items-wrp-lg">
                    <div class="search-box dis-fl al-it-cen">
                        <div class="inp-srch-box">
                            <input type="text" name="" id="">
                        </div>
                        <button class="btn-srch-box pad-mar-no">
                            <img src="../assets/icons/search-white.png" alt="">
                        </button>
                    </div>
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
            </div><br>
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
    },

}
</script>

<style scoped>
.cov-pro-img-wrp {
    width: 100%;
    /* height: 400px; */
    margin-bottom: 20px;
    position: relative;
}

.cov-img-box {
    width: 100%;
    /* height: 360px; */
    padding-bottom: 40px;
    overflow: hidden;
}

.cov-img-box img {
    width: 100%;
}

.pro-img-con {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
}

.pro-img-box {
    width: 80px;
    height: 80px;
    border: 2px solid #D2042D;
    border-radius: 50%;
    background-color: white;
}

.info-box {
    width: 300px;
}

.items-box {
    width: 100%;
    padding-left: 20px;
}

.info-box .info-1 {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.137);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.info-box .info-1 .name {
    font-size: 18px;
    font-weight: 500;
}

.info-box .info-1 .status {
    color: grey;
}

.info-box .info-1 .membership {
    font-size: 10px;
    padding: 1px 5px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.137);
}

.info-box .info-1 .member-since {
    font-weight: 500;
}

.info-box .info-2 {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.137);
    border-top: none;
}

.icn {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.info-box .info-3 {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.137);
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.main {
    min-height: 100vh;
    margin: 0 auto;
}

.items-wrp-lg {
    width: 100%;
    padding-left: 10px;
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

.search-box{
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.219);
    border-radius: 25px;
}

.search-box .inp-srch-box{
    width: 100%;
}

.search-box .inp-srch-box input{
    width: 100%;
    height: 50px;
    padding: 20px;
    border-radius: 25px;
    outline: none;
    border: none;
}

.search-box .btn-srch-box{
    width: 42px;
    height: 42px;
    margin-right: 5px;
    border-radius: 50%;
    border: none;
    background-color: #D2042D ;
}

.search-box .btn-srch-box img{
    max-width: 70%;
}

@media only screen and (max-width: 767px) {

    .item-info-wrp {
        flex-direction: column;
    }

    .info-box {
        width: 100%;
    }

    .items-wrp-lg {
        padding: 0;
        margin-top: 20px;
    }

    .item-wrp-lg .img-box {
        min-width: 100px;
        height: 80px;
    }
}

@media only screen and (max-width: 575px) {

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