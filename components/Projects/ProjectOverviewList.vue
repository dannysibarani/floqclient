<template>
	<tr>
		<td><input type="checkbox"></td>
		<td>{{ project.date_prepared }}</td>
		<td>
			<template v-if="hasMember">
				<nuxt-link
					:to="link_to_project"
				>
					{{ project.name }}
				</nuxt-link>
			</template>
			<template v-else>
				{{ project.name }}
			</template>

		</td>
		<td>{{ project.project_title }}</td>
		<td>

			<div class="buttons are-small">
				<template v-if="hasMember">
					<nuxt-link class="button" :to="link_to_project" >
						<span class="icon is-small"><font-awesome-icon :icon="['fas', 'eye']" /></span>
						<span>Show</span>
					</nuxt-link>
				</template>
				<template v-if="hasAdministrator">
					<nuxt-link class="button" :to="link_to_edit_project" >
						<span class="icon is-small"><font-awesome-icon :icon="['fas', 'edit']" /></span>
						<span>Edit</span>
					</nuxt-link>
				</template>
			</div>

		</td>
	</tr>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		props: {
			project: {
				required: true, 
				type: Object, 
			}
		}, 

		computed: {
			...mapGetters({
				hasMember: 'me/hasMember', 
				hasAdministrator: 'me/hasAdministrator'
			}), 

			link_to_project() {
				return {name: 'projects-id', params: {id: this.project.id}}
			}, 

			link_to_edit_project() {
				return {name: 'projects-id-edit', params: {id: this.project.id}}
			}
		}, 

	}
</script>