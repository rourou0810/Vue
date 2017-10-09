<template>
	<div class="footer-container">
		<footer>
			<div class="nav-bottom">
        <router-link to="/home" class="nav-bottom-item">
          <i class="bottom-icon icon-home"></i>
          <span class="bottom-text">首页</span>
        </router-link>	
        <router-link to="/category" class="nav-bottom-item">
					<i class="bottom-icon icon-fenlei"></i>
					<span class="bottom-text">分类</span>
        </router-link>
        <router-link to="/cartbag" class="nav-bottom-item">
					<i class="bottom-icon icon-cartbag"></i>
					<span class="bottom-text">购物车</span>
        </router-link>
        <router-link to="/user" class="nav-bottom-item">
					<i class="bottom-icon icon-user"></i>
					<span class="bottom-text">我</span>
        </router-link>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.nav-bottom {
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
}
.nav-bottom a {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    text-align: center;
    padding-bottom: 0.1rem;
    color: #666;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    width: 0%;
    overflow: hidden;
}
.nav-bottom .bottom-text {
    display: block;
    color: #999;
    font-size: 0.25rem;
}
.nav-bottom .bottom-icon {
    margin: 0.08rem auto;
    margin-top: 0.128rem;
    display: block;
    background-size: 100% auto;
    overflow: hidden;
    text-indent: -9999px;
    text-align: left;
    width: 0.38rem;
    height: 0.38rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.nav-bottom-item .bottom-icon.icon-home{
	background-image: url("../../assets/images/home-icon.png");
}
.bottom-icon.icon-fenlei{
	background-image: url("../../assets/images/fenlei-icon.png");
}
.bottom-icon.icon-cartbag{
	background-image: url("../../assets/images/cartbag-icon.png");
}
.bottom-icon.icon-user{
	background-image: url("../../assets/images/user-icon.png");
}
.nav-bottom .router-link-active .bottom-text {
    color: #ff3366;
}
.nav-bottom .router-link-active .icon-home {
    background-image: url("../../assets/images/home-icon-active.png");
}
.nav-bottom .router-link-active .icon-fenlei {
    background-image: url("../../assets/images/fenlei-icon-active.png");
}
.nav-bottom .router-link-active .icon-cartbag {
    background-image: url("../../assets/images/cartbag-icon-active.png");
}
</style>