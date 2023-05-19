<script lang="ts">
	import type { OutputMetadata } from '$lib/types'
	let className = ''
	export { className as class }
	export let src: OutputMetadata[]
	export let alt = ''
</script>

<picture>
	<source srcset={src[1].src} type="image/{src[1].format}" />
	<img
		class={className}
		src={src[0].src}
		width={src[0].width}
		height={src[0].height}
		loading="lazy"
		decoding="async"
		{alt}
	/>
</picture>
