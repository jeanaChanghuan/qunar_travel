<template>
	<div>
		<div class="title">周末去哪儿</div>
		<div class="weekend-item" v-for="item of list" :key="item.id">
		    <img class="item-img" :src="item.imgUrl"/>
			<div class="item-title">{{item.title}}</div>
			<div class="item-desc">{{item.desc}}</div>
		</div>
		
		
	</div>
</template>
<script>
	export default {
		name:"Weekend",
		props:{
			list: Array
		}
	}
</script>
<style lang="stylus" scoped>
	.title
		line-height:0.8rem
		background:#eee
		text-indent:0.3rem
	.weekend-item
		margin-bottom:0.2rem
		.item-img
			height:2.784rem
			width:100%
			margin-bottom:0.1rem
		.item-title
			line-height:0.5rem

			text-indent:0.2rem
			margin-bottom:0
         .item-desc
         	
			line-height:0.35rem
			text-indent:0.2rem
			font-size:0.25rem
			color:#aaa
			margin-top:0

</style>