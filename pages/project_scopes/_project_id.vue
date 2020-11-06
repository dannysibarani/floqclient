<template>

	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless">
			<Header 
				:colspan="4"
				:title="'PROJECT SCOPE STATEMENT'"
			/>
			<tbody>
			
				<ProjectTitle
					:colspans="[1, 3]"
					:content="project_scope.project.project_title"
				/>

				<ProjectManagerAndDateHeader
					:colspans="[1, 1, 1, 1]"
					:project_manager_name="project_scope.project_manager.name"
					:date_prepared="project_scope.project.date_prepared"
				/>

				<Divider :colspan="4" />
				
				<Message :colspan="4"
					:title="'Project Scope Definition:'"
					:content="project_scope.project_scope_defenition"
				/>

				<Message :colspan="4"
					:title="'Project Deliverables:'"
					:content="project_scope.project_deliverables"
				/>

				<Message :colspan="4"
					:title="'Product Acceptance Criteria:'"
					:content="project_scope.product_acceptance_criteria"
				/>

				<Message :colspan="4"
					:title="'Project Exclusion:'"
					:content="project_scope.project_exclusion"
				/>

				<Message :colspan="4"
					:title="'Project Constraints:'"
					:content="project_scope.project_constraints"
				/>

				<Message :colspan="4"
					:title="'Project Assumptions:'"
					:content="project_scope.project_assumptions"
				/>
			
			</tbody>
		</table>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex'
	import Header from '~/components/Reports/Header'
	import ProjectTitle from '~/components/Reports/ProjectTitle'
	import ProjectManagerAndDateHeader from '~/components/Reports/ProjectManagerAndDateHeader'
	import Divider from '~/components/Reports/Divider'
	import Message from '~/components/Reports/Message'

	export default {
		components: {
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 
			Message, 
		}, 

		computed: {
			...mapGetters({
				project_scope : 'project_scope/project_scope'
			})
		}, 

		async asyncData({store, params}) {
			await store.dispatch('project_scope/getProjectScope', params.project_id)
		}
	}
</script>