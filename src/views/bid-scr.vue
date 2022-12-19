<template>
    <div>
        <Navi />
        <div class="main res-py container-xxl">
            <div class="img-con-wrp row pad-mar-no mar-bet-sec">
                <div class="main-img-wrapper col-lg-8 pad-mar-no">
                    <div class="main-img-box dis-fl jus-con-cen al-it-cen">
                        <img :src="require('../assets/test/' + mainImage + '')" alt="">
                    </div>
                    <div class="sub-images-wrapper dis-fl al-it-cen">
                        <button @click="imgPrev()" class="btn-left-box pad-mar-no">
                            <img class="img-fit" src="../assets/icons/backward_theme.png" alt="">
                        </button>
                        <div class="imgs-wrp dis-fl" id="sub-imgs-wrp">
                            <button v-for="(item, index) in subImages" :key="index" @click="subImageClick(index)"
                                :class="item.isSelected === true ? 'img-selected dis-fl jus-con-cen al-it-cen pad-mar-no' : 'img dis-fl jus-con-cen al-it-cen pad-mar-no'">
                                <img :src="require('../assets/test/' + item.imgURL + '')" alt="">
                            </button>
                        </div>
                        <button @click="imgNext()" class="btn-right-box pad-mar-no">
                            <img class="img-fit" src="../assets/icons/forward_theme.png" alt="">
                        </button>
                    </div>
                    <div class="price-desc-wrapper">
                        <p class="item-name pad-mar-no">Huawei Nova 2i</p>
                        <p class="pad-mar-no f-sz-sm">Posted on 16 Dec 11:51 am, Jaffna City</p>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">
                                <div style="display: flex; align-items: flex-end;">
                                    <p style="padding-bottom: 3px;" class="pad-mar-no">Current Bid:</p>&nbsp;
                                    <p class="price pad-mar-no f-col-theme">Rs 100,000</p>
                                </div>
                                <div style="display: flex; align-items: flex-end;">
                                    <p style="padding-bottom: 2px;" class="pad-mar-no">Started from:</p>&nbsp;
                                    <p class="current-bid-price pad-mar-no">Rs 100,000</p>
                                    <p class="f-sz-sm">[10 bids]</p>
                                </div><br>
                                <button v-if="!bidInputIsVisible" @click="bidInputVisible()"
                                    class="btn-place-bid pad-mar-no col-theme">Place a Bid</button>
                                <transition name="bid-input-trans">
                                    <div v-if="bidInputIsVisible" class="bid-inp-wrapper">
                                        <label for="">Please enter your amount</label>
                                        <input class="form-control" type="text" name="" id=""><br>
                                        <button class="btn-place-bid pad-mar-no col-theme">Place Bid</button>
                                    </div>
                                </transition>
                            </div>
                            <div class="bid-places-mob col-md-6">
                                <div class="bid-places-wrapper">
                                    <p class="top-bids-head">Top Bids</p>
                                    <hr>
                                    <div class="bid-place-box dis-fl jus-con-sp-bt">
                                        <div class="icn-name-wrp dis-fl">
                                            <div class="icn">
                                                <img class="img-fit" src="../assets/icons/place-badge-1st.png" alt="">
                                            </div>
                                            <p class="name pad-mar-no">P*******</p>

                                        </div>
                                        <p class="bid-price">Rs 10,000</p>
                                    </div>
                                    <div class="bid-place-box dis-fl jus-con-sp-bt">
                                        <div class="icn-name-wrp dis-fl">
                                            <div class="icn">
                                                <img class="img-fit" src="../assets/icons/place-badge-2nd.png" alt="">
                                            </div>
                                            <p class="name pad-mar-no">P*******</p>

                                        </div>
                                        <p class="bid-price">Rs 10,000</p>
                                    </div>
                                    <div class="bid-place-box dis-fl jus-con-sp-bt">
                                        <div class="icn-name-wrp dis-fl">
                                            <div class="icn">
                                                <img class="img-fit" src="../assets/icons/place-badge-3rd.png" alt="">
                                            </div>
                                            <p class="name pad-mar-no">P*******</p>

                                        </div>
                                        <p class="bid-price">Rs 10,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <p class="pad-mar-no">Condition: Used</p>
                        <p class="pad-mar-no">Model: iPhone 11</p>
                        <p class="pad-mar-no">Brand: Apple</p>
                        <p class="pad-mar-no">Edition: 64GB</p><br>
                        <p class="features pad-mar-no">Features</p>
                        <p>Camera, Bluetooth</p>
                        <p class="features pad-mar-no">Description</p>
                        <p class="pad-mar-no">
                            iPhone 11 64GB Full set same Imei Box
                        </p><br>
                        <div class="seller-info-mob">
                            <p class="features pad-mar-no">About Seller</p>
                            <p class="pad-mar-no">Pathum Madusanka</p>
                        </div><br>
                    </div>
                </div>
                <div class="con-det-wrapper col-lg-4 pad-mar-no">
                    <div class="seller-info">
                        <p class="pad-mar-no"><b>About Seller</b></p>
                        <p>Pathum Madusanka</p>
                    </div>
                    <div class="bid-place-pc">
                        <div class="bid-places-wrapper">
                            <p class="top-bids-head">Top Bids</p>
                            <hr>
                            <div class="bid-place-box dis-fl jus-con-sp-bt">
                                <div class="icn-name-wrp dis-fl">
                                    <div class="icn">
                                        <img class="img-fit" src="../assets/icons/place-badge-1st.png" alt="">
                                    </div>
                                    <p class="name pad-mar-no">P*******</p>

                                </div>
                                <p class="bid-price">Rs 10,000</p>
                            </div>
                            <div class="bid-place-box dis-fl jus-con-sp-bt">
                                <div class="icn-name-wrp dis-fl">
                                    <div class="icn">
                                        <img class="img-fit" src="../assets/icons/place-badge-2nd.png" alt="">
                                    </div>
                                    <p class="name pad-mar-no">P*******</p>

                                </div>
                                <p class="bid-price">Rs 10,000</p>
                            </div>
                            <div class="bid-place-box dis-fl jus-con-sp-bt">
                                <div class="icn-name-wrp dis-fl">
                                    <div class="icn">
                                        <img class="img-fit" src="../assets/icons/place-badge-3rd.png" alt="">
                                    </div>
                                    <p class="name pad-mar-no">P*******</p>

                                </div>
                                <p class="bid-price">Rs 10,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="img-preview-box">
                <div class="close-wrp dis-fl">
                    <button class="btn-close btn-close-white"></button>
                </div>
                <div class="btns-img-wrapper dis-fl al-it-cen">
                    <button class="pad-mar-no">
                        <img src="" alt="">
                    </button>
                    <div class="main-img-box">

                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import Navi from '../components/navigation-com.vue'

export default {

    data() {
        return {
            mainImage: '',
            subImages: [
                { imgURL: 'ads_sample.jpg', isSelected: false },
                { imgURL: 'house.png', isSelected: false },
                { imgURL: 'huawei-nova-2i.png', isSelected: false },
                { imgURL: 'sample-ad-2.jpg', isSelected: false },
                { imgURL: 'ads_sample.jpg', isSelected: false },
                { imgURL: 'house.png', isSelected: false },
                { imgURL: 'huawei-nova-2i.png', isSelected: false },
                { imgURL: 'sample-ad-2.jpg', isSelected: false },
                { imgURL: 'ads_sample.jpg', isSelected: false },
                { imgURL: 'house.png', isSelected: false },
            ],
            currentIndex: '',
            bidInputIsVisible: false,
        }
    },

    components: {
        Navi,
    },

    created() {
        this.setMainImg();
    },

    methods: {
        setMainImg() {
            this.mainImage = this.subImages[0].imgURL;
            this.subImages[0].isSelected = true;
            this.currentIndex = 0;
        },

        subImageClick(index) {
            for (let i = 0; i < this.subImages.length; i++) {
                this.subImages[i].isSelected = false;
            }
            this.subImages[index].isSelected = true;
            this.mainImage = this.subImages[index].imgURL;
            this.currentIndex = index;
        },

        imgPrev() {
            document.getElementById("sub-imgs-wrp").scrollBy(-400, 0);
        },

        imgNext() {
            document.getElementById("sub-imgs-wrp").scrollBy(400, 0);
        },

        bidInputVisible() {
            this.bidInputIsVisible = !this.bidInputIsVisible;
        }
    },
}
</script>

<style scoped>
.top-bids-head {
    font-weight: 500;
    font-size: 20px;
}

.seller-info-mob {
    display: none;
}

.bid-places-mob {
    display: none;
}

.img-preview-box {
    width: 100%;
    height: 100%;
    padding: 50px;
    background-color: grey;
    position: fixed;
    top: 0;
    left: 0;
}

.img-preview-box .close-wrp {
    justify-content: flex-end;
}

.img-preview-box .btns-img-wrapper button {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
}

.main-img-box {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
    /* background-color: rgba(0, 0, 0, 0.11); */
}

.main-img-box img {
    max-width: 100%;
    max-height: 100%;
}

.btn-left-box,
.btn-right-box {
    width: 15px;
    border: none;
    background-color: transparent;
}

.sub-images-wrapper {
    width: 550px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
}

.imgs-wrp {
    width: 100%;
    overflow: auto;
    scroll-behavior: smooth;
}

.imgs-wrp::-webkit-scrollbar {
    height: 0px;
}

.imgs-wrp .img {
    min-width: 100px;
    height: 90px;
    margin: 0 5px;
    border: none;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.103);
    transition: .1s;
}

.imgs-wrp .img-selected {
    min-width: 100px;
    height: 90px;
    margin: 0 5px;
    border: 3px solid #D2042D;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.103);
    transition: .1s;
}

.imgs-wrp .img img,
.imgs-wrp .img-selected img {
    max-height: 100%;
}

.con-det-wrapper {
    padding-left: 20px;
}

.bid-place-box {
    border-bottom: 1px solid rgba(0, 0, 0, 0.123);
}

.bid-places-wrapper .icn-name-wrp .icn {
    width: 30px;
    height: 30px;
}

.con-det-wrapper .con-box {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.123);
    border-top: 1px solid rgba(0, 0, 0, 0.123);
    background-color: transparent;
}

.con-det-wrapper .con-box .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.con-det-wrapper .con-box .icon img {
    max-width: 50%;
}

.con-det-wrapper .con-box .content {
    flex-direction: column;
    align-items: flex-start;
}

.price-desc-wrapper .item-name {
    font-weight: 700;
    font-size: 30px;
}

.price-desc-wrapper .price {
    font-weight: 700;
    font-size: 25px;
}

.price-desc-wrapper .current-bid-price {
    font-weight: 700;
    font-size: 20px;
}

.bid-inp-wrapper {
    width: 250px;
}

.price-desc-wrapper .features {
    font-weight: 500;
}

.con-det-wrp-mob {
    display: none;
}

.btn-place-bid {
    padding: 5px;
    border: none;
    color: white;
    font-weight: 500;
    border-radius: 5px;
}

@media only screen and (max-width: 991px) {
    .con-det-wrapper {
        padding: 0;
    }

    .con-det-wrapper {
        display: none;
    }

    .bid-places-mob {
        display: block;
    }
}

@media only screen and (max-width: 767px) {

    .btn-right-box,
    .btn-left-box {
        display: none;
    }

    .sub-images-wrapper {
        width: 450px;
    }

    .price-desc-wrapper .item-name {
        font-size: 25px;
    }

    .price-desc-wrapper .price {
        font-size: 20px;
    }
}

@media only screen and (max-width: 575px) {

    .seller-info-mob {
        display: block;
    }

    .sub-images-wrapper {
        width: 100%;
    }

    .con-det-wrp-mob {
        width: 100%;
        height: 60px;
        padding: 10px;
        background-color: white;
        border-top: 1px solid rgba(0, 0, 0, 0.151);
        display: flex;
        position: sticky;
        bottom: 0;
        left: 0;
    }

    .con-det-wrp-mob button {
        width: 49%;
        height: 100%;
        border: none;
        border-radius: 5px;
        font-weight: 900;
        color: white;
    }

    .icn-phone {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .icn-chat {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
}

.bid-input-trans-enter-from{
    opacity: 0;
}

.bid-input-trans-enter-active{
    transition: all .2s ease;
}
</style>