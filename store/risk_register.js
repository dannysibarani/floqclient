

export const state = () => ({
	risk_registers : null, 
})

export const getters = {
	risk_registers(state) {
		return state.risk_registers
	}
}

export const mutations = {
	SET_RISK_REGISTERS(state, risk_registers) {
		state.risk_registers = risk_registers
	}
}

export const actions = {
	async getRiskRegisters({commit}, project_id) {
		let response = await this.$axios.$get(`risk-registers?project=${project_id}`)

		commit('SET_RISK_REGISTERS', response.data) 

		return response
	}
}