<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">
					您的位置
				</div>
				<div class="button-list">
					<div class="button">
						{{this.city}}
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">
					热门城市
				</div>
				<div class="button-list">
					<div class="button" 
						v-for = "item of hotCities"
						:key="item.id"
						@click="handleCityClick(item.name)"
						>
						{{item.name}}
					</div>
				
				</div>
			</div>
			<div class="area" 
			v-for="(item,key) of cities"
			:ref="key"
			>
				<div class="title border-topbottom">
					{{key}}
				</div>
				<div class="city-order border-bottom" 
					 v-for="innerItem of item"
					 :key="innerItem.id"
					 @click="handleCityClick(innerItem.name)"
					  >
					{{innerItem.name}}
				</div>
			</div>
		</div>
	</div>

</template>
<script>
import BScroll from 'better-scroll'
import {mapState,mapActions,mapMutations} from 'vuex'
	export default {
		name : "List",
		props :{
			cities: Object,
			hotCities: Array,
			letter:String

		},
		computed :{
			...mapState(['city'])
		},
		watch:{
			letter (letter){
				console.log(this.$refs[letter])
				this.scroll.scrollToElement(this.$refs[letter][0],1500)
			}
		},
		methods :{
			handleCityClick (city){
				//this.$store.dispatch('cityChange',city)
				this.cityChange(city)
				this.$router.push("/")
			},
			...mapActions(['cityChange'])
		},
		mounted (){
			this.scroll = new BScroll(this.$refs.wrapper,{click: true})
		}
	}
</script>
<style lang="stylus" scoped>
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			border-color:#ccc
	.list
		position:absolute
		top:1.6rem
		left:0
		bottom:0
		right:0
		overflow:hidden
		.title
			top:0
			height: .54rem
			line-height: .54rem
			color: #666
			background-color:#eee
			text-indent:0.2rem
			font-size:0.26rem

		.button-list
		/* 盒子里面的元素是浮动元素的时候，
		盒子用overflow:hidden就有清除浮动的效果,
		父元素没有指定高度，所以就会根据子元素撑开了父元素的高度*/
			overflow:hidden 
			padding:.1rem
			.button
				float:left    /*内部浮动元素*/
				margin:.1rem
				padding:.1rem
				text-align:center
				width:25%
				border:0.02rem solid #ccc
		.city-order
			height:0.6rem
			line-height:0.6rem
			
			text-indent:0.2rem

	

			
			

</style>