<template>
	<tr>
		<td><input type="checkbox" class="checkbox"></td>
		<td>{{ project_name }} </td>
		<td>{{ project_role.name }}</td>
		<td>{{ project_role.description }}</td>
		<td>
			<nuxt-link class="button" :to="link_to_edit_project_role" >
				<span class="icon is-small"><font-awesome-icon :icon="['fas', 'edit']" /></span>
				<span>Edit</span>
			</nuxt-link>
		</td>
	</tr>
</template>

<script>
	export default {
		props: {
			project_name: {
				required: true, 
				type: String, 
			}, 

			project_role: {
				required: true, 
				type: Object, 
			}, 
		}, 
		
		computed: {
			link_to_edit_project_role() {
				return {
					name: 'project_roles-project_id-project_role_id-edit', 
					params: {project_id: this.project_role.project_id, project_role_id: this.project_role.id}
				}
			}
		}
	}
</script>