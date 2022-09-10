import { writable } from 'svelte/store';
export let questionNumber = writable(0);
export let correctAtFirst = writable(0);
export let gameState = writable(0);
