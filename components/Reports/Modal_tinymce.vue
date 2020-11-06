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
					<tinymce-editor 
						:init="{
							skin:false, 
							menubar: false, 
							plugins: 'lists', 
							toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
						}"
						v-model="content"
					>
					</tinymce-editor>
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
	export default {
		props: {
			title: {
				required: true, 
				type: String
			}, 

			is_active: {
				required: true, 
				type: Boolean
			}
		}, 

		data() {
			return {
				content: null, 
			}
		}, 

		methods: {
			onClickSaveChanges() {
				this.$emit('input', this.content)
			}
		}

	}
</script>

<style>
	.tox-notification {display: none !important;}
</style>