

export const state = () => ({
	requirement_verifications: null
})

export const getters = {
	requirement_verifications(state) {
		return state.requirement_verifications
	}
}

export const mutations = {
	SET_REQUIREMENT_VERIFICATIONS(state, requirement_verifications) {
		state.requirement_verifications = requirement_verifications
	}
}

export const actions = {
	async getRequirementVerifications({commit}, project_id) {
		let response = await this.$axios.$get(`requirement-verifications?project=${project_id}`)

		commit('SET_REQUIREMENT_VERIFICATIONS', response.data) 

		return response
	}
}