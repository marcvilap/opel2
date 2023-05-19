<script lang="ts">
	let className = ''
	export { className as class }
	export let rate: number
	let innerHeight = 0
	let innerWidth = 0
	let translate = 0
	const container = (node: HTMLDivElement) => {
		window.addEventListener('scroll', () => {
			const { top, height } = node.getBoundingClientRect()
			translate = innerWidth >= 1024 ? (top - (innerHeight - height) / 2) * rate : 0
		})
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class={className} use:container style="transform: translateY({translate}px)">
	<slot />
</div>
