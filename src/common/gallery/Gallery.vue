<template>
	<div class="gallery" @click="galleryHandleClick">
		<div class="wrapper">
			<swiper :options="swiperOption" >
		    <swiper-slide v-for="(item,index) of imgs" :key="index">
				<img  class="gallery-img" :src="item"/>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		   </swiper>
	   </div>
	</div>
</template>
<script>
	export default {
		name: "Gallery",
		props:{
			imgs:Array
		},
		data (){
			return {
				 swiperOption: {
		        	pagination:{
		        		el:".swiper-pagination",
		        		type:'fraction'
		        		
		        	},
		        	observer:true,
   					observeParents:true
		        }
			}
		},
		methods:{
			galleryHandleClick (){
				this.$emit("close")
			}
		}
	}
	
</script>
<style lang="stylus" scoped>
	.gallery >>> .swiper-container
		overflow:inherit
	.gallery
		position:fixed
		display:flex
		z-index:99
		flex-direction:column
		justify-content:center
		top:0
		left:0
		bottom:0
		right:0
		background:#000
		color:#fff
		.wrapper
			width:100%
			height:0
			padding-bottom:100%
			.gallery-img
				width:100%
		.swiper-pagination
			bottom:-1rem

</style>