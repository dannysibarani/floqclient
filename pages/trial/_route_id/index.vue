<template>
	<div>
		<h1>Query (project): {{ query }}</h1>
		<h1>Route : {{ route }}</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				query: this.$route.query.project, 
				route: this.$route.params.route_id, 
			}
		}
	}
</script>