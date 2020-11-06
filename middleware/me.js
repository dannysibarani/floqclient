

export default function ({ app, store }) {
	if (app.$auth.loggedIn && store.getters['me/me']===null) {
		store.dispatch('me/getMe')
	}
}