
export const state = () => ({
	project_charter : null
})

export const getters = {
	project_charter(state) {
		return state.project_charter
	}
}

export const mutations = {
	SET_PROJECT_CHARTER(state, project_charter) {
		state.project_charter = project_charter
	}
}

export const actions = {
	async getProjectCharter({commit}, project_id) {
		let response = await this.$axios.$get(`project-charters?project=${project_id}`)

		commit('SET_PROJECT_CHARTER', response.data)

		return response
	}
}