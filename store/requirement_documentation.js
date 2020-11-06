

export const state = () => ({
	requirement_documentations : null, 
	requirement_documentation: null, 
})

export const getters = {
	requirement_documentations(state) {
		return state.requirement_documentations
	}, 

	requirement_documentation(state) {
		return state.requirement_documentation
	}, 
}

export const mutations = {
	SET_REQUIREMENT_DOCUMENTATIONS(state, requirement_documentations) {
		state.requirement_documentations = requirement_documentations
	}, 

	SET_REQUIREMENT_DOCUMENTATION(state, requirement_documentation) {
		state.requirement_documentation = requirement_documentation
	}
}

export const actions = {
	async getRequirementDocumentations({commit}, project_id) {	
		let response = await this.$axios.$get(`requirement-documentations?project=${project_id}`)

		commit('SET_REQUIREMENT_DOCUMENTATIONS', response.data) 

		return response
	}, 

	async getRequirementDocumentation({commit}, requirement_id) {
		let response = await this.$axios.$get(`requirement-documentations/${requirement_id}`)

		commit('SET_REQUIREMENT_DOCUMENTATION', response.data) 

		return response
	}, 

	setRequirementDocumentation({commit}, requirement_documentation) {
		commit('SET_REQUIREMENT_DOCUMENTATION', requirement_documentation)
	}, 

	async update({dispatch}, {id, project_id, user_id, project_role_id, sid, requirements, requirement_category_id, 
		requirement_priority_id, requirement_phase_id, acceptance_criteria, verifications}) {
		let response = await this.$axios.$patch(`requirement-documentations/${id}`, {
			user_id: user_id, 
			project_role_id: project_role_id, 
			sid: sid, 
			requirements: requirements, 
			requirement_category_id: requirement_category_id, 
			requirement_priority_id: requirement_priority_id, 
			requirement_phase_id: requirement_phase_id, 
			acceptance_criteria: acceptance_criteria, 
			verifications: verifications
		})

		dispatch('getRequirementDocumentations', project_id)

		return response
	}, 

	async store({dispatch}, {project_id, user_id, project_role_id, sid, requirements, requirement_category_id, 
		requirement_priority_id, requirement_phase_id, acceptance_criteria, verifications}) {
		let response = await this.$axios.$post('requirement-documentations', 
			{
				project_id: project_id, 
				user_id: user_id, 
				project_role_id: project_role_id, 
				sid: sid, 
				requirements: requirements, 
				requirement_category_id: requirement_category_id, 
				requirement_priority_id: requirement_priority_id, 
				requirement_phase_id: requirement_phase_id, 
				acceptance_criteria: acceptance_criteria, 
				verifications: verifications
			}
		)//.then((error) => ( console.log(error.response)))

		dispatch('getRequirementDocumentations', project_id)

		return response
	}, 

	async destroy({dispatch}, {project_id, requirement_id}) {
		let response = await this.$axios.$delete(`requirement-documentations/${requirement_id}`)

		dispatch('getRequirementDocumentations', project_id)

		return response
	}
}
