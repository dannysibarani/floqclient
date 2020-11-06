<template>
	<div>
		<h1 class="title">Dashboard</h1>
		<template v-if="hasSuperAdministrator">

			<nav class="level">
				<div class="left-level">
					
				</div>
				<div class="right-level">
					<p class="level-item">
						<nuxt-link class="button is-success" 
							:to="{name: 'projects-create'}"
						>
							Create New Project
						</nuxt-link>
					</p>
				</div>
			</nav>
			<ProjectOverview />

		</template>
		<template v-else>

			<nav class="level">
				<div class="left-level">
					
				</div>
				<div class="right-level">
					<p class="level-item" v-if="hasAdministrator">
						<nuxt-link class="button is-success" 
							:to="{name: 'projects-create'}"
						>
							Create New Project
						</nuxt-link>
					</p>
				</div>
			</nav>
			<ProjectOverview />

		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import ProjectOverview from '~/components/Projects/ProjectOverview'
	export default {
		components: {
			ProjectOverview, 
		}, 

		computed: {
			...mapGetters({
				hasSuperAdministrator: 'me/hasSuperAdministrator', 
				hasAdministrator: 'me/hasAdministrator'
			})
		}, 

		async asyncData({store}) {
			if(store.getters['me/me']==null) {
				await store.dispatch('me/getMe')
			}
		}

	}
</script>