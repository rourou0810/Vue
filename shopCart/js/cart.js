new Vue({
	el:'#app',
	data:{
		totalMoney:0,
		productList:[],
		checkAllFlag:false,
		delFlag:false,
		curProduct:''
	},
	filters:{//局部过滤器
		formatMoney:function(value) {
			return "￥"+ value.toFixed(2);//实际开发中应由后端返回两位小数，前段toFixed会有精度丢失
		}
	},
	mounted:function() {//1.0为ready,2.0改为mounted,编译完以后执行
		this.$nextTick(function () {
		    // 代码保证 this.$el 在 document 中
		    this.cartView();
		})
	},
	methods:{
		cartView:function() {
			//var _this = this;
			// this.$http.get('data/cartData.json').then(function(res){
			// 	//console.log(res);
			// 	_this.productList = res.data.result.list;
			// 	_this.totalMoney = res.data.result.totalMoney;
			// })
			let _this = this;
			//ES6箭头函数主要改变作用域，在函数里面可以用this调用外面的属性和方法
			this.$http.get('data/cartData.json').then(res=>{
				this.productList = res.data.result.list;
			})
		},
		changeMoney:function(product,way) {
			if(way > 0) {
				product.productQuantity++;
			}else{
				product.productQuantity--;
				if(product.productQuantity < 1) {
					product.productQuantity = 1;
				}
			}
			this.calcTotalPrice();
		},
		selectedProduct:function(item) {
			//判断一个变量是否存在typeof
			if(typeof item.checked == 'undefined') {
				//Vue.set(item,'checked',true);//全局设置值
				this.$set(item,"checked",true);//局部设置值
			}else{
				item.checked = !item.checked;
			}
			this.calcTotalPrice();
		},
		checkAll:function(flag) {
			this.checkAllFlag = flag;
			var _this = this;
			this.productList.forEach(function(item,index) {
				if(typeof item.checked == 'undefined') {
					_this.$set(item,"checked",_this.checkAllFlag);
				}else{
					item.checked = _this.checkAllFlag;
				}
			})
			this.calcTotalPrice();
		},
		calcTotalPrice:function() {
			var _this = this;
			_this.totalMoney = 0;
			this.productList.forEach(function(item,index) {
				if(item.checked) {
					_this.totalMoney += item.productPrice * item.productQuantity;
				}
			})
		},
		delConfirm:function(item) {
			this.delFlag = true;
			this.curProduct = item;
		},
		delProduct:function() {
			var index = this.productList.indexOf(this.curProduct);
			this.productList.splice(index,1);
			this.delFlag = false;
		}
	}
});

Vue.filter("money",function(value,type) {//全局过滤器
	return "￥"+ value.toFixed(2) + type; 
});