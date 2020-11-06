<template>
	<tr>
		<td :colspan="colspan">
			<p class="has-text-weight-bold">{{ title }}</p>
			<p>{{ content }}</p>
		</td>
	</tr>
</template>

<script>
	export default {
		props: {
			colspan: {
				required: true, 
				type: Number, 
			}, 

			title: {
				required: true, 
				type: String, 
			}, 

			content: {
				required: true, 
				type: String
			}, 
		}
	}
</script>