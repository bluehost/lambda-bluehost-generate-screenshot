var {handler} = require('./index');

handler('https://bluehost.com')
    .then(response => console.log(response))
    .catch(error => console.error(error));
