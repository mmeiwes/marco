<template>
	<section class="relative" id="faq">
		<div class="px-4">
			<div class="absolute top-0 left-0 h-full w-full bg-gray-900 z-20"></div>
			<div
				class="
					max-w-7xl
					mx-auto
					py-12
					px-4
					sm:py-16 sm:px-6
					lg:px-8
					relative
					z-20
				"
			>
				<div class="max-w-3xl mx-auto divide-y divide-gray-700">
					<h2
						class="
							text-center text-3xl
							font-extrabold
							text-orange-200
							sm:text-4xl
							text-uppercase
							font-display
							uppercase
						"
					>
						Häufig gestellte Fragen
					</h2>
					<dl class="mt-6 space-y-6 divide-y divide-gray-700">
						<QA
							v-for="(question, i) in questions"
							:key="i"
							:question="question"
							:open="questionIsOpen"
							:index="i"
						/>
					</dl>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			questionIsOpen: false,
			questions: [
				{
					question: 'Wie sieht mein Training aus?',
					answer:
						'Mein Training ist sehr vielseitig und spielerisch gestaltet. Gleichzeitig gehen wir mit höchster Konzentration und Zielstrebigkeit vor. Aspekte der Ausdauer, Kraft, Schnelligkeit, Balance, Koordination, Konzentration und mentalen Stärke finden dabei in meinem Training ihren Platz. Auch Verletzungen bekommen wir wieder in den Griff.',
				},
				{
					question: 'Für wen ist mein Training geeignet?',
					answer:
						'Das Training ist grundsätzlich für jeden geeignet, der daran interessiert ist seinen Körper auf das nächste Level zu bringen. Es sind keine Vorkenntnisse notwendig, um mit einem Training bei mir zu starten. Jeder ist willkommen!',
				},
				{
					question: 'Was solltest du mitbringen?',
					answer:
						'Für das Training solltest du die Bereitschaft, die nötige Arbeit zu investieren, Geduld und auch bei Regen, Schnee und Hitze zu trainieren.',
				},
				{
					question: 'Welche Ergebnisse kannst du erwarten?',
					answer:
						'Die Ergebnisse, die wir zusammen erreichen hängen davon ab, wieviel Zeit du investierst und wie qualitativ hochwertig du die einzelnen Trainingseinheiten durchführst. Sprich – es hängt vor allem von dir ab. Ich kann dir den optimalen Weg ebnen, doch betreten musst du ihn selbst.',
				},
				{
					question: 'Was solltest du mitbringen?',
					answer:
						'Für das Training solltest du die Bereitschaft, die nötige Arbeit zu investieren, Geduld und auch bei Regen, Schnee und Hitze zu trainieren.',
				},
			],
		};
	},
	methods: {
		handleToggleQuestion() {
			console.log('Toggle');
			this.questionIsOpen = !this.questionIsOpen;
		},
	},
};
</script>

<style lang="scss" scoped></style>
