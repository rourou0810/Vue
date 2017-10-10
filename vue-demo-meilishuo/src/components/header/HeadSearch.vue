<template>
	<div class="head-container">
		<header>
			<a href="index.html" class="left-logo"></a>
			<input type="search" class="search-input" placeholder="套装">
			<div class="right-btn"></div>
		</header>
	</div>
</template>

<style scoped>
	header{
		height: 0.9rem;
		font-size: 0.24rem;
		position: relative;
		z-index: 100px;
		background-color: #fff;
	}
	.left-logo{
		float: left;
		/*width: 0.58rem;*/
		width: 7%;
		height: 0.9rem;
		margin: 0 .3rem;
		background: url("../../assets/images/logo.png") no-repeat center;
		background-size: contain;
		text-align: center;
	}
	.search-input {
	    float: left;
	    font-size: 0.24rem;
	    color: #333;
	    border: none;
	    padding: .15rem .15rem .15rem .55rem;
	    /*width: 5.3rem;*/
	    width: 70%;
	    border-radius: 0.1rem;
	    margin-bottom: 0.16rem;
	    margin-top: 0.16rem;
	    height: 0.56rem;
	    background: #F4F4F4 url("../../assets/images/header-search.png") no-repeat 0.2rem center;
	    background-size: auto .26rem;
	    -webkit-appearance: none;
	    outline: none;
	}
	.right-btn {
	    float: left;
	    margin-top: 0.15rem;
	    /*width: 0.98rem;*/
	    width: 13%;
	    height: 0.56rem;
	    line-height: 0.56rem;
	    text-align: center;
	    background: url("../../assets/images/message.png") no-repeat center;
	    background-size: .34rem .3rem;
	}
</style>