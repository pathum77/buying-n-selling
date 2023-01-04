<template>
    <div>
        <Navi />
        <div class="main res-py dis-fl container-xxl">
            <div class="left">
                <button class="btn-left-navi-top pad-mar-no dis-fl al-it-cen">
                    <img src="../assets/icons/chat-theme.png" alt="">
                    <p class="pad-mar-no">Message</p>
                </button>
                <button class="btn-left-navi pad-mar-no dis-fl al-it-cen">
                    <img src="../assets/icons/chat-theme.png" alt="">
                    <p class="pad-mar-no">Notification</p>
                </button>
                <button class="btn-left-navi pad-mar-no dis-fl al-it-cen">
                    <img src="../assets/icons/chat-theme.png" alt="">
                    <p class="pad-mar-no">Manage</p>
                </button>
            </div>
            <div class="right">
                <div class="cover-img-box">
                    <img src="../assets/test/cover-img-test.jpg" alt="">
                </div>
                <div class="pro-det-wrapper dis-fl">
                    <div class="pro-container">
                        <div class="pro-box dis-fl jus-con-cen al-it-cen">
                            <img class="img-fit" src="../assets/test/logo.png" alt="">
                        </div>
                    </div>
                    <div class="details">
                        <p class="name pad-mar-no">Pathum Madusanka</p>
                        <p class="username pad-mar-no f-sz-sm">@pathummadusanka</p>
                        <p class="follow pad-mar-no">5 items &nbsp; 10 followers &nbsp; 15 following</p>
                        <div class="count-mob dis-fl jus-con-sp-bt">
                            <div class="count-item dis-fl al-it-cen">
                                <p class="pad-mar-no">10</p>
                                <p class="pad-mar-no">items</p>
                            </div>
                            <div class="count-item dis-fl al-it-cen">
                                <p class="pad-mar-no">10</p>
                                <p class="pad-mar-no">followers</p>
                            </div>
                            <div class="count-item dis-fl al-it-cen">
                                <p class="pad-mar-no">10</p>
                                <p class="pad-mar-no">following</p>
                            </div>
                        </div>
                        <p class="status pad-mar-no">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </div>
                <div class="cat-items-wrapper">
                    <div class="items-bid-wishl-wrapper dis-fl jus-con-cen">
                        <p style="margin: 0 30px;" class="pad-mar-no">Items</p>
                        <p style="margin: 0 30px;" class="pad-mar-no">Bids</p>
                        <p style="margin: 0 30px;" class="pad-mar-no">Wishlist</p>
                    </div>
                    <div class="hor-divider"></div>
                    <div class="cat-items dis-fl">
                        <div class="items-wrp">
                            <div class="item-img-box">
                                <img src="../assets/test/sample-ad-2.jpg" alt="">
                            </div>
                            <div class="item-img-box">
                                <img src="../assets/test/huawei-nova-2i.png" alt="">
                            </div>
                        </div>
                        <div class="bid-wrp">
                            <div class="item-img-box">
                                <img src="../assets/test/huawei-nova-2i.png" alt="">
                            </div>
                            <div class="item-img-box">
                                <img src="../assets/test/huawei-nova-2i.png" alt="">
                            </div>
                        </div>
                        <div class="wish-wrp">
                            <div class="item-img-box">
                                <img src="../assets/test/ads_sample.jpg" alt="">
                            </div>
                            <div class="item-img-box">
                                <img src="../assets/test/sample-ad-2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bot-navi-mob-wrapper">
            <button class="pad-mar-no dis-fl jus-con-cen al-it-cen">
                <img src="../assets/icons/chat-theme.png" alt="">
                <p class="pad-mar-no">Notification</p>
            </button>
            <div style="width: 1px; height: 80%; background-color: rgba(0, 0, 0, 0.171); margin: auto 0;"></div>
            <button class="pad-mar-no dis-fl jus-con-cen al-it-cen">
                <img src="../assets/icons/chat-theme.png" alt="">
                <p class="pad-mar-no">Chat</p>
            </button>
            <div style="width: 1px; height: 80%; background-color: rgba(0, 0, 0, 0.171); margin: auto 0;"></div>
            <button class="pad-mar-no dis-fl jus-con-cen al-it-cen">
                <img src="../assets/icons/chat-theme.png" alt="">
                <p class="pad-mar-no">Manage</p>
            </button>
            <div style="width: 1px; height: 80%; background-color: rgba(0, 0, 0, 0.171); margin: auto 0;"></div>
            <button class="pad-mar-no dis-fl jus-con-cen al-it-cen">
                <img src="../assets/icons/chat-theme.png" alt="">
                <p class="pad-mar-no">Search</p>
            </button>
        </div>
    </div>
</template>

<script>
import Navi from '../components/navigation-com.vue'
export default {
    components: {
        Navi,
    },
}
</script>

<style scoped>
.left {
    width: 300px;
    height: 100vh;
    padding-top: 50px;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid rgba(0, 0, 0, 0.158);
    position: sticky;
    top: 0;
}

.btn-left-navi {
    width: 100%;
    padding: 10px 0 10px 20px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.158);
    background-color: transparent;
}

.btn-left-navi-top {
    width: 100%;
    padding: 10px 0 10px 20px;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.158);
    border-bottom: 1px solid rgba(0, 0, 0, 0.158);
    background-color: transparent;
}

.btn-left-navi img,
.btn-left-navi-top img,
.btn-left-navi-bottom img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.right {
    width: 100%;
    min-height: 100vh;
    /* background-color: red; */
}

.cover-img-box {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-color: yellow;
}

.cover-img-box img {
    width: 100%;
}

.pro-container {
    width: 150px;
    height: 100px;
    margin-right: 20px;
    position: relative;
}

.pro-box {
    width: 80px;
    height: 80px;
    border: 2px solid #D2042D;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: -10px;
    background-color: white;
    overflow: hidden;
}

.details .name {
    font-weight: 500;
    font-size: 18px;
}

.details .username {
    color: rgba(0, 0, 0, 0.555);
}

.count-mob {
    margin-top: 10px;
    display: none;
}

.count-mob .count-item {
    flex-direction: column;
}

.details .status {
    max-width: 500px;
    margin-top: 10px;
}

.cat-items-wrapper {
    margin-top: 30px;
}

.hor-divider {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.219);
}

.cat-items {
    margin-top: 30px;
}

.items-wrp,
.wish-wrp {
    width: 100%;
}

.bid-wrp {
    width: 100%;
    margin: 0 5px;
}

.item-img-box {
    width: 100%;
    height: 200px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.082);
    overflow: hidden;
}

.item-img-box img {
    width: 100%;
    ;
}

.bot-navi-mob-wrapper {
    display: none;
}

@media only screen and (max-width: 1200px) {
    .item-img-box {
        height: 180px;
    }

    .cover-img-box {
        height: 170px;
    }
}

@media only screen and (max-width: 991px) {
    .left {
        display: none;
    }

    .cover-img-box {
        height: 160px;
    }

    .bot-navi-mob-wrapper {
        width: 100%;
        height: 45px;
        background-color: white;
        border-top: 1px solid rgba(0, 0, 0, 0.171);
        display: flex;
        justify-content: space-evenly;
        position: sticky;
        bottom: 0;
        left: 0;
    }

    .bot-navi-mob-wrapper button {
        width: 100%;
        border: none;
        background-color: transparent;
    }

    .bot-navi-mob-wrapper button img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
}

@media only screen and (max-width: 767px) {
    .details .status {
        width: 100%;
    }

    .cover-img-box {
        height: 150px;
    }

    .pro-box {
        top: 10px;
        left: 0;
    }

    .follow {
        display: none;
    }

    .count-mob {
        display: flex;
    }
}

@media only screen and (max-width: 575px) {
    .cover-img-box {
        height: 100px;
    }

    .item-img-box {
        height: 140px;
    }

    .bot-navi-mob-wrapper button p {
        display: none;
    }

    .bot-navi-mob-wrapper button img {
        margin: 0;
    }
}

@media only screen and (max-width: 470px) {
    .item-img-box {
        height: 120px;
    }
}

@media only screen and (max-width: 400px) {
    .item-img-box {
        height: 100px;
    }
}
</style>