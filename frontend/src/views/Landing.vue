<template>
  <div class="tw-bg-light-gray">
    <div
      class="tw-relative tw-m-auto tw-mb-12 tw-flex tw-max-w-6xl tw-flex-col tw-px-4 sm:tw-mb-20"
    >
      <!-- Header -->
      <div class="tw-mb-16 sm:tw-mb-28">
        <div class="tw-flex tw-items-center tw-pt-5">
            <div class="tw-flex tw-items-center tw-mb-1">
              <span class="tw-text-2xl tw-font-bold tw-mr-7">Sałata WRSS WIET</span>
            </div>

          <v-spacer />

          <LandingPageHeader>
            <v-btn text href="https://github.com/m-walas/Harmobot">Harmobot</v-btn>
            <div v-if="authUser" class="tw-ml-2">
              <AuthUserMenu />
            </div>
            <v-btn v-else text @click="signIn">Zaloguj się</v-btn>
          </LandingPageHeader>
        </div>

        <FormerlyKnownAs />
      </div>

      <div class="tw-flex tw-flex-col tw-items-center">
        <div
          class="tw-mb-6 tw-flex tw-max-w-[26rem] tw-flex-col tw-items-center sm:tw-w-[35rem] sm:tw-max-w-none"
        >
          <div
            class="tw-mb-4 tw-flex tw-select-none tw-items-center tw-rounded-full tw-border tw-border-light-gray-stroke tw-bg-white/70 tw-px-2.5 tw-py-1.5 tw-text-sm tw-text-dark-gray"
          >
            This project is open source!
            <github-button
              v-once
              class="-tw-mb-1 tw-ml-2"
              href="https://github.com/schej-it/timeful.app"
              data-show-count="true"
              aria-label="Star timeful.app on GitHub"
              >Star</github-button
            >
          </div>
          <div
            id="header"
            class="tw-mb-4 tw-text-center tw-text-2xl tw-font-medium sm:tw-text-4xl lg:tw-text-4xl xl:tw-text-5xl"
          >
            <h1>Sałata WRSS WIET</h1>
          </div>

          <div
            class="lg:tw-text-md tw-text-left tw-text-center tw-text-sm tw-text-very-dark-gray sm:tw-text-lg md:tw-text-lg xl:tw-text-lg"
          >
            Znajdź wspólny termin spotkania z grupą osób.
            <br class="tw-hidden sm:tw-block" />
            Integruj ze swoim
            <v-tooltip
              top
              content-class="tw-bg-very-dark-gray tw-shadow-lg tw-opacity-100"
            >
              <template v-slot:activator="{ on, attrs }">
                <span
                  class="tw-cursor-pointer tw-border-b tw-border-dashed tw-border-dark-gray"
                  v-bind="attrs"
                  v-on="on"
                  >kalendarzem</span
                >
              </template>
              <span
                >Sałata pozwala zintegrować i wypełnić dostępność na podstawie Google
                Calendar<br class="tw-hidden sm:tw-block" /></span
              > </v-tooltip
            >.
          </div>
        </div>

        <div class="tw-mb-12 tw-space-y-2">
          <v-btn
            class="tw-block tw-self-center tw-rounded-lg tw-bg-green tw-px-10 tw-text-base sm:tw-px-10 lg:tw-px-12"
            dark
            @click="authUser ? openDashboard() : (newDialog = true)"
            large
            :x-large="$vuetify.breakpoint.mdAndUp"
          >
            {{ authUser ? "Otwórz dashboard" : "Stwórz sałatę" }}
          </v-btn>
          <div
            v-if="!authUser"
            class="tw-text-center tw-text-xs tw-text-dark-gray sm:tw-text-sm"
          >
            Nie wymaga logowania.
          </div>
        </div>
        <div class="tw-relative tw-w-full">
          <!-- Green background -->
          <div
            class="tw-absolute -tw-bottom-12 tw-left-1/2 tw-h-[85%] tw-w-screen -tw-translate-x-1/2 tw-bg-green sm:-tw-bottom-20"
          ></div>

          <!-- Hero video -->
          <div
            class="tw-relative tw-z-20 tw-w-full tw-rounded-lg tw-border tw-border-light-gray-stroke tw-bg-white tw-shadow-xl sm:tw-rounded-xl md:tw-mx-auto md:tw-w-fit"
          >
            <div
              class="tw-relative tw-mx-4 tw-aspect-square md:tw-size-[700px] lg:tw-size-[800px]"
            >
              <v-img
                class="tw-absolute tw-left-0 tw-top-0 tw-z-20 tw-size-full tw-transition-opacity tw-duration-300"
                :class="{ 'tw-opacity-0': isVideoPlaying }"
                src="@/assets/img/hero.jpg"
                transition="fade-transition"
                contain
              />
              <vue-vimeo-player
                video-url="https://player.vimeo.com/video/1083205305?h=d58bef862a"
                :player-width="800"
                :player-height="800"
                :options="{
                  muted: true,
                  playsinline: true,
                  responsive: true,
                }"
                :controls="false"
                :autoplay="true"
                :loop="true"
                @play="onPlay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How it works -->
    <div
      id="how-it-works"
      class="tw-grid tw-place-content-center tw-px-4 tw-pt-12"
    >
      <div class="tw-mx-auto tw-flex tw-flex-col tw-gap-4">
        <div
          class="tw-mb-4 tw-text-center tw-text-2xl tw-font-medium sm:tw-text-3xl lg:tw-text-4xl"
        >
          how-to
        </div>
        <div
          v-for="(step, i) in howItWorksSteps"
          :key="i"
          class="tw-flex tw-items-center tw-gap-2"
        >
          <NumberBullet>{{ i + 1 }}</NumberBullet>
          <div class="tw-text-base tw-font-medium md:tw-text-xl">
            <div v-html="step"></div>
          </div>
        </div>
      </div>
      <div
        class="tw-mb-6 tw-mt-10 tw-text-center tw-text-3xl tw-font-medium md:tw-mb-12 md:tw-mt-20 md:tw-text-6xl"
      >
      </div>
    </div>

    <Footer />

    <!-- Sign in dialog -->
    <SignInDialog v-model="signInDialog" @signIn="_signIn" />

    <!-- New event dialog -->
    <NewDialog v-model="newDialog" no-tabs @signIn="signIn" />

    <!-- Add the dialog component -->
    <HowItWorksDialog
      v-if="showHowItWorksDialog"
      v-model="showHowItWorksDialog"
    />
  </div>
</template>

<style scoped>
@media screen and (min-width: 375px) and (max-width: 640px) {
  #header {
    font-size: 1.875rem !important; /* 30px */
    line-height: 2.25rem !important; /* 36px */
  }
}
</style>
<style>
.rdt-h {
  @apply tw-rounded tw-bg-light-green/20 tw-px-px tw-text-black;
}
</style>

<script>
import LandingPageCalendar from "@/components/landing/LandingPageCalendar.vue"
import { isPhone, signInGoogle, signInOutlook } from "@/utils"
import Header from "@/components/Header.vue"
import NumberBullet from "@/components/NumberBullet.vue"
import NewEvent from "@/components/NewEvent.vue"
import NewDialog from "@/components/NewDialog.vue"
import LandingPageHeader from "@/components/landing/LandingPageHeader.vue"
import Logo from "@/components/Logo.vue"
import GithubButton from "vue-github-button"
import SignInDialog from "@/components/SignInDialog.vue"
import { calendarTypes } from "@/constants"
import { vueVimeoPlayer } from "vue-vimeo-player"
import Footer from "@/components/Footer.vue"
import PronunciationMenu from "@/components/PronunciationMenu.vue"
import { mapState } from "vuex"
import AuthUserMenu from "@/components/AuthUserMenu.vue"
import FormerlyKnownAs from "@/components/FormerlyKnownAs.vue"

export default {
  name: "Landing",

  metaInfo: {
    title: "Sałata WRSS WIET",
  },

  components: {
    LandingPageCalendar,
    Header,
    NumberBullet,
    NewEvent,
    NewDialog,
    LandingPageHeader,
    GithubButton,
    Logo,
    SignInDialog,
    vueVimeoPlayer,
    Footer,
    PronunciationMenu,
    AuthUserMenu,
    FormerlyKnownAs,
  },

  data: () => ({
    signInDialog: false,
    newDialog: false,
    githubSnackbar: true,
    howItWorksSteps: [
      "Stwórz event",
      "Podziel się linkiem sałaty ze swoją grupą, aby mogła go wypełnić",
      "Zobacz, gdzie pokrywają się dostępności wszystkich",
      "Opcjonalnie stwórz grafik z pomocą <a href='https://github.com/m-walas/Harmobot'>Harmobota</a>"
    ],
    rive: null,
    showSchejy: false,
    showHowItWorksDialog: false,
    isVideoPlaying: false,
  }),

  computed: {
    ...mapState(["authUser"]),
    isPhone() {
      return isPhone(this.$vuetify)
    },
  },

  methods: {
    loadRiveAnimation() {
    },
    _signIn(calendarType) {
      if (calendarType === calendarTypes.GOOGLE) {
        signInGoogle({ state: null, selectAccount: true })
      } else if (calendarType === calendarTypes.OUTLOOK) {
        // NOTE: selectAccount is not supported implemented yet for Outlook, maybe add it later
        signInOutlook({ state: null, selectAccount: true })
      }
    },
    signIn() {
      this.signInDialog = true
    },
    openHowItWorksDialog() {
      this.showHowItWorksDialog = true
      this.$posthog.capture("how_it_works_clicked")
    },
    onPlay() {
      setTimeout(() => {
        this.isVideoPlaying = true
      }, 1000)
    },
    openDashboard() {
      this.$router.push({ name: "home" })
    },
  },

  beforeDestroy() {
    this.rive?.cleanup()
  },

  watch: {
    [`$vuetify.breakpoint.name`]: {
      immediate: true,
      handler() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          setTimeout(() => {
            this.loadRiveAnimation()
          }, 0)
        }
      },
    },
  },
}
</script>
