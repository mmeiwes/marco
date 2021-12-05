<template>
	<div class="flex flex-col">
		<main class="h-full self-stretch mt-auto">
			<div>
				<!-- Hero card -->
				<div class="relative">
					<div
						class="
							absolute
							inset-x-0
							bottom-0
							h-1/2
							bg-gray-900
						"
					></div>
					<div
						class="
							flex
							justify-center
							items-center
							h-36
							w-full
							absolute
							bottom-0
						"
					>
						<h1
							class="
								text-center
								block
								font-bold
								uppercase
								font-display
								text-2xl text-white
								mb-2
							"
						>
							<span class="text-orange-300"
								>Personal Training</span
							>
							in Hövelhöf und Kreis Paderborn
						</h1>
					</div>
					<div
						class="
							lg:pb-16
							h-hero
							max-w-7xl
							mx-auto
							sm:px-6
							lg:px-8
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
								lg:px-0
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
						<div
							class="
								relative
								lg:rounded-md
								overflow-hidden
								w-full
							"
						>
							<div
								class="
									absolute
									inset-0
									h-full
									w-full
									p-4
									lg:p-0
									rounded-md
									cursor-pointer
								"
							>
								<img
									@click="enableVideo"
									class="
										h-full
										w-full
										object-cover
										rounded-md
										ç
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
										focus:ring-indigo-800
									"
								>
									<span class="sr-only"
										>Video anschauen und mehr erfahren</span
									>
									<div
										class="
											absolute
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
						></iframe></div
					><script src="https://player.vimeo.com/api/player.js"></script>
				</VideoModal>
			</div>

			<div
				class="
					max-w-7xl
					mx-auto
					px-4
					sm:px-6
					lg:px-8
					relative
					z-10
					my-16
				"
			>
			</div>

			<section class="space-y-8 my-32" id="about">
				<div class="relative">
					<div
						class="
							md:mx-auto md:max-w-5xl md:px-8
							grid
							md:grid-cols-2 md:grid-flow-col-dense
						"
					>
						<div
							class="
								px-4
								lg:max-w-md
								mx-auto
								lg:py-16 lg:mx-0 lg:px-0
								order-last
								md:order-first
							"
						>
							<div class="max-w-md">
								<h2
									class="
										text-3xl
										mt-8
										font-display font-extrabold
										text-gray-900
										uppercase
									"
								>
									Marco Meiwes
									<span
										class="
											bg-clip-text
											text-transparent
											bg-gradient-to-r
											from-orange-300
											to-orange-500
											block
										"
										>Personal Trainer</span
									>
								</h2>
								<p class="mt-4 text-lg text-gray-500">
									Hey, ich bin Marco und ich bin Personal
									Trainer aus Hovelhöf im Kreis Paderborn.
									Ich helfe Menschen sich in ihrem Körper
									wohlzufühlen.
								</p>
							</div>
						</div>
						<div
							class="
								lg:mt-0
								px-4
								lg:pr-36
								flex
								justify-center
								order-first
							"
						>
							<div
								class="
									rounded-lg
									lg:px-0 lg:m-0 lg:relative lg:h-full
									bg-red-400
								"
							>
								<img
									class="
										w-full
										lg:absolute
										rounded-md
										h-full
										lg:left-0
										lg:h-96
										lg:w-auto
										lg:max-w-none
									"
									src="/img/headshot.jpg"
									alt="Handstand"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="relative">
					<div
						class="
							md:mx-auto
							md:max-w-5xl
							md:px-8
							md:grid
							md:grid-cols-2
							md:grid-flow-col-dense
						"
					>
						<div
							class="
								lg:mt-0
								px-4
								flex
								justify-center
								md:justify-start
								items-center
							"
						>
							<div
								class="
									lg:pl-6
									rounded-lg
									lg:px-0 lg:m-0 lg:relative
								"
							>
								<img
									class="
										w-full
										lg:absolute
										lg:transform
										lg:-translate-y-1/2
										rounded-md
										lg:h-96 lg:w-auto lg:max-w-none
									"
									src="/img/movement.jpg"
									alt="Inbox user interface"
								/>
							</div>
						</div>
						<div
							class="
								max-w-md
								mx-auto
								lg:py-16 lg:mx-0 lg:px-0
							"
						>
							<p class="mt-4 text-lg text-gray-500">
								Was kann der Körper und was kann er nicht?
								Wie frei kannst du dich in deinem Körper
								bewegen?
							</p>
							<p class="font-bold my-8 text-lg"
								>Hier setzt mein Training an.</p
							>
							<p class="mt-2 text-lg text-gray-500">
								Wer einen funktionalen, beweglichen und
								verletzungsfreien Körper haben möchte ist
								bei mir an der richtigen Adresse.
							</p>
						</div>
					</div>
				</div>
				<div class="relative">
					<div
						class="
							md:mx-auto md:max-w-5xl md:px-8
							grid
							md:grid-cols-2 md:grid-flow-col-dense
						"
					>
						<div
							class="
								px-4
								lg:max-w-md
								mx-auto
								lg:py-16 lg:mx-0 lg:px-0
								order-last
								md:order-first
							"
						>
							<div class="max-w-md">
								<h2
									class="
										text-3xl
										mt-8
										font-display font-extrabold
										text-gray-900
										uppercase
									"
								>
									Über mich
								</h2>
								<p class="mt-4 text-lg text-gray-500">
									Bewegung ist mein Leben. Seit 20 Jahren
									spiele ich Badminton im Verein und bin
									mittlerweile seit 10 Jahren als
									Badmintontrainer aktiv. Nebenbei habe ich
									auf meine körperliche Fitness immer großen
									Wert gelegt.
								</p>
							</div>
						</div>
						<div
							class="
								lg:mt-0
								px-4
								lg:pr-36
								flex
								justify-center
								order-first
							"
						>
							<div
								class="
									rounded-lg
									lg:px-0 lg:m-0 lg:relative lg:h-full
									bg-red-400
								"
							>
								<img
									class="
										w-full
										lg:absolute
										rounded-md
										h-full
										lg:left-0
										lg:h-96
										lg:w-auto
										lg:max-w-none
									"
									src="/img/dance.jpg"
									alt="Training"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="relative">
					<div
						class="
							md:mx-auto
							md:max-w-5xl
							md:px-8
							md:grid
							md:grid-cols-2
							md:grid-flow-col-dense
						"
					>
						<div
							class="
								lg:mt-0
								px-4
								flex
								justify-center
								md:justify-start
								items-center
							"
						>
							<div
								class="
									lg:pl-6
									rounded-lg
									lg:px-0 lg:m-0 lg:relative
								"
							>
								<img
									class="
										w-full
										lg:absolute
										lg:transform
										lg:-translate-y-1/2
										rounded-md
										lg:h-96 lg:w-auto lg:max-w-none
									"
									src="/img/training.jpg"
									alt="Inbox user interface"
								/>
							</div>
						</div>
						<div
							class="
								max-w-md
								mx-auto
								lg:py-16 lg:mx-0 lg:px-0
							"
						>
							<p class="mt-4 text-lg text-gray-500">
								Der Sport hat mir das nötige Vertrauen in
								mich selbst gegeben und mir gezeigt, wozu
								mein Körper fähig ist.
							</p>
							<p class="mt-4 text-lg text-gray-500">
								Während meines Sportstudiums veränderte sich
								mein Training von einem fitnessorientierten
								zu einem vielseitigen und
								bewegungsorientierten Training.
							</p>
						</div>
					</div>
				</div>
				<div class="relative">
					<div
						class="
							md:mx-auto md:max-w-5xl md:px-8
							grid
							md:grid-cols-2 md:grid-flow-col-dense
						"
					>
						<div
							class="
								px-4
								lg:max-w-md
								mx-auto
								lg:py-16 lg:mx-0 lg:px-0
								order-last
								md:order-first
							"
						>
							<div class="max-w-md">
								<h2
									class="
										text-3xl
										mt-8
										font-display font-extrabold
										text-gray-900
										uppercase
									"
								>
									Was willst du
									<span
										class="
											bg-clip-text
											text-transparent
											bg-gradient-to-r
											from-orange-300
											to-orange-500
										"
										>wirklich?</span
									>
								</h2>
								<p class="mt-2 text-lg text-gray-500">
									Du möchtest einen Körper, der dich mit
									Leichtigkeit durchs Leben bringt.
									Fahrradtouren mit der Familie, Bergsteigen
									mit Freunden, das Schwimmen im nächsten
									See oder das Tanzen mit dem Partner – all
									das sind Aktivitäten, die du gerne machst
									und genießen möchtest, ohne dass dir dein
									Körper einen Strich durch die Rechnung
									macht.
								</p>
							</div>
						</div>
						<div
							class="
								lg:mt-0
								px-4
								lg:pr-36
								flex
								justify-center
								order-first
							"
						>
							<div
								class="
									rounded-lg
									lg:px-0 lg:m-0 lg:relative lg:h-full
									bg-red-400
								"
							>
								<img
									class="
										w-full
										lg:absolute
										rounded-md
										h-full
										lg:left-0
										lg:h-96
										lg:w-auto
										lg:max-w-none
									"
									src="/img/run.jpg"
									alt="Inbox user interface"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="relative">
					<div
						class="
							md:mx-auto
							md:max-w-5xl
							md:px-8
							md:grid
							md:grid-cols-2
							md:grid-flow-col-dense
						"
					>
						<div
							class="
								lg:mt-0
								px-4
								flex
								justify-center
								md:justify-start
								items-center
							"
						>
							<div
								class="
									lg:pl-6
									rounded-lg
									lg:px-0 lg:m-0 lg:relative
								"
							>
								<img
									class="
										w-full
										lg:absolute
										lg:transform
										lg:-translate-y-1/2
										rounded-md
										lg:h-96 lg:w-auto lg:max-w-none
									"
									src="/img/hardwork.jpg"
									alt="Inbox user interface"
								/>
							</div>
						</div>
						<div
							class="
								max-w-md
								mx-auto
								lg:py-16 lg:mx-0 lg:px-0
							"
						>
							<p class="mt-2 text-lg text-gray-500">
								Doch wie gelangst du zu diesem Körper? Hier
								komme ich ins Spiel. Ich zeige dir, wie wir
								am effektivsten da hinkommen, wo du
								hinmöchtest. Ich helfe dir, dir weniger
								Gedanken, um deinen Körper zu machen, damit
								du Zeit hast, dich auf die wirklich
								wichtigen Dinge im Leben zu konzentrieren –
								vorausgesetzt, du bist bereit die nötige
								Arbeit zu investieren.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="py-64 bg-qa">
				<div class="max-w-4xl mx-auto text-center">
					<p
						class="
							mt-2
							px-8
							text-xl
							font-display
							text-white
						"
					>
						Meine Leidenschaft ist die Optimierung des
						menschlichen Körpers – Menschen zu unterstützen,
						die bereit sind ihr volles Potenzial
						auszuschöpfen und ihren Körper auf das nächste
						Level zu bringen.
					</p>
					<div
						class="
							text-orange-200 text-lg
							mt-4
							flex
							justify-center
							space-x-2
						"
					>
						<a
							href="tel:+4915126620116"
							class="
								inline-flex
								font-display
								text-2xl
								uppercase
								bg-origin-border
								border border-transparent
								font-medium
								shadow-sm
								text-orange-200
								rounded-full
								justify-center
								items-center
							"
						>
							Jetzt anrufen
						</a>
						<a
							href="mailto:marco-meiwes@web.de"
							class="
								inline-flex
								font-display
								text-2xl
								uppercase
								bg-origin-border
								border border-transparent
								font-medium
								shadow-sm
								text-white
								rounded-full
								justify-center
								items-center
							"
						>
							Per Email kontaktieren
						</a>
					</div>
				</div>
			</section>

			<Testimonial />

			<FAQ />
		</main>
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

<style>
.h-hero {
	height: calc(100vh - 90px);
}
</style>
