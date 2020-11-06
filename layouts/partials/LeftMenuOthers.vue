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

		<li v-if="selected_project_id">
			<p class="menu-label">Initiating</p>
			<ul>
				<li @click.prevent="setActiveElement('project_charters')">
					<nuxt-link 
						:to="{name: 'project_charters-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('project_charters')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'tasks']"/></span>
						Project Charter
					</nuxt-link>
				</li>
				<li @click.prevent="setActiveElement('stakeholder_registers')">
					<nuxt-link 
						:to="{name: 'stakeholder_registers-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('stakeholder_registers')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'registered']"/></span>
						Stakeholder Register
					</nuxt-link>
				</li>

				<li @click.prevent="setActiveElement('stakeholder_analyses')">
					<nuxt-link 
						:to="{name: 'stakeholder_analyses-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('stakeholder_analyses')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'diagnoses']"/></span>
						Stakeholder Analysis
					</nuxt-link>
				</li>

			</ul>
		</li>

		<li v-if="selected_project_id">
			<p class="menu-label">Planning</p>
			<ul>
				<li @click.prevent="setActiveElement('requirement_documentations')">
					<nuxt-link 
						:to="{name: 'requirement_documentations-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('requirement_documentations')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'book']"/></span>
						Requirements Documentation
					</nuxt-link>
				</li>

				<li @click.prevent="setActiveElement('requirement_traceabilities')">
					<nuxt-link 
						:to="{name: 'requirement_traceabilities-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('requirement_traceabilities')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
						Requirements Traceability Matrix
					</nuxt-link>
				</li>

				<li @click.prevent="setActiveElement('project_scopes')">
					<nuxt-link 
						:to="{name: 'project_scopes-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('project_scopes')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
						Project Scope Statement
					</nuxt-link>
				</li>

				<li @click.prevent="setActiveElement('risk_registers')">
					<nuxt-link 
						:to="{name: 'risk_registers-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('risk_registers')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
						Risk Register
					</nuxt-link>
				</li>

				<li @click.prevent="setActiveElement('quality_metrics')">
					<nuxt-link 
						:to="{name: 'quality_metrics-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('quality_metrics')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
						Quality Metric
					</nuxt-link>
				</li>

				<li @click.prevent="setActiveElement('stakeholder_eng_asses')">
					<nuxt-link 
						:to="{name: 'stakeholder_eng_asses-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('stakeholder_eng_asses')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
						Stakeholder Engagement Assessment
					</nuxt-link>
				</li>

				<li @click.prevent="setActiveElement('com_man_plans')">
					<nuxt-link 
						:to="{name: 'com_man_plans-project_id', params: {project_id: selected_project_id}}"
						:class="{'is-active': isActive('com_man_plans')}"
					>
						<span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
						Communication Management Plan
					</nuxt-link>
				</li>

			</ul>
		</li>

		<li v-if="selected_project_id">
			<p class="menu-label">Executing</p>
		</li>

		<li v-if="selected_project_id">
			<p class="menu-label">M&C</p>
		</li>

		<li v-if="selected_project_id">
			<p class="menu-label">Closing</p>
		</li>

	</ul>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				position: 'navigation/position', 
				selected_project_id: 'navigation/selected_project_id', 
			})
		}, 

		methods: {
			...mapActions({
				setPosition: 'navigation/setPosition', 
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