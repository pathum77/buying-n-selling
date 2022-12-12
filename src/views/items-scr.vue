<template>
    <div>
        <div class="main pad-mar-no container-xxl">
            <Navi />
            <div class="top-info dis-fl res-py">
                <a class="a-txt-dec-no f-sz-sm dis-fl al-it-cen" href="">
                    <img src="../assets/icons/backward_theme.png" alt="">
                    <p class="pad-mar-no">Back to Home</p>
                </a>
            </div><br>
            <div class="items-filter-lg-wrapper dis-fl jus-con-sp-bt res-py">
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
                <div class="items-wrp-lg">
                    <a href="" class="item-wrp-lg dis-fl a-txt-dec-no">
                        <div class="img-box dis-fl jus-con-cen">
                            <img src="../assets/test/ads_sample.jpg" alt="">
                        </div>
                        <div class="content-box">
                            <p class="item-name pad-mar-no">HP Middle EastHP Laptop 15s-eq1081nia</p>
                            <span class="membership pad-mar-no f-sz-sm">MEMBER</span>
                            <p class="pad-mar-no">Kandy</p>
                            <p class="price pad-mar-no">Rs 10,000</p>
                            <div class="dis-fl jus-con-sp-bt al-it-cen f-sz-sm">
                                <p class="pad-mar-no"></p>
                                <p class="pad-mar-no">Yesterday</p>
                            </div>
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

    components: {
        Navi,
    }

}
</script>

<style scoped>




.main {
    min-height: 100vh;
    margin: 0 auto;
}

.top-info a{
    color: #D2042D;
}

.top-info a img{
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

.filter-wrp-lg input{
    width: 45%;
    height: 35px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
}

.filter-wrp-lg button{
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

.item-wrp-lg{
    padding: 10px;
    padding-left: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.048);
    color: black;
}

.item-wrp-lg .img-box{
    min-width: 160px;
    height: 115px;
    margin-right: 10px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.034);
}

.item-wrp-lg .img-box img{
    max-height: 100%;
}

.item-wrp-lg .content-box{
    width: 100%;
}

.item-wrp-lg .content-box .item-name{
    font-weight: 500;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
 
.item-wrp-lg .content-box .membership{
    padding: 0 4px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.048);
}

.item-wrp-lg .content-box .price{
    font-weight: 500;
    color: #D2042D;
}

@media only screen and (max-width: 991px) {
    .filter-wrp-lg{
        display: none;
    }
}

</style>