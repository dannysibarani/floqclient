<template>
	<tr>
		<td>{{ quality_metric.sid }}</td>
		<td>{{ quality_metric.items }}</td>
		<td colspan="2">{{ quality_metric.metric }}</td>
		<td>{{ quality_metric.measurement_method }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			quality_metric: {
				required: true, 
				type: Object, 
			}
		}, 
	}
</script>