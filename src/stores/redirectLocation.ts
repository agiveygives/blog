import { writable } from "svelte/store";

export const redirectLocation = writable<string>('/');
