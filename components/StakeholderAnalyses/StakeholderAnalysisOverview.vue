<template>
	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless">
			<Header 
				:colspan="6"
				:title="'STAKEHOLDER ANALYSIS'"
			/>
			<tbody>
				<ProjectTitle
					:colspans="[1, 5]"
					:content="stakeholder_analysis.project_title"
				/>
				<ProjectManagerAndDateHeader
					:colspans="[1, 2, 1, 2]"
					:project_manager_name="stakeholder_analysis.project_manager.name"
					:date_prepared="stakeholder_analysis.date_prepared"
				/>

				<Divider :colspan="6" />

				<tr>
					<th>Name</th>
					<th>Role</th>
					<th>Power</th>
					<th>Interest</th>
					<th>Influence</th>
					<th>Attitude</th>
				</tr>

				<StakeholderAnalysisOverviewList 
					v-for="stakeholder in stakeholder_analysis.stakeholder_analyses"
					:stakeholder="stakeholder"
					:key="stakeholder.id"
				/>

			</tbody>
		</table>
	</div>
</template>

<script>
	import StakeholderAnalysisOverviewList from '~/components/StakeholderAnalyses/StakeholderAnalysisOverviewList'
	import Header from '~/components/Reports/Header'
	import ProjectTitle from '~/components/Reports/ProjectTitle'
	import ProjectManagerAndDateHeader from '~/components/Reports/ProjectManagerAndDateHeader'
	import Divider from '~/components/Reports/Divider'

	export default {
		components: {
			StakeholderAnalysisOverviewList, 
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 
			
		}, 

		props: {
			stakeholder_analysis: {
				required: true, 
				type: Object, 
			}
		}, 

	}
</script>