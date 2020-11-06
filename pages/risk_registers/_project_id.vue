<template>

	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless my-small-text">
			<Header 
				:colspan="10"
				:title="'RISK REGISTER'"
			/>
			<tbody>
			
				<ProjectTitle
					:colspans="[2, 8]"
					:content="risk_registers.project_title"
				/>

				<ProjectManagerAndDateHeader
					:colspans="[2, 3, 2, 3]"
					:project_manager_name="risk_registers.project_manager.name"
					:date_prepared="risk_registers.date_prepared"
				/>

				<Divider :colspan="10" />
				
				<tr>
					<th>Risk Id</th>
					<th>Risk Category</th>
					<th>Risk Event</th>
					<th>Probability</th>
					<th>Impact</th>
					<th>P x I</th>
					<th>Cost Value</th>
					<th>Contigency Value</th>
					<th>Risk Response</th>
					<th>Responsible</th>
				</tr>

				<RiskRegisterRow
					v-for="risk_register in risk_registers.risk_registers"
					:risk_register="risk_register"
					:key="risk_register.id"
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

	import RiskRegisterRow from '~/components/RiskRegisters/RiskRegisterRow'

	export default {
		components: {
			RiskRegisterRow, 
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 
		}, 

		computed: {
			...mapGetters({
				risk_registers : 'risk_register/risk_registers'
			})
		}, 

		async asyncData({store, params}) {
			await store.dispatch('risk_register/getRiskRegisters', params.project_id)
		}
	}
</script>