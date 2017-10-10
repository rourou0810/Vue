<template>
	<div class="category-container">
		<head-search></head-search>
		<div class="box-wrap">
			<div class="title">
				<h3>本周流行</h3>
				<p></p>
			</div>
			<div class="list wap-index">
				<ul class="clearfix">
					<li v-for="data in categoryDatas">
						<router-link :to="'/category/sort='+(data.sort)">
							<div class="bg_imgbox">
								<img :src="data.image">
							</div>
							<div class="img-title">{{data.title}}</div>
						</router-link>
					</li>
				</ul>
			</div>	
		</div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	import HeadSearch from '../components/header/HeadSearch.vue'
  import FooterNav from '../components/footer/FooterNav.vue'

  export default {
  	data () {
  		return {
  			categoryDatas: []
  		}
  	},
  	mounted () {
  		this.$nextTick(function () {
        this.getCategoryList();
      }) 
  	},
  	methods: {
  		getCategoryList () {
  			this.$http.get('static/jsons/category_list.json').then((res) => {
  				res = res.body;
  				if(res.success == true) {
  					this.categoryDatas = res.value;
  				}
  			})
  		}
  	},
  	components : {HeadSearch,FooterNav}
  }
</script>

<style scoped>
.box-wrap {
  background-color: #fff;
  margin-bottom: 1.2rem;
}
.title {
  overflow: hidden;
  padding: .2rem;
}
.title h3 {
  color: #333;
  font-size: 0.32rem;
  font-weight: normal;
  float: left;
}
.title p {
  color: #666;
  font-size: 0.28rem;
  float: right;
  margin-top: 0.1rem;
}
.wap-index ul {
  border-top: 1px solid #eee;
  margin-left: -0.1rem;
  overflow: hidden;
}
.wap-index li {
  box-sizing: border-box;
  margin-bottom: 0;
  padding-bottom: 32%;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  width: 25%;
  height: 0;
  list-style: none;
  float: left;
  overflow: hidden;
  position: relative;
}
.wap-index a {
  margin-left: 0;
}
.wap-index li .bg_imgbox {
  width: 70%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
}
img {
  display: block;
  width: 100%;
}
li .img-title {
  position: absolute;
  bottom: .1rem;
  width: 100%;
  font-size: 0.22rem;
  color: #666;
  text-align: center;
  font-weight: normal;
  line-height: 2;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: transparent;
  left: 0;
}
</style>