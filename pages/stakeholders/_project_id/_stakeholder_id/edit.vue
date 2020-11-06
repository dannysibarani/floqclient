<template>
		
		<form @submit.prevent="edit">
			<div class="field">
				<div class="field">
					<label class="label">Project Name</label>
					<div class="control">
						<input type="text" class="input is-large" disabled v-model="form.project_name">
					</div>
				</div>	
			</div>

			<div class="field">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input type="text" class="input is-large" disabled v-model="form.name">
					</div>
				</div>
			</div>

			<div class="field">
				<label class="label">Email</label>
				<div class="control has-icons-left">
					<span class="icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
					<input type="email" class="input" disabled v-model="form.email">
				</div>
			</div>

			<div class="field">
				<label class="label">Project Role</label>
				<div class="control">
					<div class="select">
						<select v-model="form.project_role_id">
							<option 
								v-for="project_role in project_roles" 
								:value="project_role.id" 
								:key="project_role.id"
							>
								{{ project_role.name }} 
								{{ project_role.id === actual_project_role_id ? '(Actual)' : '' }} 
							</option>
						</select>
					</div>
				</div>
			</div>

			<div class="field is-grouped">
				<div class="control">
					<button class="button is-medium is-success">Save changes</button>
				</div>
				<div class="control">
					<button
						class="button is-medium is-light"
						@click.prevent="link_to_page_before"
					>Cancel</button>
				</div>
			</div>

		</form>

</template>

<script>
	import {mapActions, mapGetters} from 'vuex'
	export default {
		data() {
			return {
				actual_project_role_id: '', 

				form: {
					project_name: '', 
					name: '', 
					email: '', 
					project_role_id: '', 
				}, 
			}
		}, 

		computed: {
			...mapGetters({
				project: 'project/project', 
				stakeholder: 'stakeholder/stakeholder', 
				project_roles: 'project_role/project_roles', 
			}), 

			actualProjectRoleId() {
				return this.stakeholder.project_roles.length > 0 ? this.stakeholder.project_roles[0].id : ''
			}, 
		}, 

		created() {
			this.actual_project_role_id = this.actualProjectRoleId

			this.form.project_name = this.project.name
			this.form.name = this.stakeholder.name
			this.form.email = this.stakeholder.email
			this.form.project_role_id = this.actual_project_role_id
		}, 

		methods: {
			...mapActions({
				update: 'stakeholder/update'
			}), 

			link_to_page_before() {
				//this.$router.go(-1)
				this.$router.replace( {
					name: 'stakeholders', 
					params: { project_id: this.project.id }
				}); 
			}, 

			edit() {
				this.update({
					project_id: this.project.id, 
					stakeholder_id: this.stakeholder.id, 
					project_role_id: this.form.project_role_id
				})

				this.link_to_page_before()
			}, 
		}, 

		async asyncData({store, params}) {
			await store.dispatch('project/getProject', params.project_id)
			await store.dispatch('stakeholder/getStakeholder', {
				project_id: params.project_id, 
				stakeholder_id: params.stakeholder_id
			})
			await store.dispatch('project_role/getProjectRoles', params.project_id)
		}, 

	}
</script>
