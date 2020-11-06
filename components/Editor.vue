<template>
	<client-only>
		<tinymce-editor v-model="vcontent"

		>
		</tinymce-editor>
	</client-only>
</template>

<script>
	export default {
		props: {
			content: {
				type:String, 
				required: true, 
			}
		}, 

		data() {
			return {
				vcontent: this.content
			}
		}
	}
	/*
				:init="{
					skin:false, 
					menubar: false, 
					plugins: 'lists', 
					toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
				}"
	*/
</script>