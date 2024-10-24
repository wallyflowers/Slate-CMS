export function toSlug(name: string): string {
	if (!name.trim()) throw Error('Slug name cannot be empty');
	name = name.toLowerCase();
	name = name.replace(/ +/g, '-');
	name = name.replace(/[^a-z0-9 -]/g, '');

	return name;
}

import { describe, test, expect } from 'vitest';

describe('toSlug', () => {
	test('should replace uppercase characters with lowercase', () => {
		const name = 'UpperCaseTitle';
		const slug = toSlug(name);

		expect(slug).toBe('uppercasetitle');
	});
	test('should replace spaces with hyphens', () => {
		const name = 'name with spaces';
		const slug = toSlug(name);

		expect(slug).toBe('name-with-spaces');
	});
	test('should replace multiple spaces with one hyphen', () => {
		const name = 'name  with      multiple           spaces';
		const slug = toSlug(name);

		expect(slug).toBe('name-with-multiple-spaces');
	});
	test('should remove invalid characters', () => {
		const name = 'invalid!@#$%^&*()name';
		const slug = toSlug(name);

		expect(slug).toBe('invalidname');
	});
	test('should throw error if empty', () => {
		const name = '';

		expect(() => toSlug(name)).toThrow('Slug name cannot be empty');
	});
});
