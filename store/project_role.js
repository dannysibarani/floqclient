

export const state = () => ({
	project_roles: null
})

export const getters = {
	project_roles(state) {
		return state.project_roles
	}
}

export const mutations = {
	SET_PROJECTROLES(state, project_roles) {
		state.project_roles = project_roles
	}
}

export const actions = {
	async getProjectRoles({commit}, project_id) {
		let response = await this.$axios.$get(`project-roles?project=${project_id}`)

		commit('SET_PROJECTROLES', response.data) 

		return response
	}, 

	async store({dispatch}, {project_id, name, description}) {
		let response = await this.$axios.$post(`project-roles?project=${project_id}`, {
			project_id: project_id, 
			name: name, 
			description: description
		})

		dispatch('getProjectRoles', project_id)

		return response
	}, 

	async update({dispatch}, {id, project_id, name, description}) {
		let response = await this.$axios.$patch(`project-roles/${id}`, {
			name: name, 
			description: description
		})

		dispatch('getProjectRoles', project_id)

		return response
	}
}
