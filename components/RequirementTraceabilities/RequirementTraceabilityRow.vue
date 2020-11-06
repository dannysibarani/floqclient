<template>
	<tr>
		<td>{{ requirement_traceability.sid }}</td>
		<td>{{ requirement_traceability.requirements }}</td>
		<td>{{ requirement_traceability.project_role.name }}</td>
		<td>{{ requirement_traceability.priority.name }}</td>
		<td>{{ requirement_traceability.category.name }}</td>

		<td>{{ requirement_traceability.business_objective }}</td>
		<td>{{ requirement_traceability.deliverable }}</td>
		<td>{{ verifications }}</td>
		<td>{{ requirement_traceability.phase.name }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			requirement_traceability: {
				required: true, 
				type: Object, 
			}
		}, 

		computed: {
			verifications: {
				get() {
					let count = this.requirement_traceability.verifications.length
					let result = ''
					for(let i=0; i<count; i++) {
						if(i<count-1) {
							result += this.requirement_traceability.verifications[i].name + ' & '
						}
						else result += this.requirement_traceability.verifications[i].name; 
					}
					return result 
				}
			}
		}
	}
</script>