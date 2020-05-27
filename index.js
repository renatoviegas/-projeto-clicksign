const restify = require('restify');
const axios = require('axios');
const { access_token } = require('./.properties');
const urlBase = 'https://sandbox.clicksign.com/api/v1';

let count = 0;

const getAccountClickSign = async () => {
    console.log(++count);
    const resp = await axios.get(`${urlBase}/accounts?access_token=${access_token}`);
    console.log(resp.data);
}

const server = restify.createServer();
server.get('/clicksign', getAccountClickSign);

server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});

