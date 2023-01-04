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
                    <!-- Type of animal -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Type of animal</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">Bird</option>
                        </select>
                    </div>
                    <!-- property type -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Property type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">Building</option>
                        </select>
                    </div>
                    <!-- Bedrooms -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Bedrooms</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">1</option>
                        </select>
                    </div>
                    <!-- Bathrooms -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Bathrooms</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">1</option>
                        </select>
                    </div>
                    <!-- Bike type -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Bike type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- land type -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Land type</label><br>
                        <div class="row">
                            <div class="dis-fl col-lg-6">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">Agricultural</p>
                            </div>
                            <div class="dis-fl col-lg-6">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">Residential</p>
                            </div>
                            <div class="dis-fl col-lg-6">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">Commercial</p>
                            </div>
                            <div class="dis-fl col-lg-6">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">Other</p>
                            </div>
                        </div>
                    </div>
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
                    <!-- condition recon-->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Condition</label><br>
                        <div class="row">
                            <div class="dis-fl col-lg-6">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">Used</p>
                            </div>
                            <div class="dis-fl col-lg-6">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">New</p>
                            </div>
                            <div class="col-lg-6"></div>
                            <div class="dis-fl col-lg-6">
                                <input type="radio" name="condition" id="">&nbsp;
                                <p class="pad-mar-no">Reconditioned</p>
                            </div>
                        </div>
                    </div>
                    <!-- item type -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Item type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- Land size -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Land size (perches)</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- house size -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">House size (sqft)</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- size -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Size (sqft)</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- Address -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Address (optional)</label><br>
                        <input type="text" class="form-control" name="" id="">
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
                    <!-- title -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Title</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- screen size -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Screen size (optional)</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">23</option>
                        </select>
                    </div>
                    <!-- Capacity -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Capacity (optional)</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- edition -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Edition (optional)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Year of Manufacture -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Year of Manufacture</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Model year (km) -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Model Year</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- Mileage (km) -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Mileage (km)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Engine capacity (cc) -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Engine capacity (cc)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Fuel type -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Fuel type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- Transmission -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Transmission</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- Body type (optional) -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">Body type (optional)</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
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
                    </div>
                    <hr>
                    <div class="sec">
                        <p>add photos</p>
                        <label class="pho-pre dis-fl jus-con-cen al-it-cen" for="upload-photo">
                            <img :src="imgURL" alt="">
                        </label>
                        <input class="test" type="file" name="" id="upload-photo" @change="onFileChange" ref="file">
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgURL: null,
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
        onFileChange() {
            let file = this.$refs.file.files[0];
            this.imgURL = URL.createObjectURL(file);
            console.log(this.imgURL);
        }
    }

}
</script>

<style scoped>

.row{
    padding: 0;
    margin: 0;
}

.test {
    opacity: 0;
    position: absolute;
    z-index: -1;
}

.pho-pre {
    width: 80px;
    height: 80px;
    cursor: pointer;
    border: 1px solid black
}

.pho-pre img {
    max-width: 100%;
    max-height: 100%;
}

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

.form {
    width: 700px;
    margin: 0 auto;
    margin-top: 50px;
}

.sec {
    margin-bottom: 20px;
}

label {
    margin-bottom: 10px;
}

@media only screen and (max-width: 991px) {
    .form {
        width: 100%;
    }
}
</style>