import { writable } from 'svelte/store';

export const loggedIn = writable<boolean>(false);
