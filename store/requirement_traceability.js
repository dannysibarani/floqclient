

export const state = () => ({
	requirement_traceabilities : null 
})

export const getters = {
	requirement_traceabilities(state) {
		return state.requirement_traceabilities
	}
}

export const mutations = {
	SET_REQUIREMENT_TRACEABILITIES(state, requirement_traceabilities) {
		state.requirement_traceabilities = requirement_traceabilities
	}
}

export const actions = {
	async getRequirementTraceabilities({commit}, project_id) {
		let response = await this.$axios.$get(`requirement-traceabilities?project=${project_id}`)

		commit('SET_REQUIREMENT_TRACEABILITIES', response.data) 

		return response
	}
}