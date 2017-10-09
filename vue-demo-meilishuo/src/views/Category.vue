<template>
	<div class="category-container">
		<head-search></head-search>
		我是分类页面
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	import HeadSearch from '../components/header/HeadSearch.vue'
  import FooterNav from '../components/footer/FooterNav.vue'

  export default {
  	components : {HeadSearch,FooterNav}
  }
</script>