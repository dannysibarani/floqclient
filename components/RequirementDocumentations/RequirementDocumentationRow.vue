<template>
	<tr @dblclick.prevent="onDoubleClickRow">
		<td>{{ requirement_documentation.sid }}</td>
		<td>
			<span v-html="requirement_documentation.requirements"></span>
		</td>
		<td>{{ requirement_documentation.user.name }}</td>
		<td>{{ requirement_documentation.category.name }}</td>
		<td>{{ requirement_documentation.priority.name }}</td>
		<td>
			<span v-html="requirement_documentation.acceptance_criteria"></span>
		</td>
		<td>{{ verifications }}</td>
		<td>{{ requirement_documentation.phase.name }}</td>
	</tr>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		props: {
			requirement_documentation: {
				required: true, 
				type: Object, 
			}
		}, 

		computed: {
			verifications: {
				get() {
					let count = this.requirement_documentation.verifications.length
					let result = ''
					for(let i=0; i<count; i++) {
						if(i<count-1) {
							result += this.requirement_documentation.verifications[i].name + ' & '
						}
						else result += this.requirement_documentation.verifications[i].name; 
					}
					return result 
				}
			}
		}, 

		methods: {
			...mapActions({
				setRequirementDocumentation : 'requirement_documentation/setRequirementDocumentation'
			}), 

			onDoubleClickRow() {
				this.setRequirementDocumentation(this.requirement_documentation)
				this.$router.push({
					name: 'requirement_documentations-project_id-requirement_id-edit', 
					params: {
						project_id: this.requirement_documentation.project.id, 
						requirement_id: this.requirement_documentation.id
					}
				})
			}
		}
	}
</script>