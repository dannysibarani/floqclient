<template>
	<nav class="navbar has-shadow is-fixed-top">
		<div class="navbar-brand">
			<div class="navbar-item">
				<nuxt-link :to="{name: 'index'}">
					<img src="~/assets/images/icon.png" alt="Floq">
				</nuxt-link>
			</div>
			<div class="navbar-burger burger">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="navbar-menu">
			<div class="navbar-start">
				
			</div>
			<div class="navbar-end">
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						<figure class="image is-24x24 is-rounded">
							<img src="~/static/avatars/Portrait_Placeholder.png" alt="Portrait">
						</figure>
						{{ $auth.user.name }}
					</a>
					<div class="navbar-dropdown is-right">
						<nuxt-link 
							class="navbar-item is-leveled" 
							:to="{name: 'users-profile'}"
						>
							Profile
							<span class="icon is-pulled-right"><font-awesome-icon :icon="['fas', 'user-circle']" /></span>
						</nuxt-link>

						<hr class="navbar-divider">
						
						<a 
							class="navbar-item is-leveled"
							@click.prevent="logout"
						>
							Logout
							<span class="icon"><font-awesome-icon :icon="['fas', 'sign-out-alt']"/></span>
						</a>
						  
					</div>
				</div>

			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		methods: {
			async logout() {
				await this.$auth.logout()
			}
		}
	}
</script>