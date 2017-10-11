<template>
	<div class="detail-container">
		<div class="goods-content">
			<div class="image-swiper">
			<div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in topImages">
          	<img class="swiper-img" :src="item">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    	</div>
		</div>

		<!-- 基本信息 -->
		<div class="primary-info">
			<div class="info-title break">
				<span>{{detailDatas.title}}</span>
			</div>
			<div class="info-price flex J_InfoPrice">
				<span class="flex"><span class="now">{{detailDatas.price}}</span></span>
			</div>
			<div class="info-other info-other-notopbor">  
				<span class="item">{{columns[0]}}</span>    
				<span class="item">{{columns[1]}}</span>    
				<span class="item">{{deliveryTime}}小时发货</span>  
				<span class="item">{{sendAddress}}</span>  
			</div>
		</div>

		<!-- 店铺信息 -->
		<div class="detail-wrap detail-shop" id="DetailShop">
			<div class="shop-top"></div>
			<div class="shop-info">
				<div class="clearfix">
					<a href="#" class="info-avatar">
						<img :src="shopInfo.shopLogo">
					</a>
					<div class="flex shop-info-container">
						<div class="shop-info-title">
							<p class="title">{{shopInfo.name}}</p>
						</div>
						<div id="J_shop-collect" class="shop-collect "> 
							<span class="has-marked" v-if="shopInfo.isMarked">已收藏</span> 
							<span class="not-marked" v-else><span class="plus">+</span> 收藏 </span>
						</div>
					</div>
				</div>
				<div class="info-content">
					<div class="count">
						<div class="sale"><span class="fz-18">453.8万</span><br>总销量</div>
						<div class="all"><span class="fz-18">2.1万</span><br>全部宝贝</div>
					</div>
					<div class="shop-evaluate"> 
							<ul>  
								<li v-for="item in shopInfo.score"> <span>{{item.name}}</span>  <em>{{item.score}}</em> <i>{{item.isBetter?'高':'底'}}</i>  </li> 
							</ul> 
						</div>
				</div>
				<div class="info-goshop"> 
					<a href="javascript:;">进店逛逛</a> 
				</div>
			</div>
		</div>

			<recommend-goods></recommend-goods>
		</div>
		

		<!-- 底部导航栏 -->
		<div class="detail-wrap detail-footbar" id="DetailFootbar">
			<div class="footbar-im"> 
				<i class="icon"></i> 
				<span class="text">客服</span> 
			</div>
			<div class="footbar-shop"> 
				<i class="icon"></i> 
				<span class="text">店铺</span> 
			</div>
			<div class="footbar-fav">
				<router-link to="/login">
					<i class="icon"></i> 
					<span class="text">收藏</span>
				</router-link> 
			</div>
			<div class="footbar-buy">  
				<router-link to="/login"><span class="buy-cart">加入购物车</span></router-link> 
				<router-link to="/login"><span class="buy-now">购买</span></router-link>
			</div> 
		</div>
	</div>
</template>

<script>
	import Swiper from '../../static/swiper-3.4.2.min.js'
	import RecommendGoods from '../components/RecommendGoods.vue'
	let detailSwiper
	export default{
		data () {
			return{
				shopInfo:[],
				columns:[],
				topImages:[],
				detailDatas:[],
				deliveryTime:[],
				sendAddress:[]
			}
		},
		mounted () { 
      this.$nextTick(function () {
        this.getDetailDatas();
        this.lunbo ();
      })   
    },
		methods:{
			lunbo () {
        detailSwiper = new Swiper ('.swiper-container', {
          autoplay: 5000,
          paginationClickable :true,
          autoplayDisableOnInteraction : false,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,//修改swiper的父元素时，自动初始化swiper

        }) 
      },
			getDetailDatas() {
				this.$http.get('static/jsons/detail_data.json').then((res) => {
					res = res.body;	
					this.shopInfo = res.result.shopInfo;
					this.columns = res.result.columns;
					this.detailDatas = res.result.itemInfo;
					this.topImages = res.result.itemInfo.topImages;
					this.deliveryTime = this.detailDatas.extra.deliveryTime;
					this.sendAddress = this.detailDatas.extra.sendAddress;
					console.log(this.deliveryTime)
				})
			}
		},
		components:{RecommendGoods}
	}
</script>

<style scope>
@import url("../assets/css/swiper-3.4.2.min.css");
em, i {
    font-style: normal;
}
.detail-container{
	background-color:#fff;
} 
.goods-content{
	margin-bottom: 1.2rem;
}
.goods-content .swiper-container {
    height: 9rem;
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

.primary-info {
  overflow: hidden;
}
.primary-info .info-title {
    line-height: .4rem;
    margin-top: .38rem;
    color: #424242;
    font-size: .32rem;
}
.primary-info .info-desc, .primary-info .info-price, .primary-info .info-title {
    padding: 0 .2rem;
}
.detail-wrap .break {
    word-break: break-all;
    word-wrap: break-word;
}
.primary-info .info-title span {
    vertical-align: middle;
}
.primary-info .info-price {
    height: .44rem;
    margin-top: .24rem;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -moz-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.detail-wrap .flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
}
.primary-info .info-price .now {
    line-height: .44rem;
    color: #f69;
    font-size: .44rem;
    display: block;
    vertical-align: middle;
}
.primary-info .info-other-notopbor {
    padding-top: 0;
    border-top-width: 0;
}
.primary-info .info-other {
  margin: .4rem .2rem .2rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.primary-info .info-other .item {
  display: block;
  line-height: .13rem;
  color: #999;
  font-size: .23rem;
}
.detail-shop {
    padding-bottom: .4rem;
}
.detail-wrap {
    overflow: hidden;
    max-width: 7.68rem;
    margin: 0 auto;
    background: #fff;
}
.shop-top {
    height: .1rem;
    border-top: 1px solid #f2f5f8;
    background: #f2f5f8;
}
.shop-info {
    overflow: hidden;
    position: relative;
    margin-top: .4rem;
    padding: 0 .2rem;
}
.clearfix:after {
    display: block;
    content: "";
    clear: both;
    visibility: hidden;
}
.shop-info .info-avatar {
    float: left;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.shop-info .info-avatar img {
    border-radius: 50%;
    width: .9rem;
    height: .9rem;
    display: block;
}
.shop-info .shop-info-container {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.detail-wrap .flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
}
.shop-info .shop-info-title {
    font-size: .32rem;
    overflow: hidden;
    margin-left: .2rem;
    line-height: .9rem;
}
.shop-info .shop-collect {
    width: 1.3rem;
    height: .5rem;
    line-height: .5rem;
    border-radius: .5rem;
    text-align: center;
    background: #f69;
    color: #fff;
    font-size: .28rem;
}
.shop-info .info-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: .18rem;
    margin-bottom: .25rem;
    font-size: .12rem;
    color: #333;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.shop-info .info-content .count, .shop-info .info-content .shop-evaluate {
    width: 50%;
}
.shop-info .info-content .count {
    border-right: 1px solid #eee;
    text-align: right;
}
.shop-info .info-content .all, .shop-info .info-content .sale {
    display: inline-block;
    font-size: .24rem;
}
.shop-info .info-content .sale {
    margin-right: .3rem;
}
.shop-info .info-content .all {
    margin-right: .5rem;
}
.shop-info .info-content .fz-18 {
    font-size: .36rem;
    margin-bottom: .12rem;
    display: inline-block;
}
.shop-info .info-content .shop-evaluate {
    line-height: .48rem;
    padding-left: .6rem;
    box-sizing: border-box;
}
.shop-evaluate li {
    font-size: 0;
}
.shop-evaluate li em, .shop-evaluate li i, .shop-evaluate li span {
    display: inline-block;
    vertical-align: middle;
}
.shop-evaluate li span {
    color: #666;
    font-size: .26rem;
}
.shop-evaluate li em {
    color: #f13e3a;
    font-size: .26rem;
    margin-left: .1rem;
    display: inline-block;
    min-width: .52rem;
}
.shop-evaluate li i {
    width: .24rem;
    height: .24rem;
    line-height: .24rem;
    margin-left: .1rem;
    color: #f6f6f6;
    font-size: .2rem;
    text-align: center;
    background: #f13e3a;
    font-style: normal;
}
.shop-info .info-goshop {
    text-align: center;
}
.shop-info .info-goshop a {
    display: block;
    width: 3rem;
    height: .6rem;
    line-height: .6rem;
    -webkit-border-radius: .6rem;
    -moz-border-radius: .6rem;
    border-radius: .6rem;
    color: #666;
    font-size: .28rem;
    background: #f2f5f8;
    margin: 0 auto;
}

/*底部导航栏*/
.detail-footbar {
    background-color: #fafafa;
    max-width: 768px;
    width: 100%;
    position: fixed;
    z-index: 250;
    bottom: 0;
    height: 1rem;
    overflow: hidden;
    border-top: 1px solid #e5e5e5;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    display: flex;
}
.footbar-buy, .footbar-fav, .footbar-faved, .footbar-im, .footbar-shop {
    display: inline-block;
    height: 1rem;
    vertical-align: middle;
}
.footbar-fav, .footbar-faved, .footbar-im, .footbar-shop {
    width: 15%;
    /*width: 70px;*/
    text-align: center;
    font-size: 0;
}
.footbar-fav .icon, .footbar-faved .icon, .footbar-im .icon, .footbar-shop .icon {
    display: inline-block;
    width: .45rem;
    height: .5rem;
    margin-top: .2rem;
    background: url(http://s17.mogucdn.com/p1/160518/upload_ifqtoztggfqtsyjzhazdambqgyyde_44x300.png) no-repeat 0 0;
    background-size: .44rem;
}
.footbar-im .icon {
    background-position: 0 -1.06rem;
}
.footbar-fav .text, .footbar-faved .text, .footbar-im .text, .footbar-shop .text {
    display: block;
    line-height: .2rem;
    /*margin-top: .1rem;*/
    color: #999;
    font-size: .25rem;
}
.footbar-shop .icon {
    background-position: 0 -2rem;
}
.footbar-fav .icon {
    background-position: 0 0;
}
.footbar-buy {
	width: 55%;
    overflow: hidden;
    font-size: 0;
}
.footbar-buy .buy-cart, .footbar-buy .buy-now {
    display: inline-block;
    width: 50%;
    height: 1rem;
    line-height: 1rem;
    font-size: .32rem;
    text-align: center;
    vertical-align: middle;
}
.footbar-buy .buy-cart {
    color: #333;
    background: #ffe817;
}
.footbar-buy .buy-now {
    color: #fff;
    background: #f69;
}
</style>