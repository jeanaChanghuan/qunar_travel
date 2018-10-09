<template>
	<div class="icons">
		<swiper :options="swiperOption" >
	    <swiper-slide v-for="(page,index) of pages" :key="index">
			<div class="icon" v-for="item of page" :key="item.id">
				<div class="icon-img">
					<img class="icon-img-content" :src="item.imgUrl"/>
				</div>
				<div class="icon-desc">
					<p>{{item.desc}}</p>
				</div>
			</div>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>
<script>
   

	export default {
		name:"Icon",
		props:{
			list: Array
		},
		data (){
			return {
				 swiperOption: {
		        	pagination:{el:".swiper-pagination",clickable:true},
		        }
			}
		},
		computed:{
			pages (){
				const pages =[]
				this.list.forEach((item,index) => {
					var page = Math.floor(index/8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

	.icons >>> .swiper-pagination-bullet-active
		background:rgba(0,175,190,.8)
	.icons
		overflow:hidden
		height:0
		padding-bottom:50%
		/*background-color:green*/
		.icon
			position:relative
			overflow:hidden
			width:25%
			height:0
			float:left
			padding-bottom:25%
			/*background-color:red*/
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				/*background:blue*/
				padding:.1rem
				.icon-img-content
					height:100%
					margin:0 auto
					display:block
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height:.44rem
				lin-height:.44rem
				text-align:center
				color:$darkTextColor

      
</style>