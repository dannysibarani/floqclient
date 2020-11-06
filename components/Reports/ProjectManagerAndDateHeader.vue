<template>
	<tr>
		<th :colspan="colspans[0]">Project Manager:</th>
		<td :colspan="colspans[1]">{{ project_manager_name }}</td>
		<th :colspan="colspans[2]">Date Prepared:</th>
		<td :colspan="colspans[3]">{{ date_prepared }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			colspans: {
				required: true, 
				type: Array, 
			}, 

			project_manager_name: {
				required: true, 
				type: String, 
			}, 

			date_prepared: {
				required: true,
				type: String, 
			}
		}
	}
</script>