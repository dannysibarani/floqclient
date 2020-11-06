

export const state = () => ({
	stakeholder_eng_asses : null, 
})

export const getters = {
	stakeholder_eng_asses(state) {
		return state.stakeholder_eng_asses
	}
}

export const mutations = {
	SET_STAKEHOLDER_ENG_ASSES(state, stakeholder_eng_asses) {
		state.stakeholder_eng_asses = stakeholder_eng_asses
	}
}

export const actions = {
	async getStakeholderEngAsses({commit}, project_id) {
		let response = await this.$axios.$get(`stakeholder-eng-asses?project=${project_id}`)

		commit('SET_STAKEHOLDER_ENG_ASSES', response.data) 

		return response
	}
}