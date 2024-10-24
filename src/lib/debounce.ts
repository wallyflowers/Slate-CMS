// Return a debounced copy of the passed function
export function debounce<T extends (...args: any[]) => void>(someFunction: T, wait: number) {
	let timeoutId: ReturnType<typeof setTimeout>;

	return (...args: any[]) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			someFunction(...args);
		}, wait);
	};
}

import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';

describe('debounce', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	test('delay execution', () => {
		const mockFunction = vi.fn();
		const debouncedFunction = debounce(mockFunction, 200);
		debouncedFunction();

		expect(mockFunction).not.toHaveBeenCalled();
		vi.advanceTimersByTime(200);
		expect(mockFunction).toHaveBeenCalled();
	});

	test('should be called once when triggered several times', () => {
		const mockFunction = vi.fn();
		const debouncedFunction = debounce(mockFunction, 200);
		debouncedFunction();
		debouncedFunction();
		debouncedFunction();

		vi.advanceTimersByTime(200);
		expect(mockFunction).toHaveBeenCalledOnce();
	});

	test('should use the most recent arguments', () => {
		const mockFunction = vi.fn();
		const debouncedFunction = debounce(mockFunction, 200);

		debouncedFunction(1);
		debouncedFunction(2);
		debouncedFunction(3);

		vi.advanceTimersByTime(200);
		// The function should only be called with the last set of arguments
		expect(mockFunction).not.toHaveBeenCalledWith(1);
		expect(mockFunction).not.toHaveBeenCalledWith(2);
		expect(mockFunction).toHaveBeenCalledWith(3);
	});

	test('should handle multiple arguments', () => {
		const mockFunction = vi.fn();
		const debouncedFunction = debounce(mockFunction, 200);

		debouncedFunction('first argument', 34, { key: 'value' });

		vi.advanceTimersByTime(200);
		expect(mockFunction).toHaveBeenCalledWith('first argument', 34, { key: 'value' });
	});
});
