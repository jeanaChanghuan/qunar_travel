<template>
	<div>
		<router-link
		   tag="div"
		   class="header-back"
		   to="/">
			<span class="iconfont header-icon">&#xe624;</span>
		</router-link>
		<div class="header-fixed" 
			 v-show="showHeader"
			 :style="{opacity:opacity}"
			>
			<router-link to="/">
				<span class="iconfont backicon">&#xe624;</span>
			</router-link>
			城市详情
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Header',
		data (){
			return{
				showHeader:false,
				opacity:0
			}
		},
		methods :{
			heanderScrollHandle (){
				console.log('scroll')
				var top = document.documentElement.scrollTop;
				if(top > 16 ){
					//console.log(top);
					this.showHeader = true
					let opacity = top / 140
					this.opacity = opacity > 1 ? 1 : opacity 
				}else {
					this.showHeader = false
				}
				
				
			}
		},
		activated (){
			window.addEventListener('scroll',
				this.heanderScrollHandle)
		},
		deactivated (){
			window.removeEventListener('scroll',
				this.heanderScrollHandle)
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header-back
		z-index:1
		position:absolute
		top:.2rem
		left:.2rem
		width:.8rem
		height:.8rem
		background:rgba(0,0,0,.5)
		border-radius:.4rem
		line-height:.8rem
		text-align:center
		.header-icon
			color:#fff
			font-size:.42rem
	.header-fixed
		z-index:99
		position:fixed
		top:0
		left:0
		right:0
		height: .86rem
		background: $bgColor
		line-height: .86rem
		text-align:center
		color:#fff
		.backicon
			height:.64rem
			line-height:.64rem
			position:absolute
			left:0
			bottom:0.1rem
			font-size:.4rem
			text-indent:.1rem
			color:#fff
			
</style>