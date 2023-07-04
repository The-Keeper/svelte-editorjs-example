import { writable } from 'svelte/store';

interface EditorCollection {
    [key: string]: any
}

export const editor_data: EditorCollection = writable({});
