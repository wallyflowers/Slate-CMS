<script lang="ts">
	import EditorState from '$lib/EditorState';
	import { onMount, tick } from 'svelte';

	export let titlePlaceholder: string;
	/// Callback triggered when the editor attempts to save its content
	//export let trySave: (content: EditorState) => void;

	let state = new EditorState();

	let titleElement: HTMLInputElement;
	let titleElementValue = state.title;

	function handleTitleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			state.title = titleElementValue;
			console.log('Keypress Detected');
		}
	}

	onMount(async () => {
		await tick();
		titleElement.focus();
		titleElement.select();
	});
</script>

<input
	bind:this={titleElement}
	bind:value={titleElementValue}
	on:keydown={handleTitleKeydown}
	type="text"
	name="title"
	placeholder={titlePlaceholder}
	class="font-bold text-5xl border-none outline-none mx-8"
/>

<style>
	:global(.ce-block h1) {
		font-size: 46px;
		font-weight: bold;
		padding-top: 0.1em;
		margin-bottom: 0.2em;
	}
	:global(.ce-block h2) {
		font-size: 38px;
		font-weight: bold;
		padding-top: 0.1em;
		margin-bottom: 0.2em;
	}
</style>
