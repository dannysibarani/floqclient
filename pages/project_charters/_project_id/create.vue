<template>
	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless"">
			<Header 
				:colspan="4"
				:title="'PROJECT CHARTER'"
			/>

			<tbody>
				<ProjectTitle
					:colspans="[1, 3]"
					:content="project ? project.project_title : ''"
				/>


				<tr>
					<th>Project Sponsor:</th>
					<td>
						<a class="button is-primary is-rounded" v-if="!project_sponsor">
							<span class="icon">
								<font-awesome-icon :icon="['fas', 'plus']" />
							</span>
							<span>Add</span>
						</a>
						<span v-else>{{ project_sponsor.name }}</span>
					</td>
					<th>Project Customer:</th>
					<td>
						<a class="button is-primary is-rounded" v-if="!project_customer">
							<span class="icon">
								<font-awesome-icon :icon="['fas', 'plus']" />
							</span>
							<span>Add</span>
						</a>
						<span v-else>{{ project_customer.name }}</span>
					</td>
				</tr>


				<tr>
					<th>Project Manager:</th>
					<td>
						<a class="button is-primary is-rounded" v-if="!project_manager">
							<span class="icon">
								<font-awesome-icon :icon="['fas', 'plus']" />
							</span>
							<span>Add</span>
						</a>
						<span v-else>{{ project_manager.name }}</span>
					</td>
					<th>Date Prepared:</th>
					<td>
						<span>{{ project ? project.date_prepared : ''}}</span>
					</td>
				</tr>


				<Divider :colspan="4" />

				
				<MessageModal
					:colspan="4"
					:title="'Project Purpose:'"
					v-model="project_purpose"
				/>

				<MessageModal
					:colspan="4"
					:title="'High Level Description:'"
					v-model="high_level_description"
				/>

				<MessageModal
					:colspan="4"
					:title="'Project Boundaries:'"
					v-model="project_boundaries"
				/>

				<MessageModal
					:colspan="4"
					:title="'Key Deliverables:'"
					v-model="key_deliverables"
				/>

				<MessageModal
					:colspan="4"
					:title="'High Level Requirements:'"
					v-model="high_level_requirements"
				/>

				<MessageModal
					:colspan="4"
					:title="'Overall Project Risk:'"
					v-model="overall_project_risk"
				/>


				<Divider :colspan="4" />


				<PoscHeader />
				<tr><th colspan=4>Scope:</th></tr>
				<PoscMessageModal
					:title="{project_objective: 'Project Objective', success_criteria: 'Success Criteria'}"
					v-model="posc_scope"
				/>

				<tr><th colspan=4>Time:</th></tr>
				<PoscMessageModal
					:title="{project_objective: 'Project Objective', success_criteria: 'Success Criteria'}"
					v-model="posc_time"
				/>

				<tr><th colspan=4>Cost:</th></tr>
				<PoscMessageModal
					:title="{project_objective: 'Project Objective', success_criteria: 'Success Criteria'}"
					v-model="posc_cost"
				/>

				<tr><th colspan=4>Other:</th></tr>
				<PoscMessageModal
					:title="{project_objective: 'Project Objective', success_criteria: 'Success Criteria'}"
					v-model="posc_other"
				/>


				<Divider :colspan="4" />


				<tr>
					<th colspan="2">Summary Milestones</th>
					<th colspan="2">Due Date</th>
				</tr>
				<tr>
					<td colspan="4">Add</td>
				</tr>


			</tbody>

		</table>

	</div>
</template>

<script>
	import Header from '~/components/Reports/Header'
	import ProjectTitle from '~/components/Reports/ProjectTitle'
	import Divider from '~/components/Reports/Divider'
	import MessageModal from '~/components/Reports/MessageModal'

	import PoscHeader from '~/components/ProjectCharters/partials/PoscHeader'
	import PoscMessageModal from '~/components/ProjectCharters/partials/PoscMessageModal'

	import {mapGetters} from 'vuex'

	export default {
		components: {
			Header, 
			ProjectTitle, 
			Divider, 
			MessageModal, 

			PoscHeader, 
			PoscMessageModal, 
		}, 

		data() {
			return {
				project_purpose: null, 
				high_level_description: null, 
				project_boundaries: null, 
				key_deliverables: null, 
				high_level_requirements: null, 
				overall_project_risk: null, 
				posc_scope: {
					project_objective: null, 
					success_criteria: null
				}, 
				posc_time: {
					project_objective: null, 
					success_criteria: null
				}, 
				posc_cost: {
					project_objective: null, 
					success_criteria: null
				},
				posc_other: {
					project_objective: null, 
					success_criteria: null
				},
			}
		}, 

		computed: {
			...mapGetters({
				project : 'project/project', 
				stakeholders : 'stakeholder/stakeholders', 
			}), 

			project_manager: {
				get() {
					return this.stakeholder('Project Manager')
				}
			}, 

			project_sponsor: {
				get() {
					return this.stakeholder('Project Sponsor')
				}
			}, 

			project_customer: {
				get() {
					return this.stakeholder('Project Customer')
				}
			}, 
		}, 

		methods: {
			stakeholder(project_role) {
				let role = null 
				for(let i=0; i<this.stakeholders.length; i++) {
					let _stakeholder = this.stakeholders[i]
					role = _stakeholder.project_roles.find(role => role.name === project_role) 
					if(role) {
						return _stakeholder
					}
				}

				if(!role) {
					return null
				}
			}
		}, 

		async asyncData({store, params}) {
			if(store.getters['stakeholder/stakeholders'] === null) {
				await store.dispatch('stakeholder/getStakeholders', params.project_id)
			}
		}
	}
</script>