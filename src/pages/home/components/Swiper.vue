<template>
	<div class="swapper">
		<swiper :options="swiperOption" >
	    <swiper-slide v-for="item of list" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	 </div>
 
</template>
<script>
 export default {
    name: 'HomeSwiper',
    props:{
        list: Array
    },
    data () {
      return {
        swiperOption: {
        	pagination:{el:".swiper-pagination",clickable:true},
        	autoplay:{delay:3000},
        	loop:true
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .swapper >>> .swiper-pagination-bullet-active
    	background:#fff
    .swapper
    	overflow: hidden
    	width:100%
    	height:0
    	padding-bottom:31.25%
    	background:#eee
		.swiper-img
			width:100%
</style>