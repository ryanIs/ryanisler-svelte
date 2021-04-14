import './style/index.css';

import Hello from './components/Hello.svelte';

const app = new Hello({
    target: document.body,
});

console.log('Hello world!');