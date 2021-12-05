<template>
	<div
		v-if="showModal"
		class="
			fixed
			inset-0
			flex
			items-center
			justify-center
			p-4
			lg:p-16
			z-50
		"
	>
		<button
			tabindex="0"
			@click="$emit('close')"
			type="button"
			class="
				absolute
				right-0
				top-0
				p-4
				rounded-md
				inline-flex
				items-center
				justify-center
				text-white
				hover:text-gray-100
				z-50
			"
		>
			<span class="sr-only">Video schießen</span>
			<svg
				class="h-6 w-6"
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
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
		<transition
			@before-leave="backdropLeaving = true"
			@after-leave="backdropLeaving = false"
			enter-active-class="transition-all transition-fast ease-out-quad"
			leave-active-class="transition-all transition-medium ease-in-quad"
			enter-class="opacity-0"
			enter-to-class="opacity-100"
			leave-class="opacity-100"
			leave-to-class="opacity-0"
			appear
		>
			<div v-if="showBackdrop">
				<div
					class="
						absolute
						inset-0
						bg-gray-900
						opacity-90
						z-40
					"
					@click="close"
				></div>
			</div>
		</transition>

		<transition
			@before-leave="cardLeaving = true"
			@after-leave="cardLeaving = false"
			enter-active-class="transition-all transition-fast ease-out-quad"
			leave-active-class="transition-all transition-medium ease-in-quad"
			enter-class="opacity-0 scale-70"
			enter-to-class="opacity-100 scale-100"
			leave-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-70"
			appear
		>
			<div v-if="showContent" class="relative p-4 lg:p-16">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: ['open'],
	data() {
		return {
			showModal: false,
			showBackdrop: false,
			showContent: false,
			backdropLeaving: false,
			cardLeaving: false,
		};
	},
	mounted() {
		const onEscape = (e) => {
			if (this.open && e.keyCode === 27) {
				this.close();
			}
		};
		if (document) {
			document.addEventListener('keydown', onEscape);
			this.$once('hook:destroyed', () => {
				document.removeEventListener('keydown', onEscape);
			});
		}
	},
	watch: {
		open: {
			handler: function (newValue) {
				if (newValue) {
					this.show();
				} else {
					this.close();
				}
			},
			immediate: true,
		},
		leaving(newValue) {
			if (newValue === false) {
				this.showModal = false;
				this.$emit('close');
			}
		},
	},
	computed: {
		leaving() {
			return this.backdropLeaving || this.cardLeaving;
		},
	},
	methods: {
		show() {
			this.showModal = true;
			this.showBackdrop = true;
			this.showContent = true;
		},
		close() {
			this.showBackdrop = false;
			this.showContent = false;
		},
	},
};
</script>
