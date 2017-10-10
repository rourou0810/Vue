<template>
	<div class="productlist-container">
		<div class="home-two">
        <div v-fixed-nav class="imglist-nav" id="imglist-nav">
          <a href="javascript:;" v-for="(item,index) in productsList.filter.list" :key="index" :class="[index==isActive?'active':'']" @click="changeNav(index)">
            <span>{{item.title}}</span>
          </a>
        </div>
        <div class="image-list">
          <div class="image-list-item" v-for="(product,index) in productsList.list" :key="index">
            <a href="javascript:;">
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
      <footer-nav></footer-nav>
	</div>
</template>

<script>
  import FooterNav from '../components/footer/FooterNav.vue'
  import $ from 'jquery'
	export default {
		data () {
      return {
        isActive: 0,
        productsList: []
      }
    },
    mounted () { 
      this.$nextTick(function () {
        // 代码保证 this.$el 在 document 中
        this.getProductsList()
      })   
    },
    directives:{
    	fixedNav:{
    		update(val,old){
    			var navEle = $('#imglist-nav'),
    					elTopNum = navEle.offset().top;
    			$(window).bind("scroll", function(){
    				var sTop = $(this).scrollTop();
		    		if((elTopNum-sTop) <= 0) {
		    			navEle.addClass('fixed-nav');
		    		}else if((elTopNum-sTop) > 0){
		    			navEle.removeClass('fixed-nav');
		    		}
			    })
		  	}
    	}
    },
    methods: {
      changeHttpUrl (url) {
        this.$http.get(url).then((res) => {
          res = res.body;
          if(res.success === true) {
            this.productsList = res.data;
          }
        })
      },
      getProductsList () {
        this.changeHttpUrl('static/jsons/fashionProducts_list.json');
      },
      changeNav (index) {
        this.isActive = index;
        if(index == 0) {
          this.getProductsList();
        }
        if(index == 1) {
          this.changeHttpUrl('static/jsons/newProducts_list.json');
        }
        if(index == 2) {
          this.changeHttpUrl('static/jsons/hotProducts_list.json');
        }
      }
    },
    components:{FooterNav}
	}
</script>

<style>
.home-two{
  background-color: #fff;
  margin-bottom:1.2rem;
}
.imglist-nav {
	background-color: #fff;
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
.fixed-nav{
	position: fixed;
	top:0;
	z-index: 999;
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
  float: left;
  width: 50%;
}
.image-list-item a{
  display: block;
  margin: 0 0.1rem 0.2rem 0.1rem;
}
.image-list-item:nth-of-type(odd) a{
	margin-right: 0rem;
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
