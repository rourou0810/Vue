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

      <div class="home-two">
        <div class="imglist-nav" id="imglist-nav">
          <a href="javascript:;" class="active"><span>流行</span></a>
          <a href="javascript:;"><span>新款</span></a>
          <a href="javascript:;"><span>精选</span></a>
        </div>
        <div class="image-list">
          <div class="image-list-item" v-for="(product,index) in productsList" :key="index">
            <a href="#">
              <div>
                <img :src="product.show.img">
              </div>
              <p class="title">{{product.props[0]}}</p>
              <div class="goods_info"> <span class="price_info">{{product.orgPrice}}</span>
              <span class="fav_num"><em class="no_collect_icon"></em>{{product.cfav}}</span> 
              </div>
            </a>
          </div>
        </div>
      </div>  
    </div> 

    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import Swiper from '../../static/swiper-3.4.2.min.js'
  import HeadSearch from '../components/header/HeadSearch.vue'
  import FooterNav from '../components/footer/FooterNav.vue'
  let mySwiper
  export default {
    data () {
      return {
        productsList: []
      }
    },
    mounted () { 
      this.$nextTick(function () {
        // 代码保证 this.$el 在 document 中
        this.lunbo()
        this.getProductsList()
      })   
    },
    methods: {
      lunbo () {
        mySwiper = new Swiper ('.swiper-container', {
          autoplay: 5000,
          paginationClickable :true,
          autoplayDisableOnInteraction : false,
          // 如果需要分页器
          pagination: '.swiper-pagination'

        }) 
      },
      getProductsList () {
        this.$http.get('static/jsons/fashionProducts_list.json').then((res) => {
          console.log(res);
          res = res.body;
          if(res.success === true) {
            this.productsList = res.data.list;
          }
        })
      }
    },
    components : { HeadSearch,FooterNav }
  }
  
  
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../assets/css/swiper-3.4.2.min.css"); 
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

.home-two{
  background-color: #fff;
  margin-bottom:1.2rem;
}
.imglist-nav {
  height: 0.8rem;
    line-height: 0.8rem;
    overflow: hidden;
    font-size: 0.3rem;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: -moz-box;  
    display: -webkit-box;  
    display: -o-box;  
    display: box;  
}
.imglist-nav a{
  /*width: 32%;*/
  -webkit-box-flex: 1; 
  box-flex: 1;
  display: block;
  text-align: center;
}
.imglist-nav a.active{
  color: #FF3366;
}
.imglist-nav a.active span{
  border-bottom: 2px solid #FF3366;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0 0.06rem 0.1rem 0.06rem;
}
.image-list{
  width: 100%;
  overflow: hidden;
}
.image-list-item{
  width: 3.7rem;
  float: left;
}
.image-list-item a{
  display: block;
  margin: 0 0.1rem 0.2rem 0.1rem;
}
.image-list-item a img{
  width: 100%;
  height: 5.27rem !important;
}
.image-list-item .title{
  display: block;
    width: 100%;
    margin-top: 0rem;
    font-size: 0.22rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
    height: .34rem;
    color: #666;
}
.goods_info {
    text-align: center;
    height: .24rem;
    overflow: hidden;
    font-size: 0;
}
.goods_info .price_info{
  color: #FF3366;
    text-align: center;
    font-size: 0.26rem;
    margin-right: 0.2rem;
    line-height: 1;
}
.goods_info .fav_num{
  color: #999999;
    font-size: 0.26rem;
    line-height: 1;
}
.goods_info .no_collect_icon {
    display: inline-block;
  background: url("../assets/images/collect-icon.png") no-repeat center;
    background-size: contain;
    width: .23rem;
    height: .22rem;
    margin-right: 0.07rem;
    vertical-align: -0.01rem;
}
</style>
