const fetch = require('node-fetch');
const endpoints = require('./src/endpoints')

exports.cry = async function() {
    let kaneka = await fetch(endpoints.kaneki.url + 'cry').then(r=> r.json())
    return { url: kaneka.url };
};

exports.naruto = async function(number) {
    if (typeof number !== 'number') {
        throw new TypeError('Укажите число');
    }
    if(number < 0 || number === 0) throw new TypeError('Страниц не может быть меньше чем 1')
    if(number > 700) throw new Error('Напишите число от 1-700')
    let kaneka = await fetch(endpoints.kaneki.url + `naruto/${number}`).then(r=> r.json())
    return kaneka;
};

exports.clever = async function(string) {
    let kaneka = await fetch(endpoints.kaneki.url + `clever`, {
        method: 'POST',
        body:  JSON.stringify({ query: string }),
        headers: { 'content-type': 'application/json' }
    }).then(r=> r.json())
    return { message: kaneka.message, context: kaneka.contexts};
};