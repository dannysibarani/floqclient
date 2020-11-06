<template>

	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless">
			<Header 
				:colspan="5"
				:title="'COMMUNICATION MANAGEMENT PLAN'"
			/>
			<tbody>
			
				<ProjectTitle
					:colspans="[1, 4]"
					:content="com_man_plans.project_title"
				/>

				<ProjectManagerAndDateHeader
					:colspans="[1, 1, 1, 2]"
					:project_manager_name="com_man_plans.project_manager.name"
					:date_prepared="com_man_plans.date_prepared"
				/>

				<Divider :colspan="5" />
				
				<tr>
					<th>Stakeholder</th>
					<th>Information</th>
					<th>Method</th>
					<th>Timing or Frequency</th>
					<th>Sender / Initiator</th>
				</tr>

				<ComManPlanRow
					v-for="com_man_plan in com_man_plans.communication_management_plans"
					:com_man_plan="com_man_plan"
					:key="com_man_plan.id"
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

	import ComManPlanRow from '~/components/ComManPlans/ComManPlanRow'

	export default {
		components: {
			ComManPlanRow, 
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 
		}, 

		computed: {
			...mapGetters({
				com_man_plans : 'com_man_plan/com_man_plans'
			})
		}, 

		async asyncData({store, params}) {
			await store.dispatch('com_man_plan/getComManPlans', params.project_id)
		}
	}
</script>