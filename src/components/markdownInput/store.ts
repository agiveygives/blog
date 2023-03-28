import { writable } from 'svelte/store';

export type MarkdownInputType = {
	title: string;
	content: string;
	authors: string;
	tags: string[];
	description: string;
};

export default writable({
	title: '',
	content: '',
	authors: '',
	tags: [],
	description: ''
});
