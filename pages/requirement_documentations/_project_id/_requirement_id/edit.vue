<template>
	<form @submit.prevent="edit">

		<div class="columns is-desktop">
			<div class="column">
				<label class="label">ID</label>
				<div class="control">
					<input type="text" class="input" required v-model="form.sid">
				</div>
			</div>
			
			<div class="column">
				<label class="label">Stakeholder</label>
				<div class="control">
					<!--<input type="text" class="input" v-model="form.stakeholder">-->
					<div class="select">
						<select v-model="form.stakeholder">>
							<option 
								v-for="stakeholder in stakeholders"
								:value="stakeholder.id"
								:key="stakeholder.id"
							>
								{{ stakeholder.name }}
								{{ stakeholder.name===req_doc.user.name ? '(Actual)' : '' }} 
							</option>
						</select>
					</div>
				</div>
			</div>

			<div class="column">
				<label class="label">Role</label>
				<div class="control">
					<div class="select">
						<select v-model="form.role">
							<option
								v-for="role in project_roles"
								:value="role.id"
								:key="role.id"
							>
								{{ role.name }}
							</option>
						</select>
					</div>
				</div>
			</div>

			<div class="column">
				<label class="label">Category</label>
				<div class="control">
					<!--<input type="text" class="input" v-model="form.category">-->
					<div class="select">
						<select v-model="form.category">
							<option
								v-for="category in categories" 
								:value="category.id"
								:key="category.id"
							>
								{{ category.name }}
								{{ category.id===req_doc.category.id ? '(Actual)' : ''}}
							</option>
						</select>
					</div>
				</div>
			</div>
		</div>

		<div class="columns is-desktop">
			<div class="column">
				<label class="label">Priority</label>
				<div class="control">
					<div class="select">
						<select v-model="form.priority">
							<option
								v-for="priority in priorities" 
								:value="priority.id"
								:key="priority.id"
							>
								{{ priority.name }}
								{{ priority.id===req_doc.priority.id ? '(Actual)' : ''}}
							</option>
						</select>
					</div>
				</div>
			</div>
			
			<div class="column">
				<fieldset>
					<label class="label">Test or Verification</label> 
					<label v-for="verification in verifications">
						<input type="checkbox" class="checkbox"
							:value="verification.id"
							:key="verification.id"
							v-model="chosen_verifications_id"
							
						>
						{{ verification.name }}
					</label>
				</fieldset>
			</div>

			<div class="column">
				<label class="label">Phase or Release</label>
				<div class="control">
					<div class="select">
						<select v-model="form.phase">
							<option
								v-for="phase in phases" 
								:value="phase.id"
								:key="phase.id"
							>
								{{ phase.name }}
								{{ phase.id===req_doc.phase.id ? '(Actual)' : ''}}
							</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		
		<div class="field">
			<label class="label">Requirements</label>
			<div class="control">
				<client-only>
					<tinymce-editor v-model="form.requirements">
					</tinymce-editor>
				</client-only>
			</div>
		</div>

		<div class="field">
			<label class="label">Acceptance Criteria</label>
			<div class="control">
				<client-only>
					<tinymce-editor v-model="form.acceptance_criteria">
					</tinymce-editor>
				</client-only>
			</div>
		</div>

		<div class="field">
			<div class="buttons">
				<button class="button is-medium is-success">Update</button>
				
				<button class="button is-medium is-danger" @click.prevent="remove">Delete</button>

				<nuxt-link 
					class="button is-medium is-light"
					:to="link_to_index"
				>Cancel</nuxt-link>
			</div>
		</div>
	</form>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		data() {
			return {
				form: {
					sid: '', 
					stakeholder: '', 
					role: '', 
					category: '', 
					priority: '', 
					verifications: '', 
					phase: '', 
					requirements: '', 
					acceptance_criteria: '', 
				}, 
				chosen_verifications_id: [], 
			}
		}, 

		computed: {
			...mapGetters({
				req_doc: 'requirement_documentation/requirement_documentation', 
				stakeholders: 'stakeholder/stakeholders', 
				verifications: 'requirement_verification/requirement_verifications', 
				categories: 'requirement_category/requirement_categories', 
				priorities: 'requirement_priority/requirement_priorities', 
				phases: 'requirement_phase/requirement_phases', 
			}), 

			link_to_index() {
				return {
					name: 'requirement_documentations-project_id', 
					params: {
						project_id: this.req_doc.project.id
					}
				}
			}, 

			project_roles() {
				let stakeholder = this.stakeholder(this.form.stakeholder)

				if(stakeholder == null) {
					return ''
				}

				return stakeholder.project_roles
			}, 

		}, 

		created() {
			this.form.sid = this.req_doc.sid
			this.form.stakeholder = this.req_doc.user.id
			this.form.role = this.req_doc.project_role.id
			this.form.category = this.req_doc.category.id
			this.form.priority = this.req_doc.priority.id
			this.form.verifications = this.req_doc.verifications
			this.form.phase = this.req_doc.phase.id
			this.form.requirements = this.req_doc.requirements
			this.form.acceptance_criteria = this.req_doc.acceptance_criteria

			for(let i=0; i<this.req_doc.verifications.length; i++) {
				this.chosen_verifications_id.push(
					this.req_doc.verifications[i].id
				)
			}
		}, 

		watch: {
			chosen_verifications_id() {
				this.form.verifications = []
				for(let i=0; i<this.chosen_verifications_id.length; i++) {
					let verification = this.verifications.find(ver => ver.id === this.chosen_verifications_id[i])
					this.form.verifications.push(verification)
				}
			}
		}, 

		methods: {
			...mapActions({
				update: 'requirement_documentation/update', 
				destroy: 'requirement_documentation/destroy', 
			}), 

			isVerificationInDb(verification_id) {
				let ver = this.req_doc.verifications.find(ver => ver.id == verification_id)

				if(typeof ver === 'undefined') {
					return false
				}

				return true
			}, 

			linkToIndex() {
				this.$router.replace({
					name: 'requirement_documentations-project_id', 
					params: {
						project_id: this.req_doc.project.id
					}
				})
			}, 

			edit() {
				this.update({
					id: this.req_doc.id, 
					project_id: this.req_doc.project.id, 
					user_id: this.form.stakeholder, 
					project_role_id: this.form.role, 
					sid: this.form.sid, 
					requirements: this.form.requirements, 
					requirement_category_id: this.form.category, 
					requirement_priority_id: this.form.priority, 
					requirement_phase_id: this.form.phase, 
					acceptance_criteria: this.form.acceptance_criteria, 
					verifications: this.chosen_verifications_id
				})

				this.linkToIndex()
			}, 

			remove() {
				this.destroy({
					project_id: this.req_doc.project.id, 
					requirement_id: this.req_doc.id,
				})

				this.linkToIndex()
			}, 

			stakeholder(stakeholder_id) {
				let stakeholder = this.stakeholders.find(stakeholder => stakeholder.id === stakeholder_id)

				if(typeof stakeholder === 'undefined') {
					return null
				}

				return stakeholder
			}, 

		}, 

		async asyncData({store, params}) {
			if(store.getters['requirement_documentation/requirement_documentation'] == null) {
				await store.dispatch('requirement_documentation/getRequirementDocumentation', {
					projectId: params.project_id, 
					requirementId: params.requirement_id
				})
			}

			if(store.getters['stakeholder/stakeholders'] == null) {
				await store.dispatch('stakeholder/getStakeholders', params.project_id)
			}

			if(store.getters['requirement_verification/requirement_verifications'] == null) {
				await store.dispatch('requirement_verification/getRequirementVerifications', params.project_id)
			}

			if(store.getters['requirement_category/requirement_categories'] == null) {
				await store.dispatch('requirement_category/getRequirementCategories', params.project_id)
			}

			if(store.getters['requirement_priority/requirement_priorities'] == null) {
				await store.dispatch('requirement_priority/getRequirementPriorities', params.project_id)
			}

			if(store.getters['requirement_phase/requirement_phases'] == null) {
				await store.dispatch('requirement_phase/getRequirementPhases', params.project_id)
			}
		}
	}
</script>