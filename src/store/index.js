import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultCity = "上海"

try{
	if(localStorage.city){
		this.defaultCity = localStorage.city
	}
}catch (e){}

export default new Vuex.Store({
	state:{
		city: this.defaultCity
	},
	actions :{
		cityChange (ctx,city){
			ctx.commit('handleCityChange',city)
		}
	},
	mutations :{
		handleCityChange (state,city){
			state.city = city
			try{
				if(localStorage.city){
					localStorage.city = city
				}
			}catch (e){}
			
		}
	}
})