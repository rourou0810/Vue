<template>
	<div class="cartbage-container">
		<header class="page_head">	
			<div class="back_icon" id="back_btn">
				<router-link to="/home">
					<img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png">
				</router-link>
			</div>
			<router-link to="/home" class="right_btn">首页</router-link>				
			<div class="title">
				<a href="javascript:;">购物车</a>
			</div>
		</header>
		<div class="cart"> 
			<input type="hidden" class="ptp" name="" value="">  
			<div class="none">  
				<div class="none_info"> 
					<p>您的购物车还空着呢，</p> 
					<p>美物这么多，快去看看吧～</p> 
					<router-link to="/home" class="btn">去逛逛</router-link>
				</div> 
			</div>
		 </div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	import FooterNav from '../components/footer/FooterNav.vue'
	export default {
		components: {FooterNav}
	}
</script>

<style>
.page_head {
	color: #666;
  height: 0.92rem;
  width: 100%;
  text-align: center;
  line-height: .92rem;
  border-bottom: 1px solid rgba(51,51,51,.15);
  background-color: #fff;
  overflow: hidden;
}
.page_head .back_icon {
  z-index: 5;
  float: left;
  text-align: left;
  vertical-align: middle;
  width: .8rem;
  padding-left: .3rem;
}
.page_head .back_icon a{
	display: block;
}
.page_head .back_icon img {
    width: .3rem;
    display: block;
    margin-top: .28rem;
}
.page_head .right_btn {
  z-index: 5;
  font-size: .35rem;
  float: right;
  padding-right: .3rem;
  height: .88rem;
  padding-top: 0.025rem;
}
.page_head .title {
  z-index: 1;
  text-align: center;
}
.page_head .title a {
    font-size: .35rem;
    display: block;
    margin-top:0.05rem;
}
.none_info {
	color: #666;
	font-size: 0.28rem;
  text-align: center;
  padding-top: 1.5rem;
}
.none_info p {
  line-height: .4rem;
}
.none_info .btn {
  display: block;
  width: 1.52rem;
  margin-left: auto;
  margin-right: auto;
  padding: .18rem 0;
  margin-top: .4rem;
  border-radius: .03rem;
  background-color: #f66;
  color: #fff;
}
</style>