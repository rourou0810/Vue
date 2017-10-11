<template>
	<div class="recommend-container">
		<div class=" detail-wrap detail-recommend-primary">
			<div class="recommend-top"></div>
			<div class="recommend-head">为你推荐</div>
			<div class="recommend-goods">
				<div class="swiper-recommend-container swiper-container-horizontal">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<div class="goods-container" v-for="item in dataList">
								<a href="#">
									<img class="goods-img loggered" :src="item.image">
									<div class="goods-price">￥{{item.price}}</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				dataList:[]
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.getDataList();
			})
		},
		methods:{
			getDataList() {
				this.$http.get('static/jsons/recommend_list.json').then((res) => {
					res = res.body;
					console.log(res)
					if(res.success === true) {
						this.dataList = res.data.list;
					}
				})
			}
		}
	}
</script>

<style>
@import url("../assets/css/swiper-3.4.2.min.css");
.recommend-container .detail-wrap {
    overflow: hidden;
    max-width: 15rem;
    margin: 0 auto;
    background: #fff;
    box-sizing: border-box;
}
.recommend-top {
    height: .2rem;
    background: #f2f5f8;
}
.detail-recommend-primary .recommend-head {
    padding: 0 .2rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .28rem;
}
.detail-recommend-primary .recommend-goods {
    padding: 0 .2rem .1rem;
}
.detail-recommend-primary .recommend-goods .swiper-recommend-container {
    overflow: auto;
    position: relative;
    /*padding-bottom: .6rem;*/
}
/*.detail-recommend-primary .recommend-goods .swiper-slide{
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: left;
}*/
.detail-recommend-primary .recommend-goods .swiper-slide .goods-container {
    width: 1.5rem;
    margin-right: 0.08rem;
    display: inline-block;
    /*margin-left: .02rem;*/
}
.detail-recommend-primary .recommend-goods .swiper-slide .goods-container a{
	display: block;
}
.detail-recommend-primary .recommend-goods .swiper-slide .goods-img {
    width: 1.5rem;
    height: 2rem;
    margin-left: .15rem;
}
.detail-recommend-primary .recommend-goods .swiper-slide .goods-price {
    font-size: .24rem;
    text-align: center;
    margin-top: -.2rem;
    margin-bottom:.1rem;
}
.swiper-container-horizontal>.swiper-pagination {
    bottom: 10px;
    left: 0;
    width: 100%;
}
</style>