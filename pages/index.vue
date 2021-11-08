<template>
  <div class="flex flex-col">
    <main class="h-full self-stretch mt-auto">
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 lg:bg-gray-100"></div>
          <div
            class="
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
                px-4
                lg:px-0
                font-display
                text-5xl
                tracking-tighter
                uppercase
                mb-8
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-purple-400
                to-indigo-600
              "
            >
              Ein neues Lebensgefühl durch Bewegung.
            </h2>
            <div class="relative lg:rounded-md overflow-hidden w-full">
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
                  class="h-full w-full object-cover rounded-md ç"
                  src="/img/Hero.png"
                  alt="People working on laptops"
                />
              </div>
              <div
                class="relative px-4 py-40 lg:px-8 mt-60 flex justify-center"
              >
                <button
                  @click="enableVideo"
                  type="button"
                  class="
                    absolute
                    left-10
                    bottom-1/2
                    transform
                    -translate-y-1/2
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
                  <span class="sr-only">Video anschauen und mehr erfahren</span>
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
                      <circle opacity="0.9" cx="42" cy="42" r="0" />
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

        <VideoModal @close="videoIsEnabled = false" :open="videoIsEnabled">
          <video v-if="videoIsEnabled" class="relative z-50" id="vid" ref="vid">
            <source src="/video/featured.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </VideoModal>

        <div
          class="
            max-w-7xl
            mx-auto
            px-4
            pb-12
            sm:px-6
            lg:px-8
            relative
            z-10
            mt-8
            lg:-mt-20
          "
        >
          <h1
            class="
              text-center
              block
              font-bold
              uppercase
              font-display
              text-2xl
              mb-8
            "
          >
            <span
              class="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-purple-400
                to-indigo-600
              "
              >Personal Training</span
            >
            in Hövelhöf und Kreis Paderborn
          </h1>

          <!--    <div
                  class="
                    mt-6
                    grid grid-cols-2
                    gap-8
                    md:grid-cols-3
                    lg:grid-cols-3
                    text-gray-500
                  "
                >
                  <div
                    class="
                      col-span-1
                      flex
                      justify-center
                      md:col-span-2
                      lg:col-span-1
                    "
                  >
                    Bewegung
                  </div>
                  <div
                    class="
                      col-span-1
                      flex
                      justify-center
                      md:col-span-2
                      lg:col-span-1
                    "
                  >
                    Fitness
                  </div>
                  <div
                    class="
                      col-span-1
                      flex
                      justify-center
                      md:col-span-2 md:col-start-2
                      lg:col-span-1
                    "
                  >
                    Kraft
                  </div>
                </div> -->
        </div>
      </div>

      <section id="about">
        <div class="relative pt-16 overflow-hidden">
          <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48"></div>
          <div class="relative">
            <div
              class="
                lg:mx-auto
                lg:max-w-7xl
                lg:px-8
                lg:grid
                lg:grid-cols-2
                lg:grid-flow-col-dense
              "
            >
              <div class="px-4 lg:max-w-xl mx-auto lg:py-16 lg:mx-0 lg:px-0">
                <div>
                  <div class="mt-6">
                    <h2
                      class="
                        text-3xl
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
                          from-purple-400
                          to-indigo-500
                        "
                        >Personal Trainer</span
                      >
                    </h2>
                    <p class="mt-4 text-lg text-gray-500">
                      Hey, ich bin Marco und ich bin Personal Trainer aus
                      Hovelhöf im Kreis Paderborn. Ich helfe Menschen sich in
                      ihrem Körper wohlzufühlen. Mir geht es nicht um Fitness,
                      sondern darum: Was kann der Körper und was kann er nicht?
                      Wie frei kannst du dich in deinem Körper bewegen? Hier
                      setzt mein Training an. Wer einen funktionalen,
                      beweglichen und verletzungsfreien Körper haben möchte ist
                      bei mir an der richtigen Adresse.
                    </p>
                    <h2
                      class="
                        py-4
                        text-3xl
                        font-display font-extrabold
                        text-gray-900
                      "
                    >
                      Über mich
                    </h2>
                    <p class="text-lg text-gray-500">
                      Bewegung ist mein Leben. Seit 20 Jahren spiele ich
                      Badminton im Verein und bin mittlerweile seit 10 Jahren
                      als Badmintontrainer aktiv. Nebenbei habe ich auf meine
                      körperliche Fitness immer großen Wert gelegt. Der Sport
                      hat mir das nötige Vertrauen in mich selbst gegeben und
                      mir gezeigt, wozu mein Körper fähig ist. Während meines
                      Sportstudiums veränderte sich mein Training von einem
                      fitnessorientierten zu einem vielseitigen und
                      bewegungsorientierten Training.
                    </p>
                    <p class="mt-4 text-lg text-gray-500">
                      Meine Leidenschaft ist die Optimierung des menschlichen
                      Körpers – Menschen zu unterstützen, die bereit sind ihr
                      volles Potenzial auszuschöpfen und ihren Körper auf das
                      nächste Level zu bringen.
                    </p>
                    <div class="mt-6">
                      <a
                        href="mailto:marco-meiwes@web.de"
                        class="
                          inline-flex
                          bg-gradient-to-r
                          from-purple-600
                          to-indigo-600
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
              <div class="mt-12 sm:mt-16 lg:mt-0 px-4">
                <div
                  class="
                    -mr-48
                    lg:pl-6
                    md:-mr-16
                    rounded-lg
                    overflow-hidden
                    lg:px-0 lg:m-0 lg:relative lg:h-full
                  "
                >
                  <img
                    class="
                      w-full
                      lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none
                    "
                    src="/img/FeaturedRight.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-24">
            <div
              class="
                lg:mx-auto
                lg:max-w-7xl
                lg:px-8
                lg:grid
                lg:grid-cols-2
                lg:grid-flow-col-dense
                lg:gap-24
              "
            >
              <div
                class="
                  px-4
                  lg:max-w-xl
                  mx-auto
                  sm:px-6
                  lg:py-32 lg:mx-0 lg:px-0 lg:col-start-2
                "
              >
                <div>
                  <div class="mt-6">
                    <h2
                      class="
                        text-3xl
                        font-extrabold
                        text-gray-900
                        font-display
                        uppercase
                      "
                    >
                      Was möchtest du wirklich?
                    </h2>
                    <p class="mt-4 text-lg text-gray-500">
                      Jetzt mal Hand aufs Herz. Dir geht es nicht um ein
                      Six-Pack, einen flachen Bauch oder einen knackigen
                      Hintern. Dir ist es viel wichtiger dich in deinem Körper
                      wohlzufühlen und all die schönen Dinge des Lebens ausüben
                      zu können, ohne ständig an den eigenen Körper denken zu
                      müssen. Du möchtest viel Energie haben, leistungsfähig,
                      mental ausgeglichen und belastbar sein.
                    </p>
                    <p class="mt-4 text-lg text-gray-500">
                      Du möchtest einen Körper, der dich mit Leichtigkeit durchs
                      Leben bringt. Fahrradtouren mit der Familie, Bergsteigen
                      mit Freunden, das Schwimmen im nächsten See oder das
                      Tanzen mit dem Partner – all das sind Aktivitäten, die du
                      gerne machst und genießen möchtest, ohne dass dir dein
                      Körper einen Strich durch die Rechnung macht.
                    </p>
                    <p class="mt-4 text-lg text-gray-500">
                      Doch wie gelangst du zu diesem Körper? Hier komme ich ins
                      Spiel. Ich zeige dir, wie wir am effektivsten da
                      hinkommen, wo du hinmöchtest. Ich helfe dir, dir weniger
                      Gedanken, um deinen Körper zu machen, damit du Zeit hast,
                      dich auf die wirklich wichtigen Dinge im Leben zu
                      konzentrieren – vorausgesetzt, du bist bereit die nötige
                      Arbeit zu investieren.
                    </p>
                    <div class="mt-6">
                      <a
                        href="mailto:marco-meiwes@web.de"
                        class="
                          inline-flex
                          bg-gradient-to-r
                          from-purple-600
                          to-indigo-600
                          bg-origin-border
                          px-4
                          py-2
                          border border-transparent
                          text-base
                          font-medium
                          shadow-sm
                          text-white
                          rounded-full
                        "
                      >
                        Jetzt kontaktieren
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 max-w-lg">
                <div class="lg:-ml-24 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <div class="px-4">
                    <div
                      class="
                        aspect-w-1 aspect-h-1
                        rounded-lg
                        lg:bg-gray-100
                        overflow-hidden
                      "
                    >
                      <img
                        src="/img/gallery2.jpg"
                        alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                        class="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div
                      class="
                        grid grid-cols-2
                        gap-4
                        mt-4
                        sm:gap-6 sm:mt-6
                        lg:gap-8 lg:mt-8
                      "
                    >
                      <div
                        class="
                          aspect-w-1 aspect-h-1
                          rounded-lg
                          bg-gray-100
                          overflow-hidden
                        "
                      >
                        <img
                          src="/img/gallery.jpg"
                          alt="Detail of temperature setting button on kettle bass with digital degree readout."
                          class="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div
                        class="
                          aspect-w-1 aspect-h-1
                          rounded-lg
                          bg-gray-100
                          overflow-hidden
                        "
                      >
                        <img
                          src="/img/gallery3.jpg"
                          alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                          class="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        aria-labelledby="testimonial-heading"
        class="relative mt-12 pb-24 max-w-7xl mx-auto lg:py-32"
      >
        <div class="max-w-2xl mx-auto lg:max-w-none">
          <h2
            class="
              text-3xl
              lg:text-5xl
              font-display font-extrabold
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-purple-500
              to-indigo-600
              uppercase
            "
          >
            Kundenmeinungen
          </h2>

          <div
            class="
              mt-16
              space-y-16
              lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8
            "
          >
            <blockquote class="sm:flex lg:flex-col self-stretch">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="flex-shrink-0 text-gray-300"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div
                class="
                  mt-8
                  sm:mt-0 sm:ml-6
                  lg:mt-10 lg:ml-0
                  h-full
                  flex flex-col
                "
              >
                <p class="text-lg text-gray-600">
                  Das individuelle Training mit Marco finde ich klasse. Er passt
                  sich dabei immer mir an, da ich bislang nicht gerade der
                  sportlichste Typ war und eine Arm-OP hinter mir habe.
                </p>
                <p class="text-lg text-gray-600 mt-2">
                  Und dass wir meistens draußen trainieren, finde ich super!
                </p>
                <cite
                  class="
                    mt-4
                    lg:mt-auto
                    block
                    font-semibold
                    not-italic
                    text-purple-600
                  "
                >
                  Franky
                </cite>
              </div>
            </blockquote>

            <blockquote class="sm:flex lg:flex-col self-stretch">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="flex-shrink-0 text-gray-300"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div
                class="
                  mt-8
                  sm:mt-0 sm:ml-6
                  lg:mt-10 lg:ml-0
                  h-full
                  flex flex-col
                "
              >
                <p class="text-lg text-gray-600">
                  Das besondere an Marcos Training ist, dass wir nur den eigenen
                  Körper verwenden und das komplett ausreicht. Mit seinem
                  Feedback und dem Glauben an mich klappen auch schwierige
                  Sachen.
                </p>
                <cite
                  class="
                    block
                    font-semibold
                    not-italic
                    text-purple-600
                    lg:mt-auto
                  "
                >
                  Finn
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

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
        if (window.document) {
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
