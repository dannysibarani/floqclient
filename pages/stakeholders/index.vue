<template>
	<div>
		<h1 class="title">Stakeholders</h1>

		<nav class="level">
			<div class="level-left">
				<div class="level-item">
					<strong>Project Name</strong>
				</div>
				<div class="level-item">
					<div class="select">
						<select v-model="selectedProjectId">
							<option 
								v-for="(proj, index) in projects"
								:value="proj.id"
								:key="proj.id"
								:selected = "index==0"
							>
								{{ proj.name }}
							</option>
						</select>
					</div>
				</div>
			</div>
			<div class="level-right">
				<p class="level-item" v-if="selectedProjectId">
					<nuxt-link 
						class="button is-success"
						:disabled="!selectedProjectId"
						:to="{ name: 'stakeholders-project_id-create', params: {
							project_id: selectedProjectId
						}}"
					>
						Add Stakeholder
					</nuxt-link>
				</p>
			</div>
		</nav>

		<div class="columns is-multiline">
			<template v-if="selectedProjectId">
				<template v-if="stakeholders">
					<StakeholderCard 
						v-for="stakeholder in stakeholders"
						:stakeholder="stakeholder"
						:project_id="selectedProjectId"
						:key="stakeholder.id"
					/>
				</template>

				<article class="message is-info" v-else>
					<div class="message-body">
						<p class="has-text-weight-bold">
							Stakeholder is still empty!
						</p>
					</div>
				</article>
			</template>
				
			<article class="message is-info" v-else>
				<div class="message-body">
					<p class="has-text-weight-bold">
						Please choose a project!
					</p>
				</div>
			</article>

		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import StakeholderCard from '~/components/Stakeholders/StakeholderCard'

	export default {
		components: {
			StakeholderCard, 
		}, 

		data() {
			return {
				selectedProjectId: '',  
			}
		}, 

		created() {
			this.selectedProjectId = this.selected_project_id == null ? 
					(this.projects.length>0 ? this.projects[0].id : '') : 
					this.selected_project_id
		}, 

		computed: {
			...mapGetters({
				projects: 'project/projects', 
				stakeholders: 'stakeholder/stakeholders', 
				selected_project_id: 'navigation/selected_project_id'
			})
		}, 

		watch: {
			'selectedProjectId'(selectedProjectId) {
				this.getStakeholders(selectedProjectId)
				this.setSelectedProjectId(selectedProjectId)
			}
		}, 

		methods: {
			...mapActions({
				getStakeholders: 'stakeholder/getStakeholders', 
				setSelectedProjectId: 'navigation/setSelectedProjectId'
			})
		}, 

		async asyncData({store}) {
			await store.dispatch('project/getProjects')
		}
	}
	
</script>