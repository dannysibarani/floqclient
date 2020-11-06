<template>
	<div 
		class="column is-6-tablet is-4-widescreen is-3-fullhd" 
		v-if="stakeholder.project_roles.length>0"
	>
		<article class="box">
			<div class="media">
				<aside class="media-left">
					<figure class="image is-64x64">
						<img 
							:src="avatar"
							:alt="stakeholder.name"
							@error="onErrorAvatar"
						>
					</figure>
				</aside>
				<div class="media-content">
					<p class="title is-5 is-marginless">{{ stakeholder.name }}</p>
					<p class="subtitle is-marginless">
						<span class="tag is-small is-info"
							v-for="projectRole in stakeholder.project_roles"
						>
							{{ projectRole.name }}
						</span>
					</p>
					<p class="content is-small">
						<nuxt-link
							:to="{name: 'stakeholders-project_id-stakeholder_id-edit', 
									params:{project_id: project_id, stakeholder_id: stakeholder.id}}"
						>Edit</nuxt-link>
						<span>.</span>
						<a @click.prevent="remove" >Delete</a>
					</p>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		props: {
			stakeholder: {
				required: true, 
				type: Object, 
			}, 

			project_id: {
				required: true, 
				type: Number, 
			}
		}, 

		data() {
			return {
				avatar: '', //this.stakeholder.profile.avatar, 
				avatar_fallback: 'avatars/Portrait_Placeholder.png'
			}
		}, 

		methods: {
			...mapActions({
				destroy: 'stakeholder/destroy'
			}), 

			remove() {
				this.destroy({
					project_id: this.project_id, 
					stakeholder_id: this.stakeholder.id
				})
			}, 

			onErrorAvatar() {
				console.log('no image, use fallback')
				this.avatar = this.avatar_fallback
			}
		}
	}

</script>

