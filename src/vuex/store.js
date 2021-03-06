import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//! 1.初始化状态, 要写成一个对象, 因为该state要管理n 多个组件的状态

const state = {
	sum: 0
}
//! 2.创建一个actions , 值为一个对象 包含:n个响应组件"动作"的函数
const actions = {
	// increase(context, value) {
	// ?context 是一个mini版的$store 要使用context.commit()去通知mutations加工状态
	// 	context.commit('INCREASE', value)
	// },
	// decrease(context, value) {
	// 	context.commit('DECREASE', value)
	// },
	increaseAsync(context, value) {
		console.log(context)
		setTimeout(() => {
			context.commit('INCREASE_ASYNC', value)
		}, 500)
	},
	increaseOdd(context, value) {
		if (context.state.sum % 2) {
			context.commit('INCREASE_ODD', value)
		}
	}
}
//! 3创建一个mutations 值为一个对象,包含 : n个真正用于加工状态的函数
const mutations = {
	INCREASE(state, value) {
		state.sum += value
	},
	DECREASE(state, value) {
		state.sum -= value
	},
	INCREASE_ASYNC(state, value) {
		state.sum += value
	},
	INCREASE_ODD(state, value) {
		state.sum += value
	}
}
// ?getters中配置的是state中的数据经过加工后的属性 -- 类似于vue 中的计算属性
const getters = {
	bigSum(state) {
		return state.sum * 100
	}
}

//!4 创建store 用于管理: state 对象 actions 对象 mutations 对象
const store = new Vuex.Store({ state, actions, mutations, getters })
export default store
