<template>
	<form @submit.prevent="add">
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
					<!--<input type="date" class="input" required v-model="form.date_prepared">-->
					<DatetimePicker 
						:datetime="''"
						v-model="form.date_prepared" 
					/>
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
				<button class="button is-medium is-success">Create Project</button>
				<nuxt-link 
					class="button is-medium is-light" 
					:to="link_to_index"
				>Cancel</nuxt-link>
			</div>
		</div>
	</form>
</template>

<script>
	import {mapActions} from 'vuex'
	import DatetimePicker from '~/components/DatetimePicker/DatetimePicker'

	export default {
		components: {
			DatetimePicker, 
		}, 

		data() {
			return {
				form: {
					date_prepared: '', 
					name: '', 
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
				'store': 'project/store'
			}), 

			add() {
				this.store({
					date_prepared: this.form.date_prepared,  
					name: this.form.name, 
					project_title: this.form.project_title
				})

				this.form = {
					date_prepared: '', 
					name: '', 
					project_title: '', 
				}

				this.$router.push({
					name: 'index'
				})
			}, 
		}
	}
</script>
