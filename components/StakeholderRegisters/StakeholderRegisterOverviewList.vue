<template>
	<tr>
		<td>{{ stakeholder.user.name }}</td>
		<td>{{ stakeholder.project_role.name }}</td>
		<td>
			<template v-for="contact in stakeholder.user.contacts">
				<span class="tag is-success" v-if="contact.phone_status=='ACTIVE'">
					{{ contact.phone_number }}
				</span>
			</template>
		</td>
		<td>{{ stakeholder.requirements }}</td>
		<td>{{ stakeholder.expectation }}</td>
		<td>{{ stakeholder.classification }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			stakeholder: {
				required: true, 
				type: Object, 
			}
		}
	}
</script>
