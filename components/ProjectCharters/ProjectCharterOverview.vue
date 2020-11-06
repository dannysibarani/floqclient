<template>

	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless">
			<Header 
				:colspan="4"
				:title="'PROJECT CHARTER'"
			/>
			<tbody>
				<ProjectTitle
					:colspans="[1, 3]"
					:content="get_project.project_title"
				/>
				<ProjectSponsorAndCustomerHeader
					:colspans="[1, 1, 1, 1]"
					:project_sponsor_name="get_project_sponsor.name"
					:project_customer_name="get_project_customer.name"
				/>
				<ProjectManagerAndDateHeader
					:colspans="[1, 1, 1, 1]"
					:project_manager_name="get_project_manager.name"
					:date_prepared="get_project.date_prepared"
				/>

				<Divider :colspan="4" />

				<Message :colspan="4"
					:title="'Project Purpose:'"
					:content="get_project_charter.project_purpose"
				/>

				<Message :colspan="4"
					:title="'High Level Description:'"
					:content="get_project_charter.high_level_description"
				/>

				<Message :colspan="4"
					:title="'Project Boundaries:'"
					:content="get_project_charter.project_boundaries"
				/>

				<Message :colspan="4"
					:title="'Key Deliverables:'"
					:content="get_project_charter.key_deliverables"
				/>

				<Message :colspan="4"
					:title="'High Level Requirements:'"
					:content="get_project_charter.high_level_requirements"
				/>

				<Message :colspan="4"
					:title="'Overall Project Risk:'"
					:content="get_project_charter.overall_project_risk"
				/>


				<Divider :colspan="4" />

				<PoscHeader />
				<tr><th colspan=4>Scope:</th></tr>
				<PoscMessage 
					:project_objective="get_posc.po_scope"
					:success_criteria="get_posc.sc_scope"
				/>
				<tr><th colspan=4>Time:</th></tr>
				<PoscMessage 
					:project_objective="get_posc.po_time"
					:success_criteria="get_posc.sc_time"
				/>
				<tr><th colspan=4>Cost:</th></tr>
				<PoscMessage 
					:project_objective="get_posc.po_cost"
					:success_criteria="get_posc.sc_cost"
				/>
				<tr><th colspan=4>Other:</th></tr>
				<PoscMessage 
					:project_objective="get_posc.po_other"
					:success_criteria="get_posc.sc_other"
				/>


				<Divider :colspan="4" />


				<tr>
					<th colspan="2">Summary Milestones</th>
					<th colspan="2">Due Date</th>
				</tr>
				<tr v-for="schedule in get_project_charter.schedules">
					<td colspan="2">{{schedule.order}}. {{schedule.milestone}}</td>
					<td colspan="2">{{ schedule.due_date }}</td>
				</tr>


				<Divider :colspan="4" />

				<Message :colspan="4"
					:title="'Pre-approved Financial Resources:'"
					:content="get_project_charter.preapproved_financial_resources"
				/>

				
				<Divider :colspan="4" />

				<tr>
					<th colspan="2">Stakeholder(s)</th>
					<th colspan="2">Role</th>
				</tr>
				<!--NEED TO CREATE COMPONENT-->
				<template v-for="stakeholder in get_stakeholders">
					<tr v-if="stakeholder.project_roles.length>0">
						<td colspan="2">{{ stakeholder.name  }}</td>
						<td colspan="2">
							{{ stakeholder.project_roles[0].name }}
						</td>
					</tr>
				</template>


				<Divider :colspan="4" />


				<Message :colspan="4"
					:title="'Project Exit Criteria:'"
					:content="get_project_charter.project_exit_criteria"
				/>


				<Divider :colspan="4" />

				<tr>
					<td colspan="4">
						<p class="has-text-weight-bold">Project Manager Authority Level</p>
					</td>
				</tr>
				<Message :colspan="4"
					:title="'Staffing Decision:'"
					:content="get_authority.staffing_decision"
				/>
				<Message :colspan="4"
					:title="'Budget Management and Variance:'"
					:content="get_authority.budget_management_and_variance"
				/>

				<Message :colspan="4"
					:title="'Technical Decisions:'"
					:content="get_authority.technical_decisions"
				/>

				<Message :colspan="4"
					:title="'Conflict Resolution:'"
					:content="get_authority.conflict_resolution"
				/>

				<Message :colspan="4"
					:title="'Sponsor Authority:'"
					:content="get_authority.sponsor_authority"






			<tr>
				<th colspan="4"></th>
			</tr>
			<tr>
				<td colspan="4">
					<p class="has-text-weight-bold">Approvals:</p>
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<p>
						<template v-if="get_project_manager.approved ">
							<span class="tag is-success is-large">
								Approved
							</span>
						</template>
						<template v-else>
							<span class="tag is-warning is-large">
								No Approval
							</span>
						</template>
					</p>
					<p class="has-text-weight-bold">
						(Project Manager Signature)
					</p>
				</td>
				<td colspan="2">
					<p>
						<template v-if="get_project_sponsor.approved ">
							<span class="tag is-success is-large">
								Approved
							</span>
						</template>
						<template v-else>
							<span class="tag is-warning is-large">
								No Approval
							</span>
						</template>
					</p>
					<p class="has-text-weight-bold">
						(Sponsor or Originator Signature)
					</p>
				</td>
			</tr>


			<tr>
				<td colspan="2">
					<p>
						<span class="tag is-info is-large">
							{{ get_project_manager.name }}
						</span>
					</p>
					<p class="has-text-weight-bold">
						(Project Manager Name)
					</p>
				</td>
				<td colspan="2">
					<p>
						<span class="tag is-info is-large">
							{{ get_project_sponsor.name }}
						</span>
					</p>
					<p class="has-text-weight-bold">
						(Sponsor or Originator Name)
					</p>
				</td>
			</tr>

			<tr>
				<td colspan="2">
					<p>
						{{ get_project_manager.date }}
					</p>
					<p class="has-text-weight-bold">
						(Date)
					</p>
				</td>
				<td colspan="2">
					<p>
						{{ get_project_sponsor.date }}
					</p>
					<p class="has-text-weight-bold">
						(Date)
					</p>
				</td>
			</tr>

			
			</tbody>
		</table>
	</div>
</template>

<script>
	import Header from '~/components/Reports/Header'
	import ProjectTitle from '~/components/Reports/ProjectTitle'
	import ProjectManagerAndDateHeader from '~/components/Reports/ProjectManagerAndDateHeader'
	import Message from '~/components/Reports/Message'
	import Divider from '~/components/Reports/Divider'

	import ProjectSponsorAndCustomerHeader from '~/components/ProjectCharters/partials/ProjectSponsorAndCustomerHeader'
	import PoscHeader from '~/components/ProjectCharters/partials/PoscHeader'
	import PoscMessage from '~/components/ProjectCharters/partials/PoscMessage'

	export default {
		components: {
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Message, 
			Divider, 

			ProjectSponsorAndCustomerHeader, 
			PoscHeader, 
			PoscMessage, 

		}, 

		props: {
			project_charter: {
				required: true, 
				type: Object
			}
		}, 

		computed: {
			get_project_charter: {
				get() {
					let temp = this.project_charter
					return {
						project_purpose : temp ? temp.project_purpose : '', 
						high_level_description : temp ? temp.high_level_description : '', 
						project_boundaries : temp ? temp.project_boundaries : '', 
						key_deliverables : temp ? temp.key_deliverables : '', 
						high_level_requirements : temp ? temp.high_level_requirements : '', 
						overall_project_risk : temp ? temp.overall_project_risk : '', 

						schedules: temp ? temp.schedules : null, 

						preapproved_financial_resources : temp ? temp.preapproved_financial_resources : '', 
						project_exit_criteria : temp ? temp.project_exit_criteria : ''
					}
				}
			}, 

			get_posc: {
				get() {
					let temp = null 
					if(this.project_charter === null || 
						this.project_charter.posc === null) temp = null
					else temp = this.project_charter.posc 

					return {
						po_scope : temp ? temp.po_scope : '', 
						po_time : temp ? temp.po_time : '', 
						po_cost : temp ? temp.po_cost : '', 
						po_other : temp ? temp.po_other : '', 
						sc_scope : temp ? temp.sc_scope : '', 
						sc_time : temp ? temp.sc_time : '', 
						sc_cost : temp ? temp.sc_cost : '', 
						sc_other : temp ? temp.sc_other : ''
					}
				}
			}, 

			get_project: {
				get() {
					let temp = null
					if(this.project_charter === null || 
						this.project_charter.project === null) temp = null
					else temp = this.project_charter.project

					return {
						//return new Date(this.project_charter.project.date_prepared)
						date_prepared : temp ? temp.date_prepared : '', 
						project_title : temp ? temp.project_title : ''
					}
				}
			}, 

			get_approvals: {
				get() {
					if(this.project_charter === null || 
						this.project_charter.approvals === null || 
						this.project_charter.approvals.length === 0) {
						return null
					}

					return this.project_charter.approvals
				}
			}, 

			get_project_manager: {
				get() {
					return this.getApprover('Project Manager')
				}
			}, 

			get_project_sponsor: {
				get() {
					return this.getApprover('Project Sponsor')
				}
			}, 

			get_project_customer: {
				get() {
					return this.getApprover('Project Customer')
				}
			}, 

			get_stakeholders: {
				get() {
					if(this.project_charter === null || 
						this.project_charter.stakeholders === null) return null
					else return this.project_charter.stakeholders 
				}
			}, 

			get_authority: {
				get() {
					let temp = null 
					if(this.project_charter === null || 
						this.project_charter.authority === null) temp = null
					else temp = this.project_charter.authority 

					return {
						staffing_decision : temp ? temp.staffing_decision : '', 
						budget_management_and_variance : temp ? temp.budget_management_and_variance : '', 
						technical_decisions : temp ? temp.technical_decisions : '', 
						conflict_resolution : temp ? temp.conflict_resolution : '', 
						sponsor_authority : temp ? temp.sponsor_authority : ''
					}						
				}
			}, 

		}, 

		methods: {
			getApprover(project_role_name) {
				let stkhldr = this.get_approvals.find(app => app.project_role.name === project_role_name)

				if(typeof stkhldr === 'undefined') {
					stkhldr = null
				}

				return {
					name : stkhldr ? stkhldr.name : '', 
					signature : stkhldr ? stkhldr.signature : '', 
					approved : stkhldr ? stkhldr.approved : '', 
					date : stkhldr ? stkhldr.date : ''
				}
			}
		}

	}
</script>