<template>
  <div>
    <div class="main res-py dis-fl jus-con-sp-bt container-xxl">
      <div class="le dis-fl">
        <div class="logo-box">
          <img src="" alt="" />
        </div>
        <div class="srch-wrapper dis-fl al-it-cen">
          <input class="inp-srch" type="text" name="" id="" placeholder="Search">
          <div style="width: 1px; height: 80%; background-color: rgba(0, 0, 0, 0.100);"></div>
          <button class="btn-srch-filter">Select</button>
          <button class="btn-srch">Search</button>
        </div>
        <button class="btn-location">Sri Lanka</button>
      </div>
      <div class="ri dis-fl jus-con-sp-bt al-it-cen">
        <div class="dis-fl">
          <a class="a-log-reg a-txt-dec-no" href="">Register</a>
          <p class="pad-mar-no">&nbsp;or&nbsp;</p>
          <a class="a-log-reg a-txt-dec-no" href="">Sign In</a>
        </div>
        <div>
          <a class="a-post-ad a-txt-dec-no col-theme trans-low" href="">Post ad</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  padding-top: 10px;
  padding-bottom: 10px;
}

.le {
  width: 75%;
  /* background-color: red; */
}

.ri {
  width: 250px;
}

.logo-box {
  min-width: 100px;
  height: 40px;
  margin-right: 30px;
  background-color: yellow;
}

.a-log-reg{
  font-weight: 500;
  
}

.a-post-ad{
  font-weight: 500;
  padding: 9px 10px;
  border-radius: 5px;
  color: white;
}

.a-post-ad:hover{
  box-shadow: 0px 1px 10px rgba(145, 0, 0, 0.267);
}

.srch-wrapper{
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.288);
  border-radius: 5px;
}

.inp-srch{
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  outline: none;
}

.btn-srch-filter{
  min-width: 170px;
  height: 100%;
  border: none;
  background-color: transparent;
}

.btn-srch{
  min-width: 100px;
  height: 100%;
  border: none;
  background-color: transparent;
  border-left: 1px solid rgba(0, 0, 0, 0.288);
}

.btn-location{
  min-width: 150px;
  height: 100%;
  margin-left: 30px;
  border: none;
  background-color: transparent;
}
</style>
