var {handler} = require('./index');

handler({
  queryStringParameters: {
        url: 'https%3A%2F%2Fbluehost.com',
    }
})
    .then(response => console.log(response))
    .catch(error => console.error(error));
