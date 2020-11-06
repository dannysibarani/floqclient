<template>
	<tr>
		<th :colspan="colspan"></th>
	</tr>
</template>

<script>
	export default {
		props: {
			colspan: {
				required: true, 
				type: Number, 
			}
		}
	}
</script>