<template>
	<div>
		<h1 class="title">Stakeholders</h1>

		<nav class="level">
			<div class="level-left">
				<div class="level-item">
					<strong>Project Name</strong>
				</div>
				<div class="level-item">
					<a class="button is-rounded is-info">{{ project.name }}</a>
				</div>
			</div>
			<div class="level-right">
				<p class="level-item">
					<button class="button is-success"
						@click.prevent="onClickFinish"
					>
						Finish
					</button>
				</p>
			</div>
		</nav>

		<div class="table-container">
			<table class="table is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th class="is-narrow"><input type="checkbox"></th>
						<th>Name</th>
						<th>Email</th>
						<th>Project Name</th>
						<th>Project Role</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th class="is-narrow"><input type="checkbox"></th>
						<th>Name</th>
						<th>Email</th>
						<th>Project Name</th>
						<th>Project Role</th>
					</tr>
				</tfoot>
				
				<tbody>
					<StakeholderRow 
						v-for="user in users" 
						:user="user"
						:project="project"
						:project_roles="project_roles"
						:key="user.id"
					/>
				</tbody>
			</table>
		</div>

		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import StakeholderRow from '~/components/stakeholders/StakeholderRow'
	export default {
		components: {
			StakeholderRow, 
		}, 

		data() {
			return {
				project_id: this.$route.params.project_id
			}
		}, 

		computed: {
			...mapGetters({
				project: 'project/project', 
				users: 'user/users', 
				project_roles: 'project_role/project_roles'
			}),  
		}, 

		methods: {
			...mapActions({
				setSelectedProjectId: 'navigation/setSelectedProjectId'
			}), 

			onClickFinish() {
				this.setSelectedProjectId(this.project_id)
				this.$router.push({
					name: 'stakeholders'
				})
			}
		}, 

		async asyncData({store, params}) {
			await store.dispatch('user/getUsers')
			await store.dispatch('project/getProject', params.project_id)
			await store.dispatch('project_role/getProjectRoles', params.project_id)
		}
	}
</script>