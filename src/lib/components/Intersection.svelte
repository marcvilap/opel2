<script lang="ts">
	let className = ''
	export { className as class }
	export let active = false
	const container = (node: HTMLDivElement) => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => (active = entry.isIntersecting))
		})
		observer.observe(node)
		return {
			destroy: () => observer.disconnect(),
		}
	}
</script>

<div class={className} use:container>
	<slot />
</div>
