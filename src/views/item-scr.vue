<template>
    <div>
        <Navi />
        <div class="main res-py container-xxl">
            <div class="img-con-wrp row pad-mar-no mar-bet-sec">
                <div class="main-img-wrapper col-lg-8 pad-mar-no">
                    <div class="main-img-box dis-fl jus-con-cen al-it-cen">
                        <img src="../assets/test/ads_sample.jpg" alt="">
                    </div>
                    <div class="sub-images-wrapper dis-fl al-it-cen">
                        <div class="btn-left-box">
                            <img class="img-fit" src="../assets/icons/backward_theme.png" alt="">
                        </div>
                        <div class="imgs-wrp dis-fl">
                            <div class="img dis-fl jus-con-cen al-it-cen">
                                <img class="img-fit" src="../assets/test/ads_sample.jpg" alt="">
                            </div>
                            <div class="img dis-fl jus-con-cen al-it-cen">
                                <img class="img-fit" src="../assets/test/ads_sample.jpg" alt="">
                            </div>
                            <div class="img dis-fl jus-con-cen al-it-cen">
                                <img class="img-fit" src="../assets/test/ads_sample.jpg" alt="">
                            </div>
                            <div class="img dis-fl jus-con-cen al-it-cen">
                                <img class="img-fit" src="../assets/test/ads_sample.jpg" alt="">
                            </div>
                            <div class="img dis-fl jus-con-cen al-it-cen">
                                <img class="img-fit" src="../assets/test/ads_sample.jpg" alt="">
                            </div>
                            <div class="img dis-fl jus-con-cen al-it-cen">
                                <img class="img-fit" src="../assets/test/ads_sample.jpg" alt="">
                            </div>
                        </div>
                        <div class="btn-right-box">
                            <img class="img-fit" src="../assets/icons/forward_theme.png" alt="">
                        </div>
                    </div>
                    <div class="price-desc-wrapper">
                        <p class="price pad-mar-no f-col-theme">Rs 100,000</p><br>
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
                    </div>
                </div>
                <div class="con-det-wrapper col-lg-4 pad-mar-no">
                    <button class="con-box pad-mar-no dis-fl">
                        <div class="icon col-theme dis-fl jus-con-cen al-it-cen">
                            <img src="../assets/icons/phone-white.png" alt="">
                        </div>
                        <div class="content dis-fl jus-con-sp-bt">
                            <p class="pad-mar-no">077XXXXXXXX</p>
                            <p class="pad-mar-no f-sz-sm">Click to show phone number</p>
                        </div>
                    </button>
                    <button class="con-box pad-mar-no dis-fl">
                        <div class="icon col-theme dis-fl jus-con-cen al-it-cen">
                            <img src="../assets/icons/chat-white.png" alt="">
                        </div>
                        <div class="content dis-fl jus-con-cen">
                            <p class="pad-mar-no">Chat</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="con-det-wrp-mob dis-fl jus-con-sp-bt al-it-cen">
            <button class="dis-fl pad-mar-no col-theme al-it-cen jus-con-cen">
                <img class="icn-phone" src="../assets/icons/phone-white.png" alt="">
                <p class="pad-mar-no">Call</p>
            </button>
            <button class="dis-fl pad-mar-no col-theme al-it-cen jus-con-cen">
                <img class="icn-chat" src="../assets/icons/chat-white.png" alt="">
                <p class="pad-mar-no">Chat</p>
            </button>
        </div>
    </div>
</template>

<script>
import Navi from '../components/navigation-com.vue'

export default {

    components: {
        Navi,
    }

}
</script>

<style scoped>

.main-img-box {
    width: 100%;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.11);
}

.main-img-box img {
    max-width: 100%;
}

.btn-left-box, .btn-right-box{
    width: 15px;
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
}

.imgs-wrp::-webkit-scrollbar{
    height: 0px;
}

.imgs-wrp .img {
    min-width: 100px;
    height: 90px;
    margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.103);
}

.con-det-wrapper {
    padding-left: 20px;
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

.price-desc-wrapper .price {
    font-weight: 700;
    font-size: 30px;
}

.price-desc-wrapper .features {
    font-weight: 500;
}

.con-det-wrp-mob button {
    display: none;
}

@media only screen and (max-width: 767px) {

    .btn-right-box,
    .btn-left-box {
        display: none;
    }

    .sub-images-wrapper {
        width: 450px;
    }

    .price-desc-wrapper .price {
        font-size: 20px;
    }
}

@media only screen and (max-width: 575px) {
    .con-det-wrapper {
        display: none;
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

    .icn-phone{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .icn-chat{
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
}
</style>