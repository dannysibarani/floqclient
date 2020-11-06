<template>
  <div>

	<template v-if="!$auth.loggedIn">
		<Signin />
	</template>
	<template v-else>
		<Navigation />

		<hr>
		
		<section class="section">
			<div class="columns">
				<div class="column is-4-tablet is-3-desktop is-2-widescreen">
					<LeftMenu />
				</div>
				<main class="column">
					<nuxt />
				</main>
			</div>
		</section>

		<!-- OTHERS -->
	</template>

  </div>
</template>

<script>
	import Signin from '~/pages/auth/signin'
	import Navigation from '~/layouts/partials/Navigation'
	import LeftMenu from '~/layouts/partials/LeftMenu'

	export default {
		middleware: [
			'redirectIfUnauthenticated',
		], 

		components: {
			Signin, 
			Navigation, 
			LeftMenu, 
		}
	}
</script>