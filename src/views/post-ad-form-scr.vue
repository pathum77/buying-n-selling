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
                <h1 class="title">{{categorySub}} in {{categoryMain}}</h1>
                <p class="sub-title f-sz-sm">Fill out the form below</p>
                <div class="form">
                    <!-- district -->
                    <div class="sec">
                        <label class="f-sz-sm" for="">District</label><br>
                        <select class="form-control" name="" id="">
                            <option value="Colombo">Colombo</option>
                            <option value="Kandy">Kandy</option>
                            <option value="Galle">Galle</option>
                            <option value="Ampara">Ampara</option>
                            <option value="Anuradhapura">Anuradhapura</option>
                            <option value="Badulla">Badulla</option>
                            <option value="Batticaloa">Batticaloa</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Hambantota">Hambantota</option>
                            <option value="Jaffna">Jaffna</option>
                            <option value="Kalutara">Kalutara</option>
                            <option value="Kegalle">Kegalle</option>
                            <option value="Kilinochchi">Kilinochchi</option>
                            <option value="Kurunegala">Kurunegala</option>
                            <option value="Manner">Manner</option>
                            <option value="Matale">Matale</option>
                            <option value="Matara">Matara</option>
                            <option value="Monaragala">Monaragala</option>
                            <option value="Mullativu">Mullativu</option>
                            <option value="Nuwara Eliya">Nuwara Eliya</option>
                            <option value="Polonnaruwa">Polonnaruwa</option>
                            <option value="Puttalam">Puttalam</option>
                            <option value="Ratnapura">Ratnapura</option>
                            <option value="Trincomalee">Trincomalee</option>
                            <option value="Vavunia">Vavunia</option>
                        </select>
                    </div>
                    <!-- Type of animal -->
                    <div v-if="typeOfAnimal" class="sec">
                        <label class="f-sz-sm" for="">Type of animal</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">Bird</option>
                        </select>
                    </div>
                    <!-- property type -->
                    <div v-if="propertyType"  class="sec">
                        <label class="f-sz-sm" for="">Property type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">Building</option>
                        </select>
                    </div>
                    <!-- Bedrooms -->
                    <div v-if="bedRooms"  class="sec">
                        <label class="f-sz-sm" for="">Bedrooms</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">1</option>
                        </select>
                    </div>
                    <!-- Bathrooms -->
                    <div v-if="bathRooms"  class="sec">
                        <label class="f-sz-sm" for="">Bathrooms</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">1</option>
                        </select>
                    </div>
                    <!-- Bike type -->
                    <div v-if="bikeType" class="sec">
                        <label class="f-sz-sm" for="">Bike type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- land type -->
                    <div v-if="landType" class="sec">
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
                    <div v-if="condition" class="sec">
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
                    <div v-if="conditionRe" class="sec">
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
                    <div v-if="itemType" class="sec">
                        <label class="f-sz-sm" for="">Item type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- Land size -->
                    <div v-if="landSize" class="sec">
                        <label class="f-sz-sm" for="">Land size (perches)</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- house size -->
                    <div v-if="houseSize" class="sec">
                        <label class="f-sz-sm" for="">House size (sqft)</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- size -->
                    <div v-if="size" class="sec">
                        <label class="f-sz-sm" for="">Size (sqft)</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- Address -->
                    <div v-if="address" class="sec">
                        <label class="f-sz-sm" for="">Address (optional)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- brand -->
                    <div v-if="brand" class="sec">
                        <label class="f-sz-sm" for="">Brand</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- model -->
                    <div v-if="model" class="sec">
                        <label class="f-sz-sm" for="">Model</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- title -->
                    <div v-if="title" class="sec">
                        <label class="f-sz-sm" for="">Title</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- screen size -->
                    <div v-if="screenSize" class="sec">
                        <label class="f-sz-sm" for="">Screen size (optional)</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">23</option>
                        </select>
                    </div>
                    <!-- Capacity -->
                    <div v-if="capacity" class="sec">
                        <label class="f-sz-sm" for="">Capacity (optional)</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- edition -->
                    <div v-if="edition" class="sec">
                        <label class="f-sz-sm" for="">Edition (optional)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Year of Manufacture -->
                    <div v-if="yearOfManufacture" class="sec">
                        <label class="f-sz-sm" for="">Year of Manufacture</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Model year (km) -->
                    <div v-if="modelYear" class="sec">
                        <label class="f-sz-sm" for="">Model Year</label><br>
                        <input type="number" class="form-control" name="" id="">
                    </div>
                    <!-- Mileage (km) -->
                    <div v-if="mileage" class="sec">
                        <label class="f-sz-sm" for="">Mileage (km)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Engine capacity (cc) -->
                    <div v-if="engineCapacity"  class="sec">
                        <label class="f-sz-sm" for="">Engine capacity (cc)</label><br>
                        <input type="text" class="form-control" name="" id="">
                    </div>
                    <!-- Fuel type -->
                    <div v-if="fuelType" class="sec">
                        <label class="f-sz-sm" for="">Fuel type</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- Transmission -->
                    <div v-if="transmission" class="sec">
                        <label class="f-sz-sm" for="">Transmission</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- Body type (optional) -->
                    <div v-if="bodyType" class="sec">
                        <label class="f-sz-sm" for="">Body type (optional)</label><br>
                        <select class="form-control" name="" id="">
                            <option value="">cable</option>
                        </select>
                    </div>
                    <!-- features -->
                    <div v-if="features" class="sec">
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
            categoryMain: this.$route.params.main,
            categorySub: this.$route.params.sub,
            imgURL: null,
            typeOfAnimal: false,
            propertyType: false,
            bedRooms: false,
            bathRooms: false,
            bikeType: false,
            landType: false,
            condition: false,
            conditionRe: false,
            itemType: false,
            landSize: false,
            houseSize: false,
            size: false,
            address: false,
            brand: false,
            model: false,
            title: false,
            screenSize: false,
            capacity: false,
            edition: false,
            yearOfManufacture: false,
            modelYear: false,
            mileage: false,
            engineCapacity: false,
            fuelType: false,
            transmission: false,
            bodyType: false,
            features: false,
        }
    },

    mounted() {
        this.inpFieldVisible();
    },

    methods: {
        onFileChange() {
            let file = this.$refs.file.files[0];
            this.imgURL = URL.createObjectURL(file);
            console.log(this.imgURL);
        },

        inpFieldVisible(){
            this.$route.query.typeOfAnimal === 'true' ? this.typeOfAnimal = true : this.typeOfAnimal = false;
            this.$route.query.propertyType === 'true' ? this.propertyType = true : this.propertyType = false;
            this.$route.query.bedRooms === 'true' ? this.bedRooms = true : this.bedRooms = false;
            this.$route.query.bathRooms === 'true' ? this.bathRooms = true : this.bathRooms = false;
            this.$route.query.bikeType === 'true' ? this.bikeType = true : this.bikeType = false;
            this.$route.query.landType === 'true' ? this.landType = true : this.landType = false;
            this.$route.query.condition === 'true' ? this.condition = true : this.condition = false;
            this.$route.query.conditionRe === 'true' ? this.conditionRe = true : this.conditionRe = false;
            this.$route.query.itemType === 'true' ? this.itemType = true : this.itemType = false;
            this.$route.query.landSize === 'true' ? this.landSize = true : this.landSize = false;
            this.$route.query.houseSize === 'true' ? this.houseSize = true : this.houseSize = false;
            this.$route.query.size === 'true' ? this.size = true : this.size = false;
            this.$route.query.address === 'true' ? this.address = true : this.address = false;
            this.$route.query.brand === 'true' ? this.brand = true : this.brand = false;
            this.$route.query.model === 'true' ? this.model = true : this.model = false;
            this.$route.query.title === 'true' ? this.title = true : this.title = false;
            this.$route.query.screenSize === 'true' ? this.screenSize = true : this.screenSize = false;
            this.$route.query.capacity === 'true' ? this.capacity = true : this.capacity = false;
            this.$route.query.edition === 'true' ? this.edition = true : this.edition = false;
            this.$route.query.yearOfManufacture === 'true' ? this.yearOfManufacture = true : this.yearOfManufacture = false;
            this.$route.query.modelYear === 'true' ? this.modelYear = true : this.modelYear = false;
            this.$route.query.mileage === 'true' ? this.mileage = true : this.mileage = false;
            this.$route.query.engineCapacity === 'true' ? this.engineCapacity = true : this.engineCapacity = false;
            this.$route.query.fuelType === 'true' ? this.fuelType = true : this.fuelType = false;
            this.$route.query.transmission === 'true' ? this.transmission = true : this.transmission = false;
            this.$route.query.bodyType === 'true' ? this.bodyType = true : this.bodyType = false;
            this.$route.query.features === 'true' ? this.features = true : this.features = false;
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