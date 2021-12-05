<template>
	<footer
		class="
			bg-gray-900
			text-white
			mt-auto
			border-t border-gray-500
		"
	>
		<div
			class="
				max-w-7xl
				mx-auto
				py-12
				px-4
				sm:px-6
				md:flex md:items-center md:justify-center
				lg:px-8
			"
		>
			<div class="flex justify-center space-x-6 md:order-2">
				<nuxt-link
					to="/impressum"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Impressum</span>Impressum
				</nuxt-link>

				<nuxt-link
					to="/datenschutz"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Datenschutz</span
					>Datenschutz
				</nuxt-link>
			</div>
		</div>
	</footer>
</template>
