<template>
	<div>
		<div class="search" >
			<input v-model="keys" class="search-input" 
			type="text" 
			placeholder="输入城市名或拼音"/>
		</div>
		<div  class="search-cities" v-show="keys" ref="wrapper">
			<div>
				<ul>
					<li class="item border-bottom"
					v-for="item of list" 
					:key="item.id"
					@click="handleSearchClick(item.name)"
					>{{item.name}}</li>
					<li class="item border-bottom"
					 v-show="!list.length"
					 >
					 没有匹配数据
					 </li>
				</ul>
			</div>
			
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
	export default {
		name : "Search",
		props:{
			cities:Object
		},
		data (){
			return{
				keys:"",
				list:[],
				timer:null
				
			}
		},
		methods :{
			handleSearchClick (city){
				//this.$store.commit('handleCityChange',city)
				this.handleCityChange(city);
				this.$router.push("/")
			},
             ...mapMutations(['handleCityChange'])
		}
		,
		watch :{
			keys (){
				
				if(this.timer){
					clearTimeout(this.timer);
				}
				if(!this.keys){
					this.list=[]
					return
				}
				this.timer = setTimeout(()=>{
					const results =[]
					for(let i in this.cities){
						this.cities[i].forEach(city => {
							if(city.spell.indexOf(this.keys)>-1 ||
								city.name.indexOf(this.keys)>-1){
								results.push(city)
							}
						}) 
					}
					this.list = results
				},100)
			
				
				
			}
		},
		mounted (){
			const scroll = new BScroll(this.$refs.wrapper,{click: true})
		}
	}
</script>
<style lang="stylus" scoped>
@import  '~styles/varibles.styl'
	.border-bottom
		&:before
			border-color:#ccc
	.search
		height: .72rem
		background: $bgColor
		padding: 0 0.1rem
		.search-input
			box-sizing:border-box
			height:.64rem
			line-height:.64rem
			text-align:center
			color:#666
			border-radius:0.06rem
			width:100%
			padding:0 0.1rem
	.search-cities
		z-index:1
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		background:#ccc
		overflow:hidden
		.item	
			height:.5rem
			line-height: .5rem
			background:#fff
		
			



</style>