<template>
	<div class="pt-6">
		<dt class="text-lg">
			<!-- Expand/collapse question button -->
			<button
				@click="toggleQuestion"
				type="button"
				class="
					text-left
					w-full
					flex
					justify-between
					items-start
					text-gray-400
				"
				aria-controls="faq-0"
				aria-expanded="false"
			>
				<span class="font-medium text-white">
					{{ question.question }}
				</span>
				<span class="ml-6 h-7 flex items-center">
					<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
					<svg
						class="rotate-0 h-6 w-6 transform"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</span>
			</button>
		</dt>
		<dd
			v-show="questionIsOpen || index === 0"
			class="mt-2 pr-12"
			id="faq-0"
		>
			<div
				class="text-base text-gray-300"
				v-html="question.answer"
			>
			</div>
		</dd>
	</div>
</template>

<script>
export default {
	props: {
		question: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			questionIsOpen: false,
		};
	},
	methods: {
		toggleQuestion() {
			this.questionIsOpen = !this.questionIsOpen;
		},
	},
};
</script>
