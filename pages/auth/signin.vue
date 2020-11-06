<template>
	<section class="hero is-fullheight is-primary">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-5-tablet is-4-desktop is-3-widescreen">
						<form class="box" @submit.prevent="signin">
							<div class="field has-text-centered">
								<img src="~/assets/images/logo-bis.png" alt="Floq" width="167">
							</div>
							<div class="field">
								<label class="label">Email</label>
								<div class="control has-icons-left">
									<span class="icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
									<input type="email" class="input" placeholder="e.g. john@example.com" required v-model="form.email">
								</div>
							</div>
							<div class="field">
								<label class="label">Password</label>
								<div class="control has-icons-left">
									<span class="icon"><font-awesome-icon :icon="['fas', 'lock']"/></span>
									<input type="password" class="input" placeholder="********" required v-model="form.password">
								</div>
							</div>
							<div class="field">
								<button class="button is-success">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
	export default {

		data() {
			return {
				form: {
					email: '', 
					password: ''
				}
			}
		}, 

		methods: {
			async signin() {
				await this.$auth.loginWith('local', {
					data: this.form
				})
			}
		}, 
	}
</script>