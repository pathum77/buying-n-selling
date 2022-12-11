<template>
    <div class="footer">
        <div class="row">
            <div class="col-lg-4 col-md-8 items-wrapper">
                <router-link to="/">
                    <img src="../assets/test/logo.png" alt="" class="logo">
                </router-link>
                <p>Simplified digital presence</p>
                <p>Grow your business at the place you want</p>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Company</h3>
                <router-link to="/development">Development</router-link>
                <router-link to="/digital-marketing">Digital Marketing</router-link>
                <router-link to="/solutions">Solution</router-link>
                <router-link to="/clients">Clients</router-link>
                <router-link to="/affiliates">Affiliates</router-link>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Support</h3>
                <router-link to="/contact-us">Contact Us</router-link>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Careers</h3>
                <router-link to="/careers">Careers</router-link>
                <a href="/careers#internships">Internships</a>
            </div>
            <div class="col-lg-2 col-md-4 items-wrapper">
                <h3>Social</h3>
                <div class="product-items">
                    <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/octick"><div class="social"><img src="../assets/icons/facebook.png" alt=""></div></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://pin.it/6hgOmqV"><div class="social"><img src="../assets/icons/pinterest.png" alt=""></div></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/octickdigital"><div class="social"><img src="../assets/icons/insta.png" alt=""></div></a>
                </div>
            </div>
        </div>
        <hr>
        <div class="copyright-wrapper">
            <router-link to="/">&copy; 2022 OCTICK</router-link>
            <div>
                <router-link to="">Terms & Conditions</router-link>
                <p>&nbsp; | &nbsp;</p>
                <router-link to="">Privacy Policy</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}

</script>

<style scoped>

.row , .col-lg-6 , .col-lg-2 , .col-lg-4 , .col-md-4 , .col-md-8{
    padding: 0;
    margin: 0;
}

.footer p{
        font-size: 13px;
        color: white;
    }

    .footer h3{
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: white;
    }

    .footer a{
        text-decoration: none;
        margin-bottom: 10px;
        font-size: 13px;
        color: white;
    }

    .footer{
        padding: 10px 50px;
        background-color: rgba(0, 0, 0, 0.699);
    }

    .items-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .product-items{
        width: 100px;
        display: flex;
        justify-content: space-between;
    }

    .logo{
        width: 100px;
        margin-bottom: 30px;
    }

    .copyright-wrapper{
        display: flex;
        justify-content: space-between;
    }

    .copyright-wrapper div{
        display: flex;
    }

    .social{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.13);
    }

    .social img{
        max-width: 60%;
        max-height:60%;
    }

    a:hover {
    color: red;
    }


    @media only screen and (max-width: 1200px) {
        .footer{
        padding: 10px 30px;
    }
    }

    @media only screen and (max-width: 767px) {

        .footer{
        padding: 10px;
    }

        .items-wrapper{
            align-items: center;
        }
    }

</style>
