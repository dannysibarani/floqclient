<template>

	<DatetimePicker
		type='second'
		:value="datetime=='' ? now() : datetime"
		@input='log_datetimepicker'
		min='min_datetime'
		max='max_datetime'
		:dayStr='dayStr'
		:timeStr='timeStr'
		:scrollbarProps="{isMobile: isM}"
		:popperProps="defaultPopperProps"
		:btnStr='btnStr'
	>
	</DatetimePicker>

</template>

<script>
	import {DatetimePicker} from '@livelybone/vue-datepicker'
	export default {
		props: {
			datetime: {
				required: true, 
				type: String, 
			}
		}, 

		components: {
			DatetimePicker, 
		}, 

		data() {
			return {
				//DatatimePicker
				dayStr: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], 
				timeStr: ['Hour', 'Min', 'Sec'],
				//datetime: this.now(), //'2019-02-01 01:02:01', //NOW
				isM: true, 
				btnStr: 'Select', 

				defaultPopperProps: {
				  arrowPosition: 'start',
				  arrowOffsetScaling: 1,
				  popperOptions: {
				    placement: 'bottom-start',
				    positionFixed: true,
				    // more options in https://popper.js.org
				  },
				}, 

				min_datetime: this.minDatetime(), 
				max_datetime: this.maxDatetime(), 
			}
		}, 

		methods: {
			log_datetimepicker(val) {
				this.datetime = val
				//console.log(val)
				this.$emit('input', this.datetime)
			}, 

			ten(val) {
				return (val < 10 ? '0' : '') + val
			}, 

			now() {
				let date = new Date()
				let datetime = date.getFullYear() + '-' + 
								this.ten(date.getMonth()+1) + '-' + 
								this.ten(date.getDate()) + ' ' + 
								this.ten(date.getHours()) + ':' + 
								this.ten(date.getMinutes()) + ':' + 
								this.ten(date.getSeconds())
				this.$emit('input', datetime)
				return datetime
			}, 

			minDatetime() {
				let min_year = (new Date()).getFullYear()-4
				return min_year + '-01-01 00:00:00'
			}, 

			maxDatetime() {
				let max_year = (new Date()).getFullYear()
				return max_year + '-12-31 23:59:59'
			}
		}

	}
</script>