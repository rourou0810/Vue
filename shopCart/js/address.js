new Vue({
	el:'.container',
	data:{
		limitNum:3,
		addressList:[],
		curIndex:0,
		delFlag:false,
		shippingMethod:1
	},
	mounted:function() {
		this.$nextTick(function() {
			this.getAddress();
		})
	},
	computed:{//计算属性
		filterAddress:function() {
			return this.addressList.slice(0,this.limitNum);
		}
	},
	methods:{
		getAddress:function() {
			var _this = this;
			this.$http.get('data/address.json').then(function(res) {
				if(res.data.status == 0) {
					_this.addressList = res.data.result;
				}
			})
		},
		setDefault:function(addressId) {
			this.addressList.forEach(function(item,index) {
				if(item.addressId == addressId) {
					item.isDefault = true;
				}else{
					item.isDefault = false;
				}
			})
		},
		delConfirm:function(index) {
			this.delFlag = true;
			this.curIndex = index;
		},
		delAddress:function() {
			this.addressList.splice(this.curIndex,1);
			this.delFlag = false;
		}
	}
})