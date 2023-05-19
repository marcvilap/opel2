<script lang="ts">
	import type { OutputMetadata } from '$lib/types'
	import Img from '$lib/components/Img.svelte'
	import Intersection from '$lib/components/Intersection.svelte'
	export let img: OutputMetadata[]
	let intersection = false
</script>

<Intersection bind:active={intersection} class="grid items-center gap-8 md:grid-cols-2 xl:gap-x-24">
	<div class="transition duration-1000" class:opacity-0={!intersection} class:-translate-x-24={!intersection}>
		<Img class="w-full rounded" src={img} />
	</div>
	<div class="transition duration-1000" class:opacity-0={!intersection} class:translate-x-24={!intersection}>
		<slot />
	</div>
</Intersection>
