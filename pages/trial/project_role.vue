<template>
	<div>
		{{ project_role }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				project_role: ''
			}
		}, 

		async asyncData({app}) {
			let response = await app.$axios.$get(`project-roles/1`)

			return {
				project_role : response .data
			}
		}
	}
</script>