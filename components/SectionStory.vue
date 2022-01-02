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
				class="
					lg:mt-0
					pl-16
					flex
					justify-center
					order-first
				"
			>
				<div
					class="
						pl-24
						rounded-lg
						lg:px-0 lg:m-0 lg:relative lg:h-full
					"
				>
					<img
						class="
							w-full
							lg:left-0
							h-72
							lg:h-96
							sm:w-auto
							max-w-none
						"
						:src="src"
						:alt="Handstand"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
};</script
>>
