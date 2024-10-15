import { error } from '@sveltejs/kit';
import { promises as fs } from 'fs';

export async function GET({ url }: { url: URL }): Promise<Response> {
	const slug = url.searchParams.get('slug');

	if (!slug) {
		throw error(400, 'A slug is required');
	}

	try {
		const path = `assets/posts/${slug}.json`;
		const data = await fs.readFile(path);

		return new Response(data, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch {
		throw error(404, 'Post was not found');
	}
}

export async function POST({ request }: { request: Request }) {
	const { slug, post } = await request.json();

	if (!slug) {
		throw error(400, 'A slug is required');
	}
	if (!post) {
		throw error(400, 'Post required in request json');
	}

	try {
		const path = `assets/post/${slug}.json`;
		await fs.writeFile(path, post);

		const options = {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		};

		return new Response(null, options);
	} catch {
		throw error(400, 'Error creating post');
	}
}
