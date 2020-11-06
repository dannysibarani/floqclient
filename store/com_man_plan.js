

export const state = () => ({
	com_man_plans : null
})

export const getters = {
	com_man_plans(state) {
		return state.com_man_plans
	}
}

export const mutations = {
	SET_COM_MAN_PLANS(state, com_man_plans) {
		state.com_man_plans = com_man_plans
	}
}

export const actions = {
	async getComManPlans({commit}, project_id) {
		let response = await this.$axios.$get(`com-man-plans?project=${project_id}`)

		commit('SET_COM_MAN_PLANS', response.data) 

		return response
	}
}