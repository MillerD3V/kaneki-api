const fetch = require('node-fetch');
const endpoints = require('./src/endpoints')

exports.cry = async function() {
    let url = endpoints.kaneki.url + 'cry'
    let kaneka = await fetch(url).then(r=> r.json())
    return { url: kaneka.url };
};

exports.naruto = async function(number) {
    if (typeof number !== 'number') {
        throw new TypeError('Укажите число');
    }
    if(number < 0 || number === 0) throw new TypeError('Томов не может быть меньше чем 1')
    if(number > 700) throw new Error('Томов пока только 700. Напишите число от 1-700')
    let url = endpoints.kaneki.url + `naruto/${number}`
    let kaneka = await fetch(url).then(r=> r.json())
    return kaneka;
};

exports.clever = async function(string) {
    let url = endpoints.kaneki.url + `clever`
    let kaneka = await fetch(url, {
        method: 'POST',
        body:  JSON.stringify({ query: string }),
        headers: { 'content-type': 'application/json' }
    }).then(r=> r.json())
    return { message: kaneka.message, context: kaneka.contexts};
};