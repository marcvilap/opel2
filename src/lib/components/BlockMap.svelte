<script lang="ts">
	import map01 from '$lib/assets/images/map-01.svg'
	import map02 from '$lib/assets/images/map-02.svg'
	import map03 from '$lib/assets/images/map-03.svg'
	import map04 from '$lib/assets/images/map-04.svg'
	import map05 from '$lib/assets/images/map-05.svg'
	// @ts-ignore
	import pointer from '$lib/assets/images/pointer.png?w=48&format=png;avif&as=metadata'
	// @ts-ignore
	import auto02 from '$lib/assets/images/auto-02.png?w=192&format=png;avif&as=metadata'
	// @ts-ignore
	import auto03 from '$lib/assets/images/auto-03.png?w=192&format=png;avif&as=metadata'
	// @ts-ignore
	import auto04 from '$lib/assets/images/auto-04.png?w=192&format=png;avif&as=metadata'
	import Img from '$lib/components/Img.svelte'
	import Intersection from '$lib/components/Intersection.svelte'
	export let title: string
	export let map: number
	let intersection = false
</script>

<Intersection bind:active={intersection} class="mb-24 grid items-center gap-8 md:grid-cols-2 xl:gap-x-24">
	<div class="transition duration-1000" class:opacity-0={!intersection} class:-translate-x-24={!intersection}>
		<h2 class="mb-8 font-serif text-4xl lg:text-[2.5rem] lg:leading-tight">
			{title}
		</h2>
		<slot />
	</div>
	<div>
		{#if map === 1}
			<div class="relative mx-auto max-w-[31rem] md:-mb-8">
				<img src={map01} loading="lazy" decoding="async" alt="" />
				<div
					class="rebote absolute left-[40%] top-[6%] w-[6.453%] transition duration-1000"
					class:opacity-0={!intersection}
					class:-translate-y-48={!intersection}
				>
					<Img class="w-full" src={pointer} />
				</div>
				<div
					class="absolute left-[45%] top-[11%] w-[25.808%] transition duration-1000"
					class:opacity-0={!intersection}
					class:scale-150={!intersection}
					class:translate-x-24={!intersection}
				>
					<Img class="w-full" src={auto02} />
				</div>
			</div>
		{:else if map === 2}
			<div class="relative mx-auto max-w-[31rem]">
				<img src={map02} loading="lazy" decoding="async" alt="" />
				<div
					class="rebote absolute left-[15%] top-[58%] w-[6.453%] transition duration-1000"
					class:opacity-0={!intersection}
					class:-translate-y-48={!intersection}
				>
					<Img class="w-full" src={pointer} />
				</div>
				<div
					class="rebote absolute left-[20%] top-[71%] w-[6.453%] transition duration-1000"
					class:opacity-0={!intersection}
					class:-translate-y-48={!intersection}
					class:delay-150={intersection}
				>
					<Img class="w-full" src={pointer} />
				</div>
				<div
					class="rebote absolute left-[28%] top-[83%] w-[6.453%] transition duration-1000"
					class:opacity-0={!intersection}
					class:-translate-y-48={!intersection}
					class:delay-300={intersection}
				>
					<Img class="w-full" src={pointer} />
				</div>
				<div
					class="absolute left-[45%] top-[62%] w-[25.808%] transition duration-1000"
					class:opacity-0={!intersection}
					class:translate-y-24={!intersection}
					class:translate-x-48={!intersection}
				>
					<Img class="w-full" src={auto03} />
				</div>
			</div>
		{:else if map === 3}
			<div class="relative mx-auto max-w-[21rem] md:-mb-16">
				<img src={map03} loading="lazy" decoding="async" alt="" />
				<div
					class="rebote absolute left-[54%] top-[20%] w-[9.525%] transition duration-1000"
					class:opacity-0={!intersection}
					class:-translate-y-48={!intersection}
				>
					<Img class="w-full" src={pointer} />
				</div>
				<div
					class="absolute left-[7%] top-[62%] w-[38.098%] transition duration-1000"
					class:opacity-0={!intersection}
					class:scale-50={!intersection}
					class:-translate-x-24={!intersection}
				>
					<Img class="w-full" src={auto04} />
				</div>
			</div>
		{:else if map === 4}
			<div class="relative mx-auto max-w-[31rem] md:-mb-32">
				<img src={map04} loading="lazy" decoding="async" alt="" />
				<div
					class="rebote absolute left-[51%] top-[8%] w-[6.453%] transition duration-1000"
					class:opacity-0={!intersection}
					class:-translate-y-48={!intersection}
				>
					<Img class="w-full" src={pointer} />
				</div>
				<div
					class="absolute left-[54%] top-[20%] w-[25.808%] transition duration-1000"
					class:opacity-0={!intersection}
					class:scale-150={!intersection}
					class:translate-x-24={!intersection}
				>
					<Img class="w-full" src={auto02} />
				</div>
			</div>
		{:else if map === 5}
			<div class="relative mx-auto max-w-[23rem] md:-mb-24">
				<img src={map05} loading="lazy" decoding="async" alt="" />
				<div
					class="rebote absolute left-[19%] top-[56%] w-[8.697%] transition duration-1000"
					class:opacity-0={!intersection}
					class:-translate-y-48={!intersection}
				>
					<Img class="w-full" src={pointer} />
				</div>
				<div
					class="absolute left-[30%] top-[63%] w-[34.784%] transition duration-1000"
					class:opacity-0={!intersection}
					class:translate-y-24={!intersection}
					class:translate-x-48={!intersection}
				>
					<Img src={auto03} />
				</div>
			</div>
		{/if}
	</div>
</Intersection>
