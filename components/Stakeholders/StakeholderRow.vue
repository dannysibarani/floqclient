<template>
	<tr>
		<td class="is-narrow"><input type="checkbox"></td>
		<td>{{ user.name }}</td>
		<td><code>{{ user.email }}</code></td>
		<td>{{ project.name }}</td>
		<td>
			<div class="select">
				<select 
					class="is-focus"
					v-model="selectedProjectRoleId"
				>
					<option value="">Please choose a project role</option>
					<option
						v-for="project_role in project_roles" 
						:value="project_role.id"
						:key="project_role.id"
					>
						{{ project_role.name }}
					</option>
				</select>
			</div>
		</td>
	</tr>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		props: {
			user: {
				required: true, 
				type: Object, 
			}, 
			project: {
				required: true, 
				type: Object, 
			}, 
			project_roles: {
				required: true, 
				type: Array, 
			}
		}, 

		/*data() {
			return {
				selectedProjectRoleId: ""
			}
		},*/ 

		/*created() {
			this.selectedProjectRoleId = this.actual_project_role.id==null ? "" : this.actual_project_role.id
		}, */

		computed: {
			selectedProjectRoleId: {
				get() {
					return this.actual_project_role ? this.actual_project_role.id : ''
				}, 

				set(selectedProjectRoleId) {
					this.store({
						project_id: this.project.id, 
						user_id : this.user.id, 
						project_role_id : selectedProjectRoleId
					})
				}
			}, 

			actual_project_role() {
				let role = this.user.project_roles.find(role => role.project_id == this.project.id)
				
				if(typeof role == 'undefined') {
					return null
				}
				return role
			}, 
		}, 

		methods: {
			...mapActions({
				store: 'stakeholder/store'
			}), 
		}
	}
</script>