<template>
	<div class="table-container">
		<table class="table is-hoverable is-fullwidth">
			<thead>
				<tr>
					<th><input type="checkbox" class="checkbox"></th>
					<th>Project Name</th>
					<th>Role</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th><input type="checkbox" class="checkbox"></th>
					<th>Project Name</th>
					<th>Role</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</tfoot>

			<tbody>
				<ProjectRoleRow 
					v-for="project_role in project_roles"
					:key="project_role.id"
					:project_role="project_role"
					:project_name="project_name"
				/>
			</tbody>
		</table>
	</div>
</template>

<script>
	import ProjectRoleRow from '~/components/ProjectRoles/ProjectRoleRow'
	export default {
		components: {
			ProjectRoleRow, 
		}, 

		props: {
			project_roles: {
				required: true, 
				type: Array, 
			}, 

			project_name: {
				required: true, 
				type: String, 
			}
		}, 

	}
</script>