var {handler} = require('./index');

handler({
	url: 'https://www.bluehost.com/',
})
	.then(response => console.log(response))
	.catch(error => console.error(error));
