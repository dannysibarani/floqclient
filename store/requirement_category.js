

export const state = () => ({
	requirement_categories: null
})

export const getters = {
	requirement_categories(state) {
		return state.requirement_categories
	}
}

export const mutations = {
	SET_REQUIREMENT_CATEGORIES(state, requirement_categories) {
		state.requirement_categories = requirement_categories
	}
}

export const actions = {
	async getRequirementCategories({commit}, project_id) {
		let response = await this.$axios.$get(`requirement-categories?project=${project_id}`)

		commit('SET_REQUIREMENT_CATEGORIES', response.data) 

		return response
	}
}