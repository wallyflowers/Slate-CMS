import type { SvelteComponent } from 'svelte';

export default class EditorState {
	_title: string;
	_blocks: Block[];

	get title() {
		return this._title;
	}

	set title(newTitle: string) {
		this._title = newTitle;
	}

	constructor() {
		this._title = '';
		this._blocks = [];
	}

	addBlock(component: SvelteComponent) {
		const id = this._blocks.length;
		this._blocks.push({ id, component });
	}

	deleteBlock(id: number) {
		this._blocks = this._blocks.filter((block) => {
			return block.id !== id;
		});
	}
}

export interface Block {
	id: number;
	component: SvelteComponent;
}
