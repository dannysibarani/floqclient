

/*export default function({res}) {
	if(res.statusCode==404) {
		console.log('res.statusCode==404')
	}
}*/





/*const placeholder = require('serve-placeholder')
//import placeholder from 'serve-placeholder'

export default function ({ app }) {
	console.log('serve-placeholder')

	// Response with appreciate placeholders
	//app.use(placeholder())
	//app.use(placeholder({ dist: {}, static: { handlers: null } }))
	app.use(placeholder({ dist: {}, static: { skipUnknown: true } }))

	// [global error handler]

	if(placeholder.statusCode==404) {
		console.log('asdf')
	}

	//next()
}*/