import { readFile } from 'fs/promises';

process.on('uncaughtException', (err) => {
    console.log('Caught exception');
});

const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')

console.log('hello!!')
