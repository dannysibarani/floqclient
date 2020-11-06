<template>
	<tr>
		<th :colspan="colspans[0]">Project Title:</th>
		<td :colspan="colspans[1]">{{ content }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			content: {
				required: true, 
				type: String, 
			}, 

			colspans: {
				required: true, 
				type: Array, 
			}, 
		}
	}
</script>