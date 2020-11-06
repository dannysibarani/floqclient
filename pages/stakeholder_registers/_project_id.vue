<template>
	<StakeholderRegisterOverview 
		:stakeholder_register="stakeholder_register"
	/>
</template>

<script>
	import StakeholderRegisterOverview from '~/components/StakeholderRegisters/StakeholderRegisterOverview'
	export default {
		components: {
			StakeholderRegisterOverview, 
		}, 

		data() {
			return {
				stakeholder_register: null
			}
		}, 

		async asyncData({app, params}) {
			let response = await app.$axios.$get(`stakeholder-registers?project=${params.project_id}`)

			return {
				stakeholder_register : response.data
			}
		}
	}
</script>