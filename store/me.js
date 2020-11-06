
export const state = () => ({
	me: null, 
	hasAdministrator: false, 
	hasSuperAdministrator: false, 
	hasMember: false, 
})

export const getters = {
	me(state) {
		return state.me
	}, 

	hasAdministrator(state) {
		return state.hasAdministrator
	}, 

	hasSuperAdministrator(state) {
		return state.hasSuperAdministrator
	}, 

	hasMember(state) {
		return state.hasMember
	}, 
}

export const mutations = {
	SET_ME(state, me) {
		state.me = me
	}, 

	HAS_ADMINISTRATOR(state, hasRole) {
		state.hasAdministrator = hasRole
	}, 

	HAS_SUPER_ADMINISTRATOR(state, hasRole) {
		state.hasSuperAdministrator = hasRole
	}, 

	HAS_MEMBER(state, hasRole) {
		state.hasMember = hasRole
	}, 
}

export const actions = {
	async getMe({commit}) {
		let response = await this.$axios.$get('auth/me')

		commit('SET_ME', response.data)

		let role = response.data.roles.find(role => role.name === 'ADMINISTRATOR')
		commit('HAS_ADMINISTRATOR', typeof role === 'undefined' ? false : true)

		role = response.data.roles.find(role => role.name === 'SUPER_ADMINISTRATOR')
		commit('HAS_SUPER_ADMINISTRATOR', typeof role === 'undefined' ? false : true)

		role = response.data.roles.find(role => role.name === 'MEMBER')
		commit('HAS_MEMBER', typeof role === 'undefined' ? false : true)

		return response
	}, 
}