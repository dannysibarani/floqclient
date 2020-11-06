<template>

	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless my-small-text">
			<Header 
				:colspan="9"
				:title="'REQUIREMENTS TRACEABILITY MATRIX'"
			/>
			<tbody>
			
				<ProjectTitle
					:colspans="[2, 7]"
					:content="req_traces.project_title"
				/>

				<ProjectManagerAndDateHeader
					:colspans="[2, 3, 2, 2]"
					:project_manager_name="req_traces.project_manager.name"
					:date_prepared="req_traces.date_prepared"
				/>

				<Divider :colspan="9" />

				<tr>
					<th colspan="5" class="has-text-centered">Requirements Information</th>
					<th colspan="4" class="has-text-centered">Relationship Traceability</th>
				</tr>
				
				<tr>
					<th>ID</th>
					<th>Requirements</th>
					<th>Source</th>
					<th>Priority</th>
					<th>Category</th>
					<th>Business Objective</th>
					<th>Deliverable</th>
					<th>Verification</th>
					<th>Validation</th>
				</tr>

				<RequirementTraceabilityRow
					v-for="req_trace in req_traces.requirements"
					:requirement_traceability="req_trace"
					:key="req_trace.id"
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

	import RequirementTraceabilityRow from '~/components/RequirementTraceabilities/RequirementTraceabilityRow'

	export default {
		components: {
			RequirementTraceabilityRow, 
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 
		}, 

		computed: {
			...mapGetters({
				req_traces : 'requirement_traceability/requirement_traceabilities'
			})
		}, 

		async asyncData({store, params}) {
			await store.dispatch('requirement_traceability/getRequirementTraceabilities', params.project_id)
		}
	}
</script>