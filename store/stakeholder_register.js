
export const state = () => ({
	stakeholder_register : null
})

export const getters = {
	stakeholderRegister(state) {
		return state.stakeholder_register
	}
}

export const mutations = {
	SET_STAKEHOLDER_REGISTER(state, stakeholder_register) {
		state.stakeholder_register = stakeholder_register
	}
}

export const actions = {
	async getStakeholderRegister({commit}, params) {
		let project_id = parseInt(params.project_id)
		//console.log(params.project_id)
		let response = await this.$axios.$get(`stakeholder-registers?project=${project_id}`)

		commit('SET_STAKEHOLDER_REGISTER', response.data) 

		return response
	}
}