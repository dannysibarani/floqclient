

export const state = () => ({
	resources: null, 
})

export const getters = {
	resources(state) {
		return state.resources
	}
}

export const mutations = {
	SET_RESOURCES(state, resources) {
		state.resources = resources
	}
}

export const actions = {
	async getResources({commit}) {
		let response = await this.$axios.$get('resources') 

		commit('SET_RESOURCES', response.data) 

		return response
	}
}