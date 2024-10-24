import { toSlug } from '$lib/toSlug';
import EditorState from '$lib/EditorSnapshot';

export default class Post {
	title: string;
	slug: string;
	content: string;

	constructor(editorSnapshot: EditorState) {
		this.slug = toSlug(editorSnapshot.title);
		this.title = editorSnapshot.title;
		this.content = JSON.stringify(editorSnapshot.blocks);
	}
}
