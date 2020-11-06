<template>
	<form @submit.prevent="edit">
		
		<div class="columns is-desktop">
			<div class="column">
				<label class="label">Name</label>
				<div class="control">
					<input type="text" class="input" required v-model="form.name">
				</div>
			</div>
			
			<div class="column">
				<label class="label">Date Prepared</label>
				<div class="control">
					<input type="text" class="input" v-model="form.date_prepared" disabled>
					<!--<DatetimePicker 
						:datetime='form.date_prepared'
						v-model="form.date_prepared" 
					/>-->
				</div>
			</div>
		</div>
		
		
		<div class="field">
			<label class="label">Project Title</label>
			<div class="control">
				<input type="text" class="input is-large" required v-model="form.project_title">
			</div>
		</div>

		<div class="field">
			<div class="buttons">
				<button class="button is-medium is-success">Update Project</button>

				<nuxt-link 
					class="button is-medium is-light"
					:to="link_to_index"
				>Cancel</nuxt-link>
			</div>
		</div>
	</form>
</template>

<script>
	//import DatetimePicker from '~/components/DatetimePicker/DatetimePicker'
	import {mapActions} from 'vuex' 

	export default {
		/*components: {
			DatetimePicker, 
		}, */

		data() {
			return {
				form: {
					name: '', 
					date_prepared: '',  
					project_title: '', 
				}, 
			}
		}, 

		computed: {
			link_to_index() {
				return {
					name: 'index'
				}
			}
		}, 

		methods: {
			...mapActions({
				update: 'project/update'
			}), 

			edit() {
				this.update({
					id : this.form.id, 
					project_title : this.form.project_title, 
					name : this.form.name, 
				})

				this.$router.push({
					name: 'index'
				})
			}, 
		}, 

		async asyncData({app, params}) {
			let response = await app.$axios.$get(`projects/${params.id}`)
			return {
				form: response.data, 
			}
		}
	}
</script>