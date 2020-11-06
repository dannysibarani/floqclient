

export const state = () => ({
	quality_metrics : null, 
})

export const getters = {
	quality_metrics(state) {
		return state.quality_metrics
	}
}

export const mutations = {
	SET_QUALITY_METRICS(state, quality_metrics) {
		state.quality_metrics = quality_metrics
	}
}

export const actions = {
	async getQualityMetrics({commit}, project_id) {
		let response = await this.$axios.$get(`quality-metrics?project=${project_id}`)

		commit('SET_QUALITY_METRICS', response.data) 

		return response
	}
}