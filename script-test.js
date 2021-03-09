// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

// eslint-disable-next-line no-console
console.log('Ola Mundo');

const resultado = shell.exec('git diff --name-only Modulo02_Aula05..main', { silent: true });

// eslint-disable-next-line no-console
console.log(resultado.stdout.split('\n'));
