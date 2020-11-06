
export const state = () => ({
	stakeholders: null, 
	stakeholder: null, 
})

export const getters = {
	stakeholders(state) {
		return state.stakeholders
	}, 

	stakeholder(state) {
		return state.stakeholder
	}
}

export const mutations = {
	SET_STAKEHOLDERS(state, stakeholders) {
		state.stakeholders = stakeholders
	}, 

	SET_STAKEHOLDER(state, stakeholder) {
		state.stakeholder = stakeholder
	}
}

export const actions = {
	//project_id : Number
	async getStakeholders({commit}, project_id) {
		let response = await this.$axios.$get(`stakeholders?project=${project_id}`)

		commit('SET_STAKEHOLDERS', response.data)
		
		return response
	}, 

	//project_id : Number, stakeholder_id (= user id) : Number
	async getStakeholder({commit}, {project_id, stakeholder_id}) {
		let response = await this.$axios.$get(`stakeholders/${stakeholder_id}?project=${project_id}`)

		commit('SET_STAKEHOLDER', response.data)

		return response
	}, 

	//project_id : Number, stakeholder_id (= user id) : Number, project_role_id : Number
	async update({dispatch}, {project_id, stakeholder_id, project_role_id}) {
		let response = await this.$axios.$patch(`stakeholders/${stakeholder_id}?project=${project_id}`, 
			{
				project_role_id: project_role_id
			}
		)

		dispatch('getStakeholders', project_id)

		return response
	}, 

	//project_id : Number, stakeholder_id (= user id) : Number, project_role_id : Number
	async store({dispatch}, {project_id, user_id, project_role_id}) {
		let response = await this.$axios.$post('stakeholders', 
			{
				project_id : project_id,
				user_id : user_id,  
				project_role_id : project_role_id
			}
		)//.then((error) => ( console.log(error.response)))

		dispatch('getStakeholders', project_id)

		return response
	},  

	//project_id : Number, stakeholder_id (= user id) : Number
	async destroy({dispatch}, {project_id, stakeholder_id}) {
		let response = await this.$axios.$delete(`stakeholders/${stakeholder_id}?project=${project_id}`)

		dispatch('getStakeholders', project_id)

		return response
	}
}