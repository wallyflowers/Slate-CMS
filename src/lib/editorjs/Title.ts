export default class Title {
	data;

	constructor({ data }) {
		this.data = data;
	}

	render() {
		const header = document.createElement('h1');
		header.classList.add('select-all', 'outline-0');
		header.contentEditable = 'true';
		header.focus();

		if (this.data) {
			header.innerText = this.data.text;
		} else {
			header.innerText = '';
		}

		return header;
	}

	save(blockContent) {
		return {
			text: blockContent.textContent
		};
	}
}
