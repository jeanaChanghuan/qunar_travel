<template>
	<div>
		<detail-header ></detail-header>
		<detail-banner 
			:sightName="sightName"
			:bannerImg="bannerImg"
			:gallaryImgs="gallaryImgs"
		>
		</detail-banner>
		<div class="content">
			<datail-list :list="list"></datail-list>
		</div>
	</div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DatailList from './components/List'
import axios from 'axios'
	export default {
		name:"Detail",
		components:{
			DetailBanner,
			DetailHeader,
			DatailList
		},
		data () {
			return{
				sightName:"",
				bannerImg:"",
				gallaryImgs:[],
				list:[]

			}
		},
		methods:{
			getDatilInfo(){
				axios.get('/api/detail.json',
					{
						params : {
						id : this.$route.params.id //从路由获取页面id
					}
				}).then(this.getDetailSucc)
			},
			getDetailSucc (resulte){
				const res = resulte.data
				if(res.ret && res.data){
					let data = res.data
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
		mounted (){
			this.getDatilInfo()
		}
		
	}
</script>
<style lang="stylus" scoped>
	.content
		height:15rem
		
</style>