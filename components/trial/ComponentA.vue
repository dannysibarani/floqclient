<template>
	<div class="field">
		<button class="button is-success"
			@click.prevent="onClickA"
		>
			Send Message to Bus
		</button>
	</div>
</template>

<script>
	export default {
		methods: {
			onClickA() {
				this.$bus.$emit('message', 'This message from Component A')
			}
		}
	}
</script>