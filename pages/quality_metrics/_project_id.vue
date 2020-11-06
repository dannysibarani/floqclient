<template>

	<div class="table-container">
		<table class="table is-hoverable is-fullwidth is-bordered is-marginless">
			<Header 
				:colspan="5"
				:title="'QUALITY METRICS'"
			/>
			<tbody>
			
				<ProjectTitle
					:colspans="[2, 3]"
					:content="quality_metrics.project_title"
				/>

				<ProjectManagerAndDateHeader
					:colspans="[2, 1, 1, 1]"
					:project_manager_name="quality_metrics.project_manager.name"
					:date_prepared="quality_metrics.date_prepared"
				/>

				<Divider :colspan="5" />
				
				<tr>
					<th>Id</th>
					<th>Items</th>
					<th colspan="2">Metric</th>
					<th>Measurement Method</th>
				</tr>

				<QualityMetricRow
					v-for="quality_metric in quality_metrics.quality_metrics"
					:quality_metric="quality_metric"
					:key="quality_metric.id" 
				/>
			
			</tbody>
		</table>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex'
	import Header from '~/components/Reports/Header'
	import ProjectTitle from '~/components/Reports/ProjectTitle'
	import ProjectManagerAndDateHeader from '~/components/Reports/ProjectManagerAndDateHeader'
	import Divider from '~/components/Reports/Divider'

	import QualityMetricRow from '~/components/QualityMetrics/QualityMetricRow'

	export default {
		components: {
			Header, 
			ProjectTitle, 
			ProjectManagerAndDateHeader, 
			Divider, 

			QualityMetricRow, 
		}, 

		computed: {
			...mapGetters({
				quality_metrics : 'quality_metric/quality_metrics'
			})
		}, 

		async asyncData({store, params}) {
			await store.dispatch('quality_metric/getQualityMetrics', params.project_id)
		}
	}
</script>