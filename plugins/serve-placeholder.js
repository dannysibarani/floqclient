
import Vue from 'vue'
import placeholder from 'serve-placeholder'


Vue.use(placeholder({ dist: {}, static: { skipUnknown: true } }))
//Vue.use(placeholder)
