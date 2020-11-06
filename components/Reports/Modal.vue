<template>
	<div class="modal"
		:class="{ 'is-active' : is_active}"
	>
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">{{title}}</p>
				<button class="delete" arial-label="close" @click.prevent="$emit('cancel')"></button>
			</header>
			<section class="modal-card-body">
				<client-only>
					<vue-editor v-model="content"></vue-editor>
				</client-only>
			</section>
			<footer class="modal-card-foot">
				<button class="button is-success" @click.prevent="onClickSaveChanges">Save Changes</button>
				<button class="button" @click.prevent="$emit('cancel')">Cancel</button>
			</footer>
		</div>
	</div>
</template>



<script>
	//import { VueEditor } from "vue2-editor"

	let VueEditor
	if(process.client) {
		VueEditor = require('vue2-editor').VueEditor
	}

	export default {
		components: {
			VueEditor
		}, 

		props: {
			title: {
				required: true, 
				type: String
			}, 

			is_active: {
				required: true, 
				type: Boolean
			}, 

			value: {
				required: false, 
				type: String, 
			}
		}, 

		data() {
			return {
				content: this.value, 
			}
		}, 

		methods: {
			onClickSaveChanges() {
				this.$emit('input', this.content)
			}
		}

	}
</script>