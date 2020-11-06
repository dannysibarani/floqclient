<template>
	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless">
			<Header 
				:colspan="6"
				:title="'STAKEHOLDER REGISTER'"
			/>

			<tbody>
				<ProjectTitle
					:colspans="[1, 5]"
					:content="stakeholder_register.project_title"
				/>
				<ProjectManagerAndDateHeader
					:colspans="[1, 2, 1, 2]"
					:project_manager_name="stakeholder_register.project_manager.name"
					:date_prepared="stakeholder_register.date_prepared"
				/>

				<Divider :colspan="6" />

				<tr>
					<th>Name</th>
					<th>Role</th>
					<th>Contact</th>
					<th>Requirements</th>
					<th>Expectation</th>
					<th>Classification</th>
				</tr>

				<StakeholderRegisterOverviewList 
					v-for="stakeholder in stakeholder_register.stakeholder_registers"
					:stakeholder="stakeholder"
					:key="stakeholder.id"
				/>

			</tbody>
		</table>
	</div>
</template>

<script>
	import StakeholderRegisterOverviewList from '~/components/StakeholderRegisters/StakeholderRegisterOverviewList'
	import Header from '~/components/Reports/Header'
	import ProjectTitle from '~/components/Reports/ProjectTitle'
	import ProjectManagerAndDateHeader from '~/components/Reports/ProjectManagerAndDateHeader'
	import Divider from '~/components/Reports/Divider'

	export default {
		components: {
			StakeholderRegisterOverviewList, 
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 

		}, 

		props: {
			stakeholder_register: {
				required: true, 
				type: Object, 
			}
		}, 

	}
</script>