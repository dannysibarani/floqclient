<template>
	<tr>
		<td colspan="4">
			<p class="has-text-weight-bold">{{ title }}</p>
			<p>{{ content }}</p>
		</td>
	</tr>
</template>

<script>
	export default {
		props: {
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