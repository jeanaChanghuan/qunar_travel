<template>
	<div>
		<div class="banner" @click="bannerHandleClick" >
			<img 
			 class="banner-img"
			 :src="bannerImg"/>
			 <div class="banner-info">
			 	<div class="banner-title">
			 		{{sightName}}
			 	</div>
			 	<div class="banner-number">
			 		<span class="iconfont banner-icon">&#xe691;</span>
			 		{{this.gallaryImgs.length}}
				 </div>
			 </div>
		</div>
		<fade-animation>
			<banner-gallery 
				v-show="show" 
				:imgs="gallaryImgs"
				@close="gallerHandleClose"
				></banner-gallery>
		</fade-animation>
	</div>
</template>
<script>
import BannerGallery from 'gallery/Gallery'
import FadeAnimation from 'fade/FadeAnimation'
	export default{
		name :"DetailBanner",
		props:{
				sightName:String,
				bannerImg:String,
				gallaryImgs:Array
				
		},
		components :{
			BannerGallery,
			FadeAnimation
		},
		data (){
			return{
				show:false,
				imgs:["http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg","http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png","http://img1.qunarzz.com/sight/p0/1410/34/f540a04367d06820af4dfeaf0ad40257.water.jpg_350x240_100fac79.jpg"],
			}
		},
		methods :{
			bannerHandleClick (){
				this.show = true
			},
			gallerHandleClose (){
				this.show = false
			}
		}
	}
</script>z
<style lang="stylus" scoped>
	.banner
		overflow:hidden
		height:0
		padding-bottom: 55%
		position:relative
		.banner-img
			width:100%
		.banner-info
			position:absolute
			left:0
			right:0
			bottom:0
			display:flex
			color:#fff
			line-height:.6rem

			/*
			取值：
			none：无背景图。

			< url >：使用绝对或相对地址指定背景图像。

			< linear-gradient>：使用线性渐变创建背景图像。（CSS3）

			< radial-gradient>：使用径向(放射性)渐变创建背景图像。（CSS3）

			< repeating-linear-gradient>：使用重复的线性渐变创建背景图像。（CSS3）

			< repeating-radial-gradient>：使用重复的径向(放射性)渐变创建背景图像。（CSS3）
						*/
			background-image: linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8))
			.banner-title
				flex:1
				padding:0  .2rem
				font-size:.32rem
			.banner-number
				height:.4rem
				line-height:.4rem
				margin-top:.1rem
				padding:0 .4rem
				border-radius:0.2rem
				background: rgba(0, 0, 0, .5)
				font-size:.24rem
				
				.banner-icon
					font-size:.24rem


			
			


			   
</style>
