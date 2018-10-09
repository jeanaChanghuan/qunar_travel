<template>
	<div>
		<ul class="list">
			<li class="item" 
			 v-for="(item,key) of cities" 
			 :key="key"
			 @click="handleClick"
			 >{{key}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "Alphabet",
		props:{
			cities:Object
		},
		methods:{
			handleClick (e){
				this.$emit('change',e.target.innerText)
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.list
		display:flex
		/*
		内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。
		flex-start 弹性项目向行头紧挨着填充
		flex-end 弹性项目向行尾紧挨着填充
		center 弹性项目居中紧挨着填充
		space-between 弹性项目平均分布在该行上
		space-around 弹性项目平均分布在该行上，两边留有一半的间隔空间
				*/
		justify-content:center
		/*flex-direction 指定了弹性子元素在父容器中的显示顺序
		row：横向从左到右排列（左对齐），默认的排列方式。
		row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
		column：纵向排列。
		column-reverse：反转纵向排列，从后往前排，最后一项排在最上面
		*/
		flex-direction:column
		position:absolute
		right:0
		bottom:0
		top:0
		width:0.4rem
		.item
			font-size:.35rem
			text-align:center
			color:$bgColor
			padding:.02rem

</style>
