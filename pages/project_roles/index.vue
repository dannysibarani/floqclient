<template>
	<div>
		<h1 class="title">Project Roles</h1>

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
				<p class="level-item">
					<nuxt-link 
						class="button is-success"
						:disabled="!selectedProjectId"
						:to="{ name: 'project_roles-project_id-create', params: {
							project_id: selectedProjectId
						}}"
					>
						Add Project Role
					</nuxt-link>
				</p>
			</div>
		</nav>

		<ProjectRoleOverview 
			:project_roles="project_roles"
			:project_name="project_name"
		/>

	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import ProjectRoleOverview from '~/components/ProjectRoles/ProjectRoleOverview'
	export default {
		components: {
			ProjectRoleOverview, 
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
				project_roles: 'project_role/project_roles', 
				selected_project_id: 'navigation/selected_project_id'
			}), 

			project_name() {
				let project = this.projects.find(project => project.id === this.selectedProjectId)
				if(typeof project === 'undefined') {
					return ''
				}

				return project.name 
			}
		}, 

		methods: {
			...mapActions({
				setSelectedProjectId: 'navigation/setSelectedProjectId', 
				getProjectRoles: 'project_role/getProjectRoles'
			})
		}, 

		watch: {
			'selectedProjectId'(selectedProjectId) {
				this.getProjectRoles(selectedProjectId)
				this.setSelectedProjectId(selectedProjectId)
			}
		},

		async asyncData({app, store}) {
			if(store.getters['project/projects'].length==0) {
				await store.dispatch('project/getProjects')
			}
		}	
	}
	
</script>