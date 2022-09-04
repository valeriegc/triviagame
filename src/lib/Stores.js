import { writable } from 'svelte/store';
export let questionNumber = writable(7);
export let correctAtFirst = writable(0);
