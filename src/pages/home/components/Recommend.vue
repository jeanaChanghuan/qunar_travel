<template>
	<div class="recommend">
		<div class="title">热销推荐</div>
		<ul>
			<router-link
			tag="li"
			class="item" 
			v-for="item of list" 
			:key="item.id"
			:to="'/detail/'+item.id"
			>
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<div class="item-title">{{item.title}}</div>
					<div class="item-desc">{{item.desc}}</div>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script >
	export default {
		name:"Recommend",
		props:{
			list: Array
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.title
		line-height: .8 rem
		background: #eee
		text-indent:.2rem
	.item
		height:1.9rem
		display:flex
		overflow:hidden
		.item-img
			height:1.7rem
			width:1.7rem
			padding:0.1rem
		.item-info
			padding:.1rem
			flex:1
			min-width:0
			.item-title
				line-height:0.54rem
				font-size:0.32rem
				ellipsis()
			.item-desc
				line-height:.44rem
				color:#aaa
				padding-bottom:0.1rem
				ellipsis()
			.item-button
				line-height:.4rem
				padding:0 0.15rem
				background:#ff8300
				border-radius:0.06rem
				color:#fff



		

</style>