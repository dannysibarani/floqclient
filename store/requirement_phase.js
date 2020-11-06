

export const state = () => ({
	requirement_phases: null
})

export const getters = {
	requirement_phases(state) {
		return state.requirement_phases
	}
}

export const mutations = {
	SET_REQUIREMENT_PHASES(state, requirement_phases) {
		state.requirement_phases = requirement_phases
	}
}

export const actions = {
	async getRequirementPhases({commit}, project_id) {
		let response = await this.$axios.$get(`requirement-phases?project=${project_id}`)

		commit('SET_REQUIREMENT_PHASES', response.data) 

		return response
	}
}