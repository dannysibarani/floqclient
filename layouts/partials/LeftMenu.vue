<template>
	<aside class="menu">

		<p class="menu-label">General</p>
		<ul class="menu-list">
			<li @click.prevent="setActiveElement('index')">
				<nuxt-link 
					:to="{name: 'index'}"
					:class="{'is-active': isActive('index')}"
				>
					
					<span class="icon"><font-awesome-icon :icon="['fas', 'tachometer-alt']"/></span>
					Dashboard
				</nuxt-link>
			</li>

		</ul>

		<template v-if="hasAdministrator">
			<p class="menu-label">Administration</p>
			<LeftMenuAdministrator />
		</template>
		<template v-else>
			<LeftMenuOthers />
		</template>

	</aside>
</template>


<script>
	import {mapGetters, mapActions} from 'vuex'
	import LeftMenuAdministrator from '~/layouts/partials/LeftMenuAdministrator'
	import LeftMenuOthers from '~/layouts/partials/LeftMenuOthers'
	export default {
		components: {
			LeftMenuAdministrator, 
			LeftMenuOthers, 
		}, 

		data() {
			return {
				activeElement: 1, 
			}
		}, 

		methods: {
			...mapActions({
				setPosition: 'navigation/setPosition'
			}), 

			async logout() {
				await this.$auth.logout()
			}, 

			setActiveElement(activeElement) {
				this.setPosition(activeElement)
			}, 

			isActive(activeElement) {
				return this.position === activeElement
			}
		}, 

		created() {
			if(this.$route.name!='index') {
				this.$router.push({
					name: 'index'
				})
			}
		},

		computed: {
			...mapGetters({
				hasAdministrator: 'me/hasAdministrator', 
				position: 'navigation/position', 
			})
		}, 
	}
</script>
