<template>
	<ul class="menu-list">
		<li @click.prevent="setActiveElement('projects')">
			<nuxt-link 
				:to="{name: 'projects'}"
				:class="{'is-active': isActive('projects')}"
			>
				<span class="icon"><font-awesome-icon :icon="['fab', 'product-hunt']"/></span>
				Projects
			</nuxt-link>
		</li>

		<li @click.prevent="setActiveElement('stakeholders')">
			<nuxt-link 
				:to="{name: 'stakeholders'}"
				:class="{'is-active': isActive('stakeholders')}"
			>
				<span class="icon"><font-awesome-icon :icon="['fas', 'users']"/></span>
				Stakeholders
			</nuxt-link>
		</li>

		<li @click.prevent="setActiveElement('project_roles')">
			<nuxt-link 
				:to="{name: 'project_roles'}"
				:class="{'is-active': isActive('project_roles')}"
			>
				<span class="icon"><font-awesome-icon :icon="['fas', 'project-diagram']"/></span>
				Project Roles
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				position: 'navigation/position', 
			})
		}, 

		methods: {
			...mapActions({
				setPosition: 'navigation/setPosition'
			}), 

			setActiveElement(activeElement) {
				this.setPosition(activeElement)
			}, 

			isActive(activeElement) {
				return this.position === activeElement
			}
		}
	}
</script>