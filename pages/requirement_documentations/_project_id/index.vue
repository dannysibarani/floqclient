<template>

	<div class="columns is-multiline">
		<div class="container">
			<div class="column is-12">
				<div class="table-container">
					<table class="table is-hoverable is-fullwidth is-bordered is-marginless my-small-text">
						<Header 
							:colspan="8"
							:title="'REQUIREMENTS DOCUMENTATION'"
						/>
						<tbody>
						
							<ProjectTitle
								:colspans="[2, 6]"
								:content="req_docs.project_title"
							/>

							<ProjectManagerAndDateHeader
								:colspans="[2, 2, 2, 2]"
								:project_manager_name="req_docs.project_manager.name"
								:date_prepared="req_docs.date_prepared"
							/>

							<Divider :colspan="8" />

							<tr>
								<th>ID</th>
								<th>Requirements</th>
								<th>Stakeholder</th>
								<th>Category</th>
								<th>Priority</th>
								<th>Acceptance Criteria</th>
								<th>Test or Verification</th>
								<th>Phase or Release</th>
							</tr>

							<RequirementDocumentationRow
								v-for="req_doc in req_docs.requirements"
								:requirement_documentation="req_doc"
								:key="req_doc.id"
							/>
						
						</tbody>
					</table>
				</div>
			</div>
			<div class="column is-12">
				<div class="buttons are-medium">
					<nuxt-link 
						class="button is-success"
						:to="{name: 'requirement_documentations-project_id-create', params: {project_id: selected_project_id}}"
					>
						Add
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex'
	import Header from '~/components/Reports/Header'
	import ProjectTitle from '~/components/Reports/ProjectTitle'
	import ProjectManagerAndDateHeader from '~/components/Reports/ProjectManagerAndDateHeader'
	import Divider from '~/components/Reports/Divider'

	import RequirementDocumentationRow from '~/components/RequirementDocumentations/RequirementDocumentationRow'

	export default {
		components: {
			RequirementDocumentationRow, 
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 
		}, 

		computed: {
			...mapGetters({
				req_docs : 'requirement_documentation/requirement_documentations', 
				selected_project_id: 'navigation/selected_project_id'
			})
		}, 

		async asyncData({store, params}) {
			await store.dispatch('requirement_documentation/getRequirementDocumentations', params.project_id)
		}
	}
</script>