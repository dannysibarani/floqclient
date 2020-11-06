

export const state = () => ({
	project_scope : null, 
})

export const getters = {
	project_scope(state) {
		return state.project_scope
	}
}

export const mutations = {
	SET_PROJECT_SCOPE(state, project_scope) {
		state.project_scope = project_scope
	}
}

export const actions = {
	async getProjectScope({commit}, project_id) {
		let response = await this.$axios.$get(`project-scope-statements?project=${project_id}`)

		commit('SET_PROJECT_SCOPE', response.data) 

		return response
	}
}