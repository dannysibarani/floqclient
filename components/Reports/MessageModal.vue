<template>
	<tr @dblclick.prevent="is_active = true">
		<td :colspan="colspan">
			<p class="has-text-weight-bold">{{ title }}</p>
			<a class="button is-primary is-rounded" 
				v-if="!content"
				@click.prevent="is_active = true"
			>
				<span class="icon">
					<font-awesome-icon :icon="['fas', 'plus']" />
				</span>
				<span>Add</span>
			</a>
			<div class="content" v-else>
				<span v-html="content"></span>
			</div>
			<Modal 
				:title="title"
				:is_active="is_active"
				@input="is_active = false"
				@cancel="is_active = false"
				v-model="content"
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
			colspan: {
				required: true, 
				type: Number, 
			}, 

			title: {
				required: true, 
				type: String, 
			}, 

			value: {
				required: false, 
				type: String, 
			}, 
		}, 

		data() {
			return {
				is_active: false, 
				content: this.value, 
			}
		}, 

		watch: {
			'content'() {
				this.$emit('input', this.content)
			}
		}
	}
</script>