<template>
	<div class="table-container">
		<table class="table is-hoverable is-fullwidth">
			<thead>
				<tr>
					<th class="is-narrow"><input type="checkbox"></th>
					<th class="is-narrow">Date Prepared</th>
					<th>Name</th>
					<th>Project Title</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th class="is-narrow"><input type="checkbox"></th>
					<th class="is-narrow">Date Prepared</th>
					<th>Name</th>
					<th>Project Title</th>
					<th>Actions</th>
				</tr>
			</tfoot>
			
			<tbody>
				<ProjectOverviewList 
					v-for="project in projects"
					:key="project.id"
					:project="project"
				/>
			</tbody>

		</table>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import ProjectOverviewList from '~/components/Projects/ProjectOverviewList'

	export default {
		components: {
			ProjectOverviewList, 
		}, 

		computed: {
			...mapGetters({
				projects: 'project/projects'
			})
		}, 

		created() {
			this.$store.dispatch('project/getProjects')
		}
	}
</script>