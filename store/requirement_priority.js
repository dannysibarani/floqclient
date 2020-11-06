

export const state = () => ({
	requirement_priorities: null
})

export const getters = {
	requirement_priorities(state) {
		return state.requirement_priorities
	}
}

export const mutations = {
	SET_REQUIREMENT_PRIORITIES(state, requirement_priorities) {
		state.requirement_priorities = requirement_priorities
	}
}

export const actions = {
	async getRequirementPriorities({commit}, project_id) {
		let response = await this.$axios.$get(`requirement-priorities?project=${project_id}`)

		commit('SET_REQUIREMENT_PRIORITIES', response.data) 

		return response
	}
}