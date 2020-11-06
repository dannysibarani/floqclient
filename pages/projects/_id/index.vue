<template>
	<div>
	<h1 class="title">Project</h1>
	<p class="subtitle">{{project.name}}</p>
	<div class="columns is-multiline">

		<div class="column is-12-tablet is-6-desktop is-4-widescreen">
			<article class="message is-link">
				<div class="message-body">
					<nuxt-link 
						class="title is-4"
						:to="{name : 'project_charters-project_id', params: {project_id: project.id}}"
					>
						Project Charter
					</nuxt-link>
					<p>{{ resource('PROJECT_CHARTER').description }}</p>
				</div>
			</article>
		</div>

		<div class="column is-12-tablet is-6-desktop is-4-widescreen">
			<article class="message is-link">
				<div class="message-body">
					<nuxt-link 
						class="title is-4"
						:to="{name : 'stakeholder_registers-project_id', params: {project_id: project.id}}"
					>
						Stakeholder Register
					</nuxt-link>
					<p>{{ resource('STAKEHOLDER_REGISTER').description }}</p>
				</div>
			</article>
		</div>

		<div class="column is-12-tablet is-6-desktop is-4-widescreen">
			<article class="message is-link">
				<div class="message-body">
					<nuxt-link 
						class="title is-4"
						:to="{name : 'stakeholder_analyses-project_id', params: {project_id: project.id}}"
					>
						Stakeholder Analysis
					</nuxt-link>
					<p>{{ resource('STAKEHOLDER_ANALYSIS').description }}</p>
				</div>
			</article>
		</div>


	</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				project: 'project/project', 
				resources: 'resource/resources'
			}), 
		}, 

		methods: {
			...mapActions({
				setSelectedProjectId: 'navigation/setSelectedProjectId'
			}), 

			resource(resourceName) {
				let res = this.resources.find(res => res.name === resourceName)
				if(typeof res === 'undefined') {
					return ''
				}
				return res
			}
		}, 

		created() {
			this.setSelectedProjectId(this.project.id)
		}, 

		async asyncData({store, params}) {
			await store.dispatch('project/getProject', params.id)
			await store.dispatch('resource/getResources')
		}

	}
</script>