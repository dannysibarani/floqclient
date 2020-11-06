<template>
	<form @submit.prevent="add">
		<div class="field">
			<label class="label">Project Name</label>
			<input type="text" class="input" disabled v-model="form.project_name">
		</div>

		<div class="field">
			<label class="label">Role</label>
			<div class="control has-icons-left">
				<span class="icon"><font-awesome-icon :icon="['fas', 'project-diagram']" /></span>
				<input type="text" class="input" placeholder="e.g. Project Manager, Project Sponsor, etc." required
					v-model="form.role"
				>
			</div>
		</div>

		<div class="field">
			<label class="label">Description</label>
			<div class="control">
				<input type="text" class="input is-large" v-model="form.description">
			</div>
		</div>

		<div class="buttons are-medium">
				<button class="button is-success">Create Project Role</button>
				<button class="button is-light" 
					@click.prevent="onClickCancel"
				>
					Cancel
				</button>
		</div>
	</form>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data() {
			return {
				project_id : this.$route.params.project_id, 

				form: {
					project_name: '', 
					role: '', 
					description: '', 
				}
			}
		}, 

		computed: {
			...mapGetters({
				project: 'project/project'
			})
		},

		created() {
			this.form.project_name = this.project.name
		}, 

		methods: {
			...mapActions({
				setSelectedProjectId: 'navigation/setSelectedProjectId', 
				store: 'project_role/store'
			}), 

			onClickCancel() {
				this.setSelectedProjectId(this.project.id) 
				this.$router.push({
					name: 'project_roles'
				})
			}, 

			add() {
				this.store({
					project_id: this.project_id, 
					name: this.form.role, 
					description: this.form.description
				})

				this.form = {
					role: '', 
					description: ''
				}

				this.$router.push({
					name: 'project_roles'
				})
			}
		}, 

		async asyncData({store, params}) {
			await store.dispatch('project/getProject', params.project_id)
		}
	}
</script>