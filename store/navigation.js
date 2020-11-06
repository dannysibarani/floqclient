

export const state = () => ({
	selected_project_id : null, 

	position : 'index'
})

export const getters = {
	position(state) {
		return state.position
	}, 

	selected_project_id(state) {
		return state.selected_project_id
	}
}

export const mutations = {
	SET_POSITION(state, position) {
		state.position = position
	}, 

	SET_SELECTED_PROJECT_ID(state, project_id) {
		state.selected_project_id = project_id
	}
}

export const actions = {
	setSelectedProjectId({commit}, project_id) {
		commit('SET_SELECTED_PROJECT_ID', project_id) 
	}, 

	setPosition({commit}, position) {
		commit('SET_POSITION', position) 
	}
}