<template>
	<div>
		<div 
			 v-for="item of list"
			 :key="item.id"
		  >
		  	<div class="item-title border-bottom" >
		  		<span class="item-title-icon"></span>
				{{item.title}}
			
		  	</div>
			<div v-if="item.children" class="item-tilte-children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"DetailList",
		props:{
			list:Array
		}
	}
</script>
<style lang="stylus" scoped>
	.item-title
		height:0.8rem
		line-height:.8rem
		text-indent:.2rem
		font-size:.32rem
		position:relative
		left:0.4rem
		.item-title-icon
			width: .36rem
			height: .36rem
			position:absolute
			z-index:0
			left:-0.15rem
			top:.2rem
			display: inline-block
			background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
			    background-size: auto auto
			margin-right: .1rem
			background-size: .4rem 3rem
	.item-tilte-children
		padding-left:.4rem
		   
</style>