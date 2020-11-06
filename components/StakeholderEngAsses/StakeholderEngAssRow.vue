<template>
	<tr>
		<td>{{ stakeholder_eng_ass.user.name }}</td>
		<td>{{ stakeholder_eng_ass.unaware }}</td>
		<td>{{ stakeholder_eng_ass.resistant }}</td>
		<td>{{ stakeholder_eng_ass.neutral }}</td>
		<td>{{ stakeholder_eng_ass.supportive }}</td>
		<td>{{ stakeholder_eng_ass.leading }}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			stakeholder_eng_ass: {
				required: true, 
				type: Object, 
			}
		}, 
	}
</script>