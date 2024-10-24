<script lang="ts">
	import Editor from '$lib/Editor.svelte';

	let saved = true;

	// Try to save the file using a post request to the server
	// async function trySave(content: EditorContent): Promise<Response> {
	// 	if (!content) {
	// 		throw 'Editor content is null or undefined';
	// 	}

	// 	const slug = toSlug(content.title);

	// 	const reqBody = {
	// 		slug: slug,
	// 		post: content.blocks
	// 	};

	// 	const response = await fetch('/api/files', {
	// 		method: 'POST',
	// 		body: JSON.stringify(reqBody),
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	});

	// 	if (!response.ok) throw 'Error saving editor content to the server!';
	// }
</script>

<div class="mx-auto w-10 h-10 mt-10 mb-5">
	{#if saved}
		<svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 20 20"
			><path fill="currentColor" d="m15.3 5.3l-6.8 6.8l-2.8-2.8l-1.4 1.4l4.2 4.2l8.2-8.2z" /></svg
		>
	{:else}
		<span class="loading loading-infinity loading-lg"></span>
	{/if}
</div>
<div class="flex flex-col items-center">
	<Editor titlePlaceholder="Untitled" />
</div>
