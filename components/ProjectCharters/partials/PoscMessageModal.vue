<template>
	<tr>
		<td colspan="2" @dblclick.prevent="is_active.project_objective = true">

			<a class="button is-primary is-rounded" 
				v-if="!contents.project_objective"
				@click.prevent="is_active.project_objective = true"
			>
				<span class="icon">
					<font-awesome-icon :icon="['fas', 'plus']" />
				</span>
				<span>Add</span>
			</a>
			<div class="content" v-else>
				<span v-html="contents.project_objective"></span>
			</div>
			<Modal 
				:title="title.project_objective"
				:is_active="is_active.project_objective"
				@input="is_active.project_objective = false"
				@cancel="is_active.project_objective = false"
				v-model="contents.project_objective"
			/>

		</td>

		<td colspan="2" @dblclick.prevent="is_active.success_criteria = true">

			<a class="button is-primary is-rounded" 
				v-if="!contents.success_criteria"
				@click.prevent="is_active.success_criteria = true"
			>
				<span class="icon">
					<font-awesome-icon :icon="['fas', 'plus']" />
				</span>
				<span>Add</span>
			</a>
			<div class="content" v-else>
				<span v-html="contents.success_criteria"></span>
			</div>
			<Modal 
				:title="title.success_criteria"
				:is_active="is_active.success_criteria"
				@input="is_active.success_criteria = false"
				@cancel="is_active.success_criteria = false"
				v-model="contents.success_criteria"
			/>

		</td>
	</tr>
</template>

<script>
	import Modal from '~/components/Reports/Modal'
	export default {
		components: {
			Modal, 
		}, 

		props: {
			title: {
				required: true, 
				type: Object, 
			}, 

			value: {
				required: false, 
				type: Object, 
			}
		}, 

		data() {
			return {
				is_active: {
					project_objective: false, 
					success_criteria: false, 
				}, 
				contents: {
					project_objective: Object.assign({}, this.value).project_objective, 
					success_criteria: Object.assign({}, this.value).success_criteria, 
				}, 

			}
		}, 

		/*created() {
			this.content = Object.assign({}, this.value)
		}, */

		watch: {
			contents: {
				deep: true, 
				handler() {
					this.$emit('input', this.contents)
				}
			}
		}
	}
</script>