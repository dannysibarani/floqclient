<template>
	<main class="section">
		<div class="columns">
			<div class="container">
				<div class="column">
					<ComponentA />
				</div>
				<div class="column">
					<ComponentB />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import ComponentA from '~/components/trial/ComponentA'
	import ComponentB from '~/components/trial/ComponentB'
	export default {
		components: {
			ComponentA, 
			ComponentB, 
		}
	}
</script>