/**
 * Handle a click outside of an element
 * @example
 * ```
 * <div use:clickOutside on:click_outside={doSomethingFunc} />
 * ```
 *
 * @param node
 * @returns
 */
export function clickOutside(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
