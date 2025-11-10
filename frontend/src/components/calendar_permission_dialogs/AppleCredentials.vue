<template>
  <div class="tw-flex tw-flex-col tw-gap-6">
    <div class="tw-flex tw-flex-col tw-gap-3">
      <div
        class="tw-text-md tw-flex tw-flex-row tw-items-center tw-justify-start tw-gap-2 tw-font-medium"
      >
        Połącz swój
        <div class="tw-flex tw-items-center tw-gap-1">
          <v-img
            class="-tw-mt-1 tw-flex-initial"
            width="15"
            height="15"
            src="@/assets/apple_logo.svg"
          />
          <span class="tw-font-medium">Kalendarz Apple</span>
        </div>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <div class="tw-text-sm tw-text-very-dark-gray">
          Wygeneruj
          <span class="tw-font-medium tw-text-black"
            >hasło specyficzne dla aplikacji</span
          >
          do użycia z Sałatą w swoim
          <a
            href="https://appleid.apple.com/account/manage"
            target="_blank"
            rel="noopener noreferrer"
            >https://appleid.apple.com/account/manage</a
          >. Skopiuj i wklej wygenerowane hasło aplikacji poniżej.
        </div>
        <div class="tw-text-sm tw-text-very-dark-gray">
          Twoje dane uwierzytelniające zostaną zapisane i zaszyfrowane.
        </div>
      </div>
    </div>
    <div class="tw-flex tw-flex-col tw-gap-3">
      <v-text-field solo placeholder="Apple ID" hide-details v-model="email" />
      <v-text-field
        solo
        placeholder="Dodaj hasło aplikacji"
        hide-details
        v-model="password"
        type="password"
      />
      <div class="tw-flex tw-items-center tw-gap-2">
        <v-btn text class="tw-grow" @click="$emit('back')">Wstecz</v-btn>
        <v-btn
          :disabled="!enableSubmit"
          color="primary"
          class="tw-grow"
          :loading="loading"
          @click="submit"
          >Zatwierdź</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import { post } from "@/utils"
import { mapActions } from "vuex"
import { errors } from "@/constants"

export default {
  name: "AppleCredentials",

  data() {
    return {
      email: "",
      password: "",
      loading: false,
    }
  },

  computed: {
    enableSubmit() {
      return this.email && this.password
    },
  },

  methods: {
    ...mapActions(["showError", "refreshAuthUser"]),
    submit() {
      this.loading = true
      post(`/user/add-apple-calendar-account`, {
        email: this.email,
        password: this.password,
      })
        .then(async () => {
          await this.refreshAuthUser()
          this.$emit("addedAppleCalendar")

          this.$posthog.capture("Apple Calendar Added")
        })
        .catch((err) => {
          if (err.error === errors.InvalidCredentials) {
            this.showError("Your Apple ID or app password is incorrect.")
          } else {
            this.showError(
              "An error occurred while adding your Apple Calendar! Please try again later."
            )
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
