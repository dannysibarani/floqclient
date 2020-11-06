<template>
	<thead>
		<tr>
			<th :colspan="colspan" class="has-text-centered">
				{{ title }}
			</th>
		</tr>
	</thead>
</template>

<script>
	export default {
		props: {
			title: {
				required: true, 
				type: String, 
			}, 

			colspan: {
				required: true, 
				type: Number, 
			}
		}
	}
</script>