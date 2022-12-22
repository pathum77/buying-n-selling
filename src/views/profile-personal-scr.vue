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
                    <img src="" alt="">
                </div>
                <div class="pro-det-wrapper dis-fl">
                    <div class="pro-container">
                        <div class="pro-box">
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="details">
                        <p class="name pad-mar-no">Pathum Madusanka</p>
                        <p class="username pad-mar-no f-sz-sm">@pathummadusanka</p>
                        <p class="follow pad-mar-no">5 items &nbsp; 10 followers &nbsp; 15 following</p>
                        <p class="status pad-mar-no">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
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
                            <div class="item-img-box"></div>
                            <div class="item-img-box"></div>
                        </div>
                        <div class="bid-wrp">
                            <div class="item-img-box"></div>
                            <div class="item-img-box"></div>
                        </div>
                        <div class="wish-wrp">
                            <div class="item-img-box"></div>
                            <div class="item-img-box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navi from '../components/navigation-com.vue'
export default {
    components:{
        Navi,
    },
}
</script>

<style scoped>

.left{
    width: 300px;
    height: 100vh;
    padding-top: 50px;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid rgba(0, 0, 0, 0.158);
    position: sticky;
    top: 0;
}

.btn-left-navi{
    width: 100%;
    padding: 10px 0 10px 20px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.158);
    background-color: transparent;
}

.btn-left-navi-top{
    width: 100%;
    padding: 10px 0 10px 20px;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.158);
    border-bottom: 1px solid rgba(0, 0, 0, 0.158);
    background-color: transparent;
}

.btn-left-navi img , .btn-left-navi-top img , .btn-left-navi-bottom img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.right{
    width: 100%;
    min-height: 100vh;
    /* background-color: red; */
}

.cover-img-box{
    width: 100%;
    height: 200px;
    background-color: yellow;
}

.pro-container{
    width: 150px;
    height: 100px;
    margin-right: 20px;
    position: relative;
}

.pro-box{
    width: 80px;
    height: 80px;
    border: 2px solid #D2042D;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: -10px;
    background-color: white;
}

.details .name{
    font-weight: 500;
    font-size: 18px;
}

.details .username{
    color: rgba(0, 0, 0, 0.555);
}

.details .status{
    max-width: 500px;
    margin-top: 10px;
}

.cat-items-wrapper{
    margin-top: 30px;
}

.hor-divider{
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.219);
}

.cat-items{
    margin-top: 30px;
}

.items-wrp , .wish-wrp {
    width: 100%;
}

.bid-wrp{
    width: 100%;
    margin: 0 5px;
}

.item-img-box{
    width: 100%;
    height: 200px;
    margin-bottom: 5px;
    background-color: yellow;
}

@media only screen and (max-width: 1200px) {
    .item-img-box{
        height: 180px;
    }
}

@media only screen and (max-width: 991px) {
    .left{
        display: none;
    }
}
    
</style>