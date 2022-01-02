<template>
	<div class="relative lg:py-32 flex justify-center">
		<div
			class="
				md:mx-auto md:max-w-7xl md:px-8
				grid
				md:grid-cols-2
			"
		>
			<div
				class="
					lg:max-w-md
					px-4
					mx-auto
					lg:py-16 lg:mx-0 lg:px-0
					order-last
					md:order-first
				"
			>
				<slot name="left"></slot>
			</div>

			<div
				class="lg:mt-0 px-4 flex justify-center order-first"
			>
				<slot name="right"></slot>
			</div>
		</div>
	</div>
</template>
