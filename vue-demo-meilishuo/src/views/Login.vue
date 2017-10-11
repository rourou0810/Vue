<template>
	<div class="login-container">
		<header class="page_head">	
			<div class="back_icon" id="back_btn">
				<router-link to="/home">
					<img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png">
				</router-link>
			</div>			
			<a class="right_btn" href="javascript:;">注册</a>		
			<div class="title"><a href="javascript:;">登录 - 美丽说</a></div>
		</header>

		<div id="user_login" class="user_content">	
			<div class="login_third">		
				<div class="login_third_btn">							
					<a href="javascript:;" data-third="qq" class="js-third-login qq third_login"></a>					
				</div>	
			</div>	
			<div class="mls_account" style="">		
				<div class="login_title mgj">			
					<span class="third_title">美丽说账号登录</span>		
				</div>		
				<div class="form_wrap">			
					<div class="form_mod_wrap mb15">				
						<div class="form_mod">					
							<div>
								<input type="text" class="js-uname userselect text" placeholder="昵称/邮箱/手机号">					
							</div>				
						</div>				
						<div class="form_mod">					
							<div>					
								<input type="password" class="js-pwd userselect text" placeholder="密码">					
							</div>				
						</div>			
					</div>			
					<div class="login_show">				
						<span class="login_btn" id="J_login_btn">登录</span>		
					</div>		
				</div>	
			</div>		
			<p class="clearfix">		
				<a href="javascript:;" class="findpwd login_idea fr">忘记密码?</a>	
			</p>		
		</div>
	</div>
</template>

<style>
body,html{
	background-color: #fff;
}
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
.login_third {
    padding: .7rem .3rem 0;
}
.user_content {
    min-width: 320px;
}
.login_third_btn .third_login, .login_third_icon .third_login {
    display: inline-block;
    width: 1.82rem;
    height: 1.82rem;
    border-radius: 50%;
    background: #fff url(http://www.mogujie.com/img/imgwap/loading_alpha.gif) no-repeat;
}
.login_third_btn .third_login {
    width: 2.1rem;
    height: 2.1rem;
    margin: 0 .25rem;
}
.login_third_btn .qq {
    background: url(http://s16.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png) center no-repeat;
    background-size: 100%;
}
.login_third_btn, .login_third_tiny_btn {
    text-align: center;
}
.login_title {
    padding: 0rem .3rem 0;
}
.mgj {
    margin-bottom: -.27rem;
}
.login_third span, .login_title span {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #666;
    font-size: .28rem;
    position: relative;
}
.login_third span:after, .login_third span:before, .login_title span:after, .login_title span:before {
    content: '';
    width: 2.1rem;
    border-bottom: 1px solid #d8d8d9;
    position: absolute;
    top: .2rem;
}
.mgj span:after, .mgj span:before, .other span:after, .other span:before {
    width: 2.38rem;
}
.login_title span:before {
    left: 0;
}
.form_wrap {
    padding: .6rem .3rem .24rem;
}
.mb15 {
    margin-bottom: .3rem;
}
.form_mod, .form_mod .text {
    font-size: .32rem;
    background: #f2f2f2;
}
.form_mod {
    padding: .23rem .3rem;
    margin-bottom: .2rem;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    line-height: .32rem;
}
.form_mod .text {
    height: .44rem;
    line-height: .44rem;
    width: 100%;
    -webkit-box-flex: 1;
    display: block;
    border: 0;
    color: #444;
}
.login_show .login_btn {
    display: inline-block;
    background: #ff5777;
    color: #fff;
    border: 0;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
}
#user_login .login_btn, #user_login .regist_btn {
    width: 100%;
    font-size: .36rem;
    height: .9rem;
    line-height: .9rem;
}
.clearfix {
    display: block;
    zoom: 1;
}
.fr {
    float: right!important;
}
.login_idea {
    color: #494949;
    font-size: .28rem;
    width: 50%;
    text-align: right;
    padding-right: .3rem;
}
</style>