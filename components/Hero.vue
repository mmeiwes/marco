<template>
	<div>
		<!-- Hero card -->
		<div class="relative">
			<div
				class="absolute inset-x-0 bottom-0 h-1/2 bg-hero"
			></div>
			<div
				class="
					absolute
					inset-x-0
					bottom-0
					h-1/2
					z-10
					backdrop-filter backdrop-blur-lg
				"
			></div>
			<div
				class="
					absolute
					inset-x-0
					bottom-0
					h-1/2
					z-10
					opacity-80
					bg-gradient-to-r
					from-gray-900
					via-gray-900
					to-orange-700
				"
			></div>
			<div
				class="
					flex
					z-30
					justify-center
					items-center
					h-36
					w-full
					absolute
					bottom-0
				"
			>
			</div>
			<div
				class="
					lg:pb-16
					h-hero
					max-w-7xl
					mx-auto
					py-8
					flex flex-col
					justify-center
				"
			>
				<h2
					class="
						-mt-2
						px-4
						pt-1
						xl:px-0
						font-display
						text-5xl
						lg:text-6xl
						tracking-tighter
						uppercase
						mb-2
						bg-clip-text
						text-transparent
						bg-gradient-to-r
						from-orange-300
						to-orange-500
					"
				>
					Ein neues Lebensgefühl durch Bewegung.
				</h2>
				<h1
					class="
						px-4
						xl:px-0
						block
						font-bold
						uppercase
						font-display
						text-2xl
						mb-2
						text-gray-600
						bg-clip-text
						text-transparent
						bg-gradient-to-r
						from-orange-300
						to-orange-500
					"
				>
					Personal Training in Hövelhöf und Kreis Paderborn
				</h1>
				<div class="relative w-full">
					<div
						class="
							absolute
							inset-0
							h-full
							w-full
							lg:p-0
							cursor-pointer
						"
					>
						<img
							@click="enableVideo"
							class="
								relative
								h-full
								w-full
								object-cover
								z-20
							"
							src="/img/Hero.jpg"
							alt="People working on laptops"
						/>
					</div>
					<div
						class="
							relative
							px-4
							py-40
							lg:px-8
							mt-60
							flex
							justify-center
						"
					>
						<button
							@click="enableVideo"
							type="button"
							class="
								absolute
								left-10
								z-30
								bottom-1/2
								transform
								-translate-y-20
								h-28
								w-28
								block
								bg-white
								rounded-full
								overflow-hidden
								focus:outline-none
								focus:ring-2
								focus:ring-offset-2
								focus:ring-orange-500
							"
						>
							<span class="sr-only"
								>Video anschauen und mehr erfahren</span
							>
							<div
								class="
									absolute
									z-30
									inset-0
									w-full
									h-full
									flex
									items-center
									justify-center
								"
								aria-hidden="true"
							>
								<svg
									class="h-20 w-20 text-gray-800"
									fill="currentColor"
									viewBox="0 0 84 84"
								>
									<circle
										opacity="0.9"
										cx="42"
										cy="42"
										r="0"
									/>
									<path
										d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
									/>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>

		<VideoModal
			@close="videoIsEnabled = false"
			:open="videoIsEnabled"
		>
			<!-- 	<video v-if="videoIsEnabled" class="relative z-50" id="vid" ref="vid">
						<source src="/video/featured.mp4" type="video/mp4" />
						Your browser does not support HTML video.
					</video> -->
			<div
				class="
					z-40
					relative
					w-screen
					h-screen
					flex
					items-center
					justify-center
					p-8
				"
			>
				<iframe
					src="https://player.vimeo.com/video/643632059?h=87e3a81d89&autoplay=1&portrait=0"
					style="
						top: 0;
						width: 90%;
						height: 90%;
						z-index: 40;
					"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					allowfullscreen
				></iframe
			></div>
		</VideoModal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			videoIsEnabled: false,
		};
	},
	methods: {
		enableVideo() {
			this.videoIsEnabled = true;

			this.$nextTick(function () {
				if (window.document && this.$refs.vid) {
					console.log(this.$refs.vid);
					this.$refs.vid.play();
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped></style>
