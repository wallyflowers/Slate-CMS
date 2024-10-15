<script>
	import EditorJS from '@editorjs/editorjs';
	import Header from '@editorjs/header';

	let editor = new EditorJS({
		holder: 'editor-div',
		tools: {
			header: Header
		},
		data: {
			blocks: [
				{
					id: 'header_id',
					type: 'header',
					data: {
						text: 'Untitled',
						level: 2
					}
				}
			]
		}
	});
</script>

<div id="editor-div" class="mx-8"></div>

<style>
	:global(.ce-block h2) {
		font-size: 46px;
		font-weight: bold;
		margin-bottom: 0.2em;
	}
</style>
