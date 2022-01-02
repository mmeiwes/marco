<template>
	<header>
		<div class="relative bg-white">
			<div
				class="
					flex
					justify-between
					items-center
					max-w-7xl
					mx-auto
					py-6
					md:justify-start md:space-x-10
				"
			>
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<nuxt-link
						to="/"
						class="
							text-thin
							font-display
							text-2xl
							tracking-tight
							text-gray-700
							uppercase
						"
						href="#"
					>
						<span class="sr-only">Marco Meiwes</span>
						Marco Meiwes
					</nuxt-link>
				</div>
				<div class="-mr-2 -my-2 md:hidden">
					<button
						@click="mobileMenuIsOpen = true"
						type="button"
						class="
							bg-white
							rounded-md
							p-2
							inline-flex
							items-center
							justify-center
							text-gray-400
							hover:text-gray-500 hover:bg-gray-100
							focus:outline-none
							focus:ring-2
							focus:ring-inset
							focus:ring-indigo-500
						"
						aria-expanded="false"
					>
						<span class="sr-only">Open menu</span>
						<!-- Heroicon name: outline/menu -->
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
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<nav class="hidden md:flex space-x-10">
					<a
						href="#about"
						class="
							text-base
							font-medium
							text-gray-500
							hover:text-gray-900
						"
					>
						Über mich
					</a>

					<a
						href="#testimonials"
						class="
							text-base
							font-medium
							text-gray-500
							hover:text-gray-900
						"
					>
						Kundenmeinungen
					</a>

					<a
						href="#faq"
						class="
							text-base
							font-medium
							text-gray-500
							hover:text-gray-900
						"
					>
						FAQ
					</a>
				</nav>
				<div
					class="
						hidden
						md:flex
						items-center
						justify-end
						md:flex-1
						space-x-2
						lg:w-0
					"
				>
					<a
						href="tel:+4915126620116"
						class="
							inline-flex
							bg-gray-800 bg-origin-border
							h-10
							w-10
							border border-transparent
							text-base
							font-medium
							shadow-sm
							text-white
							rounded-full
							justify-center
							items-center
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
							/>
						</svg>
					</a>
					<a
						href="mailto:marco-meiwes@web.de"
						class="
							inline-flex
							bg-orange-500 bg-origin-border
							h-10
							w-10
							border border-transparent
							text-base
							font-medium
							shadow-sm
							text-white
							rounded-full
							justify-center
							items-center
						"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
			<div
				class="
					absolute
					z-30
					top-0
					inset-x-0
					p-2
					transition
					transform
					origin-top-right
					md:hidden
				"
				:class="{
					hidden: !mobileMenuIsOpen,
				}"
			>
				<div
					class="
						rounded-lg
						shadow-lg
						divide-y-2 divide-gray-50
						bg-white
					"
				>
					<div class="pt-5 pb-6 px-5">
						<div class="flex items-center justify-between">
							<div class="font-display">MARCO MEIWES</div>
							<div class="-mr-2">
								<button
									@click="mobileMenuIsOpen = false"
									type="button"
									class="
										bg-white
										rounded-md
										p-2
										inline-flex
										items-center
										justify-center
										text-gray-400
										hover:text-gray-500 hover:bg-gray-100
										focus:outline-none
										focus:ring-2
										focus:ring-inset
										focus:ring-indigo-500
									"
								>
									<span class="sr-only">Menü schießen</span>
									<!-- Heroicon name: outline/x -->
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
							</div>
						</div>
					</div>
					<div class="py-6 px-5">
						<div
							@click="mobileMenuIsOpen = false"
							class="grid grid-cols-2 gap-4"
						>
							<a
								href="#about"
								class="
									text-base
									font-medium
									text-gray-500
									hover:text-gray-900
								"
							>
								Über mich
							</a>

							<a
								href="#testimonials"
								class="
									text-base
									font-medium
									text-gray-500
									hover:text-gray-900
								"
							>
								Kundenmeinungen
							</a>

							<a
								href="#faq"
								class="
									text-base
									font-medium
									text-gray-500
									hover:text-gray-900
								"
							>
								FAQ
							</a>
						</div>
						<div class="mt-6">
							<a
								href="mailto:marco-meiwes@web.de"
								class="
									inline-flex
									bg-gradient-to-r
									from-yellow-500
									to-red-700
									bg-origin-border
									px-4
									py-2
									border border-transparent
									text-base
									font-medium
									shadow-sm
									rounded-full
									text-white
									hover:from-purple-700 hover:to-indigo-700
								"
							>
								Jetzt kontaktieren
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			mobileMenuIsOpen: false,
		};
	},
};
</script>
