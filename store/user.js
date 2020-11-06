
export const state = () => ({
	users: null
})

export const getters = {
	users(state) {
		return state.users 
	}
}

export const mutations = {
	SET_USERS(state, users) {
		state.users = users
	}
}

export const actions = {
	async getUsers({commit}) {
		let response = await this.$axios.$get('users')

		commit('SET_USERS', response.data)

		return response 
	}
}