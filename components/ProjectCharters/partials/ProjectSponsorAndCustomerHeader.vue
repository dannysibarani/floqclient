<template>
	<tr>
		<th :colspan="colspans[0]">Project Sponsor:</th>
		<td :colspan="colspans[1]">{{ project_sponsor_name }}</td>
		<th :colspan="colspans[2]">Project Customer:</th>
		<td :colspan="colspans[3]">{{ project_customer_name }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			colspans: {
				required: true, 
				type: Array, 
			}, 

			project_sponsor_name: {
				required: true, 
				type: String, 
			}, 

			project_customer_name: {
				required: true,
				type: String, 
			}
		}
	}
</script>