<template>
	<tr>
		<td>{{ com_man_plan.user.name }}</td>
		<td>{{ com_man_plan.information }}</td>
		<td>{{ com_man_plan.method }}</td>
		<td>{{ com_man_plan.timing_or_frequency }}</td>
		<td>{{ com_man_plan.sender_or_initiator }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			com_man_plan: {
				required: true, 
				type: Object, 
			}
		}, 
	}
</script>