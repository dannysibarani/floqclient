<template>
	<ProjectCharterOverview v-if="project_charter"
		:project_charter="project_charter"
	/>
	<section v-else>
		<h1 class="title">You don't have Project Charter</h1>
		<p class="subtitle">
			Project Name: 
			<span class="tag is-rounded is-info is-medium">{{ project.name }}</span>
		</p>
		<div class="buttons are-medium">
			<button class="button is-success" @click.prevent="linkToCreate()">Create New Project Charter</button>
		</div>
	</section>
</template>

<script>
	import {mapGetters} from 'vuex'
	import ProjectCharterOverview from '~/components/ProjectCharters/ProjectCharterOverview'
	export default {
		components: {
			ProjectCharterOverview, 
		}, 

		computed: {
			...mapGetters({
				project_charter : 'project_charter/project_charter', 
				project : 'project/project'
			}),
		}, 

		methods: {
			linkToCreate() {
				this.$router.replace({
					name: 'project_charters-project_id-create', 
					params: {
						project_id: this.project.id
					}
				})
			}
		}, 

		async asyncData({store, params}) {
			await store.dispatch('project_charter/getProjectCharter', params.project_id)
		}
	}
</script>