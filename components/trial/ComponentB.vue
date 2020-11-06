<template>
	<div class="field">
		<label for="" class="label">Below are from Component A</label>
		<div class="control">
			<input type="text" class="input" v-model="message_from_a">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message_from_a: 'asdf', 
			}
		}, 

		created() {
			this.$bus.$on('message', (data) => {
				this.message_from_a = data
			})
		}
	}
</script>