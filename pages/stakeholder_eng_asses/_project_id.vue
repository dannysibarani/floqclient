<template>

	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless">
			<Header 
				:colspan="6"
				:title="'STAKEHOLDER ENGAGEMENT ASSESSMENT'"
			/>
			<tbody>
			
				<ProjectTitle
					:colspans="[1, 5]"
					:content="stakeholder_eng_asses.project_title"
				/>

				<ProjectManagerAndDateHeader
					:colspans="[1, 2, 1, 2]"
					:project_manager_name="stakeholder_eng_asses.project_manager.name"
					:date_prepared="stakeholder_eng_asses.date_prepared"
				/>

				<Divider :colspan="6" />
				
				<tr>
					<th>Stakeholder</th>
					<th>Unaware</th>
					<th>Resistant</th>
					<th>Neutral</th>
					<th>Supportive</th>
					<th>Leading</th>
				</tr>

				<StakeholderEngAssRow
					v-for="stakeholder_eng_ass in stakeholder_eng_asses.stakeholder_engagement_assessments"
					:stakeholder_eng_ass="stakeholder_eng_ass"
					:key="stakeholder_eng_ass.id"
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

	import StakeholderEngAssRow from '~/components/StakeholderEngAsses/StakeholderEngAssRow'

	export default {
		components: {
			StakeholderEngAssRow, 
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 
		}, 

		computed: {
			...mapGetters({
				stakeholder_eng_asses : 'stakeholder_eng_ass/stakeholder_eng_asses'
			})
		}, 

		async asyncData({store, params}) {
			await store.dispatch('stakeholder_eng_ass/getStakeholderEngAsses', params.project_id)
		}
	}
</script>