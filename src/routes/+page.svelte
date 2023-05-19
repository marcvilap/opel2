<script lang="ts">
	// @ts-ignore
	import bg01 from '$lib/assets/images/bg-01.jpg?w=1920&format=jpg;avif&as=metadata'
	// @ts-ignore
	import bg02 from '$lib/assets/images/bg-02.jpg?w=1920&format=jpg;avif&as=metadata'
	// @ts-ignore
	import bg03 from '$lib/assets/images/bg-03.jpg?w=1920&format=jpg;avif&as=metadata'
	// @ts-ignore
	import bg04 from '$lib/assets/images/bg-04.jpg?w=1920&format=jpg;avif&as=metadata'
	// @ts-ignore
	import img01 from '$lib/assets/images/img-01.jpg?w=744&h=496&format=jpg;avif&as=metadata'
	// @ts-ignore
	import img02 from '$lib/assets/images/img-02.jpg?w=744&h=496&format=jpg;avif&as=metadata'
	// @ts-ignore
	import img03 from '$lib/assets/images/img-03.jpg?w=744&h=496&format=jpg;avif&as=metadata'
	// @ts-ignore
	import img04 from '$lib/assets/images/img-04.jpg?w=744&h=496&format=jpg;avif&as=metadata'
	// @ts-ignore
	import img05 from '$lib/assets/images/img-05.jpg?w=744&h=496&format=jpg;avif&as=metadata'
	// @ts-ignore
	import img06 from '$lib/assets/images/img-06.jpg?w=1920&h=860&format=jpg;avif&as=metadata'
	// @ts-ignore
	import img07 from '$lib/assets/images/img-07.jpg?w=1920&h=1080&format=jpg;avif&as=metadata'
	// @ts-ignore
	import auto01 from '$lib/assets/images/auto-01.png?w=1152&format=jpg;avif&as=metadata'
	import Img from '$lib/components/Img.svelte'
	import BlockMap from '$lib/components/BlockMap.svelte'
	import BlockImage from '$lib/components/BlockImage.svelte'
	import Logo from '$lib/components/Logo.svelte'
	import Intersection from '$lib/components/Intersection.svelte'
	import { Lottie } from 'lottie-svelte'
	let intersection01 = false
	let intersection02 = false
	let intersection03 = false
	let intersection04 = false
	let intersection05 = false
</script>

<main>
	<div class="relative overflow-hidden bg-[#8D9359] pb-24 pt-16">
		<Img class="absolute left-0 top-14 w-full" src={bg01} />
		<div class="container relative text-center">
			<a class="inline-flex flex-col items-center text-xs" href="/">
				<strong>Experiencias por carretera</strong>
				<span class="mb-2">Un proyecto de</span>
				<Logo />
			</a>
			<Intersection bind:active={intersection01}>
				<div class="transition duration-1000" class:opacity-0={!intersection01} class:translate-y-24={!intersection01}>
					<h1 class="mx-auto mt-8 max-w-4xl font-serif text-4xl md:text-7xl lg:text-8xl lg:leading-[.8]">
						Aventuras naturales únicas
					</h1>
					<h2 class="font-serif text-3xl md:text-6xl lg:text-7xl">(sobre ruedas)</h2>
					<h3
						class="font-cursive text-6xl text-[#DCFF00] md:text-8xl lg:-mb-8 lg:-mt-16 lg:text-[10rem] lg:leading-none"
					>
						para vivir en España
					</h3>
					<p class="mx-auto max-w-lg">
						España, por su enorme biodiversidad, es un destino perfecto para explorar su sobrecogedora belleza o ‘cazar’
						fenómenos meteorológicos naturales. ¡Prepárate para un viaje lleno de emociones y descubrimientos al
						volante!
					</p>
				</div>
			</Intersection>
			<Lottie class="mx-auto my-8 w-6" path="/down.json" />
			<Intersection bind:active={intersection02}>
				<div class="transition duration-1000" class:translate-x-96={!intersection02}>
					<Img class="mb-20 ml-auto w-[48rem] lg:mt-64" src={auto01} />
				</div>
			</Intersection>
			<Intersection bind:active={intersection03}>
				<h4
					class="mx-auto max-w-4xl font-serif text-2xl text-[#DEDEDE] transition duration-1000 md:text-3xl"
					class:opacity-0={!intersection03}
					class:translate-y-24={!intersection03}
				>
					Para una gran escapada, necesitas el mejor aliado. Si esta primavera y verano, quieres sentirte un explorador
					de altura, el nuevo <span class="text-[#DCFF00] underline">Opel Mokka Black Edition</span> es para ti. Este SUV
					elegante y potente cuenta con un diseño moderno, alta tecnología en el interior y exterior y un motor de hasta
					136CV para surcar nuestra geografía con estilo y comodidad. ¡Vamos a por ello!
				</h4>
			</Intersection>
		</div>
	</div>

	<div class="relative overflow-hidden py-24">
		<div class="container relative">
			<BlockMap map={1} title="Picos de Europa: historia y naturaleza entre tres regiones">
				<p class="mb-4">
					Si eres de los que se queda embobado mirando un paisaje, no puedes perderte los <strong
						>Picos de Europa</strong
					>. Este parque natural, enclavado entre Asturias, León y Cantabria, es un paraíso para los amantes del
					senderismo, la flora y fauna y la fotografía.
				</p>
				<p>
					Las cumbres más altas de la Cordillera Cantábrica se encuentran en el entorno donde se empezó a gestar la
					historia de Asturias. Sus plegamientos y glaciaciones han creado un <strong
						>paisaje esculpido por el hielo y el efecto de las aguas sobre la piedra caliza</strong
					>.
				</p>
			</BlockMap>
			<BlockImage img={img01}>
				<p>
					Conduce por sinuosas carreteras rodeadas de deslumbrantes montañas y respira el aire fresco de la naturaleza.
					Podrás explorar senderos escarpados que te llevarán a cascadas cristalinas y a lagos de aguas turquesas.
					¡Prepara tu cámara para capturar una belleza de lo más salvaje!
				</p>
			</BlockImage>
		</div>
	</div>

	<div class="relative overflow-hidden bg-[#DEDCDF] py-24">
		<Img class="absolute left-0 top-0 w-full" src={bg02} />
		<div class="container relative">
			<BlockMap map={2} title="Costa de la luz: un tesoro codiciado durante milenios">
				<p class="mb-4">
					Su situación, con salida al Atlántico, y su magnífico clima, la convirtieron en el capricho de fenicios,
					romanos, visigodos o árabes durante siglos. Muchos son los atractivos que se suceden en los <strong
						>200 kilómetros de la más fina y dorada arena de la península</strong
					>.
				</p>
				<p>
					Chipiona, Rota, El Puerto de Santa María, Puerto Real, Chiclana, Conil, Barbate y Tarifa. Pueblos con gran
					encanto escoltados por la grandeza del <strong>Parque Nacional de Doñana</strong>, la más importante Reserva
					Biológica de España.
				</p>
			</BlockMap>
			<BlockImage img={img02}>
				<p>
					La pintoresca carretera de la Costa de La luz te conducirá a más de <strong
						>200 kilómetros de playas vírgenes de arena dorada y aguas cristalinas</strong
					>. Aquí, podrás disfrutar del sol y las olas, practicar deportes acuáticos como el surf, o simplemente
					relajarte bajo una sombrilla mientras saboreas un delicioso pescado o marisco.
				</p>
			</BlockImage>
		</div>
	</div>

	<div class="relative overflow-hidden bg-[#234E75] py-24 text-white">
		<Img class="absolute left-0 top-0 w-full" src={bg03} />
		<div class="container relative">
			<BlockMap map={3} title="Aragón, “tierra de rayos”">
				<p class="mb-4">
					Si esta primavera o verano, buscas algo fuera de lo común, ¿qué te parece <strong
						>cazar fenómenos meteorológicos</strong
					>? España es famosa por sus tormentas eléctricas, y una de las mejores zonas para observarlas es la región de
					Aragón, conocida como la “tierra de los rayos”.
				</p>
				<p>
					Conduce por las carreteras rurales de esta región y mantén los ojos bien abiertos para disfrutar del
					<strong>espectáculo de luces en el cielo</strong>. Si tienes suerte, podrás capturar fotografías
					impresionantes de relámpagos iluminando el paisaje nocturno. ¡Prepara tu cámara de nuevo y prepárate para
					cazar rayos en la tierra de los fenómenos meteorológicos!
				</p>
			</BlockMap>
			<BlockImage img={img03}>
				<p>
					Otro rincón emocionante es la <strong>provincia de Huesca</strong>. Sus carreteras serpenteantes te llevarán a
					impresionantes desfiladeros y gargantas talladas por los ríos. Cuando hagas una parada, explora el entorno a
					pie, disfrutando el senderismo o incluso el barranquismo. Sumérgete en piscinas naturales de agua cristalina y
					déjate maravillar por la belleza de la naturaleza en estado puro.
				</p>
			</BlockImage>
		</div>
	</div>

	<div class="relative overflow-hidden py-24">
		<div class="container relative">
			<BlockMap map={4} title="Los imponentes Pirineos">
				<p>
					Nuestra siguiente parada nos lleva a la impresionante región de los Pirineos. <strong
						>Conduce tu Opel Mokka Black Edition</strong
					> por las serpenteantes carreteras que atraviesan majestuosas montañas y valles pintorescos. Aquí, podrás disfrutar
					de una combinación perfecta de paisajes de ensueño y emocionantes actividades al aire libre.
				</p>
			</BlockMap>
			<BlockImage img={img04}>
				<p>
					Desde el senderismo en verano hasta el esquí en invierno, <strong
						>los Pirineos tienen algo para todos los gustos</strong
					>. Explora pueblos encantadores como Jaca y disfruta de la deliciosa gastronomía local. Y cuando el cansancio
					apriete, descansa en la comodidad de los asientos ergonómicos en negro del Opel Mokka Black Edition. ¡Con este
					SUV, cada viaje será una experiencia inolvidable!
				</p>
			</BlockImage>
		</div>
	</div>

	<div class="relative overflow-hidden py-24">
		<Img class="absolute left-0 top-0 w-full" src={bg04} />
		<div class="container relative">
			<BlockMap map={5} title="Rias Baixas y O Courel: descubre la diversidad gallega">
				<p>
					La última escapada nos lleva a la exuberante y misteriosa Galicia, tierra llena de magia y encanto. Visita las
					icónicas Rías Baixas, donde encontrarás playas de arena blanca y aguas cristalinas, además de una gran
					variedad de mariscos frescos para disfrutar.
				</p>
			</BlockMap>
			<BlockImage img={img05}>
				<p class="mb-4">
					Continúa tu aventura hacia el interior y explora los bosques místicos de la <strong>Sierra de O Courel</strong
					>, donde caminos ocultos te llevarán a cascadas secretas y <strong>antiguos castros celtas</strong>.
				</p>
				<p>
					El sistema de infoentretenimiento del Opel Mokka Black Edition, con su pantalla táctil de alta resolución, te
					mantendrá conectado y entretenido durante todo el viaje.
				</p>
			</BlockImage>
		</div>
	</div>

	<Img class="w-full" src={img06} />
	<Img class="w-full" src={img07} />

	<div class="relative overflow-hidden pb-24">
		<Intersection bind:active={intersection04} class="container relative">
			<h2
				class="mx-auto max-w-4xl text-center font-serif text-2xl transition duration-1000 md:text-3xl"
				class:opacity-0={!intersection04}
				class:translate-y-24={!intersection04}
			>
				Además, su diseño sofisticado y potencia convergen perfectamente con los impresionantes destinos naturales que
				te ofrecemos para esta temporada. Ya sea explorando los Picos de Europa, <strong class="text-[#8D9359]"
					>cazando tormentas eléctricas en Aragón</strong
				>
				o adentrándote en los cañones de Guara, este SUV te llevará a donde quieras ir con estilo y seguridad.
			</h2>
		</Intersection>
	</div>

	<div class="relative overflow-hidden bg-[#BCD2F4] pt-24">
		<Intersection bind:active={intersection05} class="container relative">
			<h2
				class="mx-auto max-w-4xl text-center font-serif text-4xl transition duration-1000 md:text-5xl"
				class:opacity-0={!intersection05}
				class:translate-y-24={!intersection05}
			>
				¡El mundo está listo para que lo explores, así que disfruta de tu viaje en este SUV excepcional!
			</h2>
		</Intersection>
	</div>
</main>
