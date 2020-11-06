<template>
	<tr>
		<td>{{ stakeholder.user.name }}</td>
		<td>{{ stakeholder.project_role.name }}</td>
		<td>{{ stakeholder.power }}</td>
		<td>{{ stakeholder.interest }}</td>
		<td>{{ stakeholder.influence }}</td>
		<td>{{ stakeholder.attitude }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			stakeholder: {
				required: true, 
				type: Object, 
			}
		}
	}
</script>
