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
						v-model="content"
					>
					</tinymce-editor>
				</client-only>

				
				<!--<editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
					<div>
						<button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
							Bold
						</button>
					</div>
				</editor-menu-bar>
				
				<editor-content :editor="editor" />-->
				

			</section>
			<footer class="modal-card-foot">
				<button class="button is-success" @click.prevent="onClickSaveChanges">Save Changes</button>
				<button class="button" @click.prevent="$emit('cancel')">Cancel</button>
			</footer>
		</div>
	</div>
</template>

<script>
	/*import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
	import {
	  Bold
	} from 'tiptap-extensions'*/

	export default {
		/*components: {
			EditorContent,
			EditorMenuBar, 
		}, */

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

				/*editor: new new Editor({
					extensions: [
						new Bold(), 
					], 

					content: `
						<h1>Yay Headlines!</h1>
						<p>All these <strong>cool tags</strong> are working now.</p>
					`, 
				}), */
			}
		}, 

		/*mounted() {
		    this.editor = new Editor({
		      content: '<p>This is just a boring paragraph</p>',
		    })
		}, */

		/*beforeDestroy() {
			this.editor.destroy()
		},*/

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