<template>
    <div>
        <div class="main res-py container-xxl">
            <div class="top dis-fl jus-con-sp-bt al-it-cen">
                <div class="logo-box">
                    <router-link to="/">
                        <img class="img-fit" src="../assets/test/logo.png" alt="" />
                    </router-link>
                </div>
                <p class="pad-mar-no">Post Ad</p>
                <button class="btn-close" @click="this.$router.push('/')"></button>
            </div>
            <div class="content">
                <h1 class="title">Phones in Buy & Sell</h1>
                <p class="sub-title f-sz-sm">Fill out the form below</p>
                <div class="form">
                    <!-- condition -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Condition</label><br>
                        <div class="row">
                            <div class="dis-fl col-lg">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">Used</p>
                            </div>
                            <div class="dis-fl col-lg">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">New</p>
                            </div>
                        </div>
                    </div>
                    <!-- brand -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Brand</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- model -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Model</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- edition -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Edition (optional)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- features -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Features (optional)</label><br>
                        <div class="row">
                            <div class="col-lg">
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                                <div class="dis-fl">
                                    <input type="checkbox" name="" id="">&nbsp;
                                    <p class="pad-mar-no">4G</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- description -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Description</label><br>
                        <textarea class="form-control" name="" id="" rows="5"></textarea>
                    </div>
                    <!-- price -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Price (Rs)</label><br>
                        <input class="form-control" type="text" name="" id="">
                    </div>
                    <!-- negotiable -->
                    <div class="sec">
                        <input type="checkbox" name="" id="">&nbsp;Negotiable
                    </div><hr>
                    <div class="sec">
                        <div style="width: 100px; height: 100px; background-color: yellow;">
                            <img style="max-width: 100%;" src="" alt="">
                        </div>
                        <input type="file" name="" id="" @change="onFileChange(e)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgURL: '',
            condition: true,
            brand: true,
            model: true,
            edition: true,
            features: true,
            description: true,
            price: true,
        }
    },

    methods: {
        onFileChange(e){
            let file = e.target.files[0];
            this.imgURL = URL.createObjectURL(file);
            console.log(this.imgURL);
        }
    }

}
</script>

<style scoped>

.top {
    padding: 10px 0;
}

.top p {
    font-size: 18px;
    font-weight: 500;
}

.logo-box {
    height: 30px;
}

.content {
    min-height: 70vh;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: rgba(0, 0, 0, 0.041);
}

.title {
    text-align: center;
    font-size: 20px;
}

.sub-title {
    text-align: center;
}

.form{
    width: 700px;
    margin: 0 auto;
    margin-top: 50px;
}

.sec{
    margin-bottom: 20px;
}

label{
    margin-bottom: 10px;
}
</style>