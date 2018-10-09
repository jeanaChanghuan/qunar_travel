<template>
	<div class="header">
		<router-link to="/">
			<span class="iconfont backicon">&#xe624;</span>
		</router-link>
		城市选择
	</div>

</template>
<script>
	export default {
		name: "Header"
	}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'

	.header
		height: .86rem
		background: $bgColor
		line-height: .86rem
		text-align:center
		color:#fff
		position:relative
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