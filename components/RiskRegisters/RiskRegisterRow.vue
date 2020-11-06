<template>
	<tr>
		<td>{{ risk_register.sid }}</td>
		<td>{{ risk_register.risk_category }}</td>
		<td>{{ risk_register.risk_event }}</td>
		<td>{{ risk_register.probability }}</td>
		<td>{{ risk_register.impact }}</td>

		<td>{{ risk_register.pxi }}</td>
		<td>{{ risk_register.cost_value }}</td>
		<td>{{ risk_register.contigency_value }}</td>
		<td>{{ risk_register.risk_response }}</td>
		<td>{{ risk_register.project_role.name }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			risk_register: {
				required: true, 
				type: Object, 
			}
		}, 
	}
</script>