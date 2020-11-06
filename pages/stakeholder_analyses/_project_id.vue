<template>
	<StakeholderAnalysisOverview 
		:stakeholder_analysis="stakeholder_analysis"
	/>
</template>

<script>
	import StakeholderAnalysisOverview from '~/components/StakeholderAnalyses/StakeholderAnalysisOverview'

	export default {
		components: {
			StakeholderAnalysisOverview, 
		}, 

		data() {
			return {
				stakeholder_analysis: []
			}
		}, 

		async asyncData({app, params}) {
			let response = await app.$axios.$get(`stakeholder-analyses?project=${params.project_id}`)

			return {
				stakeholder_analysis: response.data
			}
		}
	}
</script>