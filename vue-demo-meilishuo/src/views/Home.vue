<template>
  <div class="home-container">
    <head-search></head-search>

    <div class="content-container">
      <div class="home-one">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/images/silder/silder-01.png"></div>
                <div class="swiper-slide"><img src="../assets/images/silder/silder-02.png"></div>
                <div class="swiper-slide"><img src="../assets/images/silder/silder-03.png"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="circle-imgbox">
          <ul class="imgbox-list">
            <li class="list-item">
              <a href="#">
                <div class="list-item-img">
                  <img src="../assets/images/silder/circle-01.gif">
                </div>
                <p class="img-title">1分抽奖</p>
              </a>
            </li>
            <li class="list-item">
              <a href="#">
                <div class="list-item-img">
                  <img src="../assets/images/silder/circle-02.png">
                </div>
                <p class="img-title">9.9封顶</p>
              </a>
            </li>
            <li class="list-item">
              <a href="#">
                <div class="list-item-img">
                  <img src="../assets/images/silder/circle-03.png">
                </div>
                <p class="img-title">时尚拼团</p>
              </a>
            </li>
            <li class="list-item">
              <a href="#">
                <div class="list-item-img">
                  <img src="../assets/images/silder/circle-04.png">
                </div>
                <p class="img-title">大家都在买</p>
              </a>
            </li>
          </ul>
        </div>
      </div>  
    </div> 
    <product-list></product-list>
  </div>
</template>

<script>
  import Swiper from '../../static/swiper-3.4.2.min.js'
  import HeadSearch from '../components/header/HeadSearch.vue'
  import ProductList from './ProductList.vue'
  let homeSwiper
  export default {
    mounted () { 
      this.$nextTick(function () {
        // 代码保证 this.$el 在 document 中
        this.lunbo()
      })   
    },
    methods: {
      lunbo () {
        homeSwiper = new Swiper ('.swiper-container', {
          autoplay: 5000,
          paginationClickable :true,
          autoplayDisableOnInteraction : false,
          // 如果需要分页器
          pagination: '.swiper-pagination'

        }) 
      }
    },
    components : { HeadSearch,ProductList }
  }
  
  
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../assets/css/swiper-3.4.2.min.css");
html,body{
  background-color:#f5edf0;
} 
.swiper-container {
    width: 100%;
    height: 3.9rem;
}  
.swiper-container .swiper-pagination-bullet{
  width: 6px;
  height: 6px;
}
.swiper-container .swiper-pagination-bullet-active{
  background: #d43e2e !important;
}
.swiper-container img{
  width: 100%;
  height: 100%;
}
.home-one{
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.circle-imgbox{
  overflow: auto;
  padding: .2rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
}
.imgbox-list{
  margin: 0;
  padding: 0;
  overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
    -o-overflow-scrolling: touch;
    -ms-overflow-scrolling: touch;
    overflow-scrolling: touch;
    display: -moz-box;  
    display: -webkit-box;  
    display: -o-box;  
    display: box;  
}
.imgbox-list .list-item{
  display: block;
    min-height: 1.4rem;
    width: 1.4rem;
    -webkit-box-flex:1;
    -moz-box-flex:1;
    -o-box-flex:1;
    box-flex:1;
    margin-right: 0.2rem;
}
.imgbox-list .list-item:last-of-type{
  margin-right: 0px;
}
.imgbox-list .list-item a{
  color: #666;
}
.list-item-img img{
  display: block;
    width: 100%;
}
.img-title {
  margin: 0;
    text-align: center;
    font-size: 0.28rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 0.12rem;
    line-height: 0.45rem;
}
</style>
