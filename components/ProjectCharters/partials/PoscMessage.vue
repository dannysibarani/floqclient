<template>
	<tr>
		<td colspan="2">{{ project_objective }}</td>
		<td colspan="2">{{ success_criteria }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			project_objective: {
				required: true, 
				type: String, 
			}, 

			success_criteria: {
				required: true, 
				type: String, 
			}
		}
	}
</script>