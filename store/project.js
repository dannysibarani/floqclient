

export const state = () => ({
	projects : null, 
	project: null, 
})

export const getters = {
	projects(state) {
		return state.projects
	}, 

	project(state) {
		return state.project
	}
}

export const mutations = {
	SET_PROJECTS(state, projects) {
		state.projects = projects
	}, 

	SET_PROJECT(state, project) {
		state.project = project 
	}
}

export const actions = {
	async getProjects({commit}) {
		let response = await this.$axios.$get('projects')

		commit('SET_PROJECTS', response.data) 

		return response
	}, 

	//project_id : Number
	async getProject({commit}, project_id) {
		let response = await this.$axios.$get(`projects/${project_id}`)

		commit('SET_PROJECT', response.data) 

		return response
	}, 

	//project : { date_prepared: String, name: String, project_title: String}
	async store({dispatch}, project) {
		let response = await this.$axios.$post('projects', project)

		dispatch('getProjects')

		return response 
	}, 

	//project : { date_prepared: String, name: String, project_title: String}
	async update({dispatch}, project) {
		let response = await this.$axios.$patch(`projects/${project.id}`, project)

		dispatch('getProjects')

		return response
	}, 
}
