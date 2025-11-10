<template>
  <div class="tw-mx-auto tw-mb-12 tw-mt-5 tw-max-w-6xl">
    <div class="tw-flex tw-flex-col tw-gap-16 tw-p-4">
      <!-- Name change section -->
      <div class="tw-flex tw-flex-col tw-gap-5">
        <div
          class="tw-text-xl tw-font-medium tw-text-dark-green sm:tw-text-2xl"
        >
          Profil
        </div>
        <div>
          <div class="tw-mb-1 tw-font-medium">Imię</div>
          <div class="tw-flex tw-max-w-lg tw-items-center tw-gap-2">
            <v-text-field
              v-model="firstName"
              hide-details
              outlined
              placeholder="Imię"
              :dense="isPhone"
            />
            <v-text-field
              v-model="lastName"
              hide-details
              outlined
              placeholder="Nazwisko"
              :dense="isPhone"
            />
          </div>
          <v-expand-transition>
            <div v-if="profileUnsavedChanges">
              <div class="tw-mt-4">
                <v-btn
                  @click="resetProfileChanges"
                  color="primary"
                  outlined
                  class="tw-mr-2"
                  >Anuluj</v-btn
                >
                <v-btn @click="saveName" color="primary">Zapisz zmiany</v-btn>
              </div>
            </div>
          </v-expand-transition>
        </div>
      </div>

      <!-- Calendar Access Section -->
      <div class="tw-flex tw-flex-col tw-gap-5">
        <div
          class="tw-text-xl tw-font-medium tw-text-dark-green sm:tw-text-2xl"
        >Dostęp do kalendarza
        </div>
        <div class="tw-flex tw-flex-col tw-gap-5 sm:tw-flex-row sm:tw-gap-28">
          <div class="tw-text-black">
            Nie przechowujemy danych z Twojego kalendarza nigdzie na naszych serwerach i
            pobieramy tylko wydarzenia z Twojego kalendarza w określonym przez Ciebie przedziale czasowym,
            aby wyświetlić je podczas wypełniania przez Ciebie formularza
            dostępności.
          </div>
          <v-btn
            outlined
            class="tw-text-red"
            href="https://myaccount.google.com/connections?filters=3,4&hl=en"
            target="_blank"
            >Cofnij dostęp do kalendarza</v-btn
          >
        </div>
        <CalendarAccounts></CalendarAccounts>
      </div>

      <!-- Permissions Section -->
      <div class="tw-flex tw-flex-col tw-gap-5">
        <div
          class="tw-text-xl tw-font-medium tw-text-dark-green sm:tw-text-2xl"
        >
          Uprawnienia
        </div>
        <div
          class="tw-flex tw-flex-col tw-rounded-md tw-border-[1px] tw-border-light-gray-stroke"
        >
          <div
            class="tw-flex tw-w-full tw-flex-row tw-border-b-[1px] tw-border-light-gray-stroke"
          >
            <div
              v-for="(h, i) in heading"
              :class="`tw-border-r-[${i == heading.length - 1 ? '0' : '1'}px]`"
              class="tw-w-1/3 tw-border-light-gray-stroke tw-p-4 tw-font-bold"
            >
              {{ h }}
            </div>
          </div>

          <div
            v-for="(c, j) in content"
            :class="`tw-border-b-[${j == content.length - 1 ? '0' : '1'}px]`"
            class="tw-flex tw-w-full tw-flex-row tw-border-light-gray-stroke"
          >
            <div
              v-for="(text, k) in c"
              :class="`tw-border-r-[${k == c.length - 1 ? '0' : '1'}px]`"
              class="tw-w-1/3 tw-border-light-gray-stroke tw-p-4"
            >
              {{ text }}
            </div>
          </div>
        </div>
      </div>

      <!-- Question Section -->
      <div class="tw-flex tw-flex-col tw-gap-5">
        <div
          class="tw-text-xl tw-font-medium tw-text-dark-green sm:tw-text-2xl"
        >
          Masz pytanie?
        </div>
        <div class="tw-flex tw-flex-col tw-gap-5 sm:tw-flex-row sm:tw-gap-28">
          <div class="tw-text-black">
            Napisz do nas na adres
            <a
              href="mailto:dev.wrss.wiet@gmail.com"
              class="tw-text-black tw-underline"
              >dev.wrss.wiet@gmail.com</a
            >
            z wszelkimi pytaniami!
          </div>
        </div>
      </div>

      <!-- Delete Account Section -->
      <div class="tw-mt-28 tw-flex tw-flex-row tw-justify-center">
        <div class="tw-w-64">
          <v-dialog v-model="deleteDialog" width="400" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined class="tw-text-red" block v-bind="attrs" v-on="on"
                >Usuń konto</v-btn
              >
            </template>
            <v-card>
              <v-card-title>Czy na pewno?</v-card-title>
              <v-card-text class="tw-text-sm tw-text-dark-gray"
                >Czy na pewno chcesz usunąć swoje konto? Wszystkie dane
                związane z kontem zostaną utracone.</v-card-text
              >
              <div class="tw-mx-6">
                <div class="tw-text-sm tw-text-dark-gray">
                  Wpisz swój adres e-mail w polu poniżej, aby potwierdzić:
                </div>
                <v-text-field
                  v-model="deleteValidateEmail"
                  autofocus
                  class="tw-flex-initial tw-text-white"
                  :placeholder="authUser.email"
                />
              </div>
              <v-card-actions>
                <v-spacer />
                <v-btn text @click="deleteDialog = false">Cancel</v-btn>
                <v-btn
                  text
                  color="error"
                  @click="deleteAccount()"
                  :disabled="authUser.email != deleteValidateEmail"
                  >Usuń</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import { _delete, patch, isPhone, get } from "@/utils"
import CalendarAccounts from "@/components/settings/CalendarAccounts.vue"

export default {
  name: "Settings",

  metaInfo: {
    title: "Ustawienia - Sałata WRSS WIET",
  },

  components: { CalendarAccounts },

  data: () => ({
    dialog: false,
    deleteDialog: false,
    deleteValidateEmail: "",
    heading: ["Permission", "Purpose", "Requested When"],
    content: [
      [
        "View all calendar events",
        "Allows us to display the names/times of your calendar events",
        "User tries to input availability automatically with Google Calendar",
      ],
      [
        "View all calendars subscribed to",
        "Allows us to display calendar events on all your calendars instead of just your primary calendar",
        "User tries to input availability automatically with Google Calendar",
      ],
    ],

    // Profile settings
    firstName: "",
    lastName: "",
  }),

  computed: {
    ...mapState(["authUser"]),
    nameUnsavedChanges() {
      return (
        this.firstName !== this.authUser.firstName ||
        this.lastName !== this.authUser.lastName
      )
    },
    profileUnsavedChanges() {
      return this.nameUnsavedChanges
    },
    isPhone() {
      return isPhone(this.$vuetify)
    },
  },

  methods: {
    ...mapActions(["showError"]),
    openBillingPortal() {
      get(
        `/stripe/billing-portal?customerId=${encodeURIComponent(
          this.authUser.stripeCustomerId
        )}&returnUrl=${encodeURIComponent(window.location.href)}`
      )
        .then((res) => {
          window.location.href = res.url
        })
        .catch((err) => {
          this.showError(
            "Wystąpił problem z otwarciem portalu płatności! Proszę spróbować ponownie później."
          )
        })
    },
    deleteAccount() {
      _delete(`/user`)
        .then(() => {
          window.location.reload()
        })
        .catch((err) => {
          this.showError(
            "Wystąpił problem z usunięciem konta! Proszę spróbować ponownie później."
          )
        })
    },
    resetProfileChanges() {
      this.firstName = this.authUser.firstName
      this.lastName = this.authUser.lastName
    },
    saveName() {
      patch(`/user/name`, {
        firstName: this.firstName,
        lastName: this.lastName,
      })
        .then(() => {
          window.location.reload()
        })
        .catch((err) => {
          this.showError(
            "Wystąpił problem z aktualizacją imienia! Proszę spróbować ponownie później."
          )
        })
    },
  },

  created() {
    this.firstName = this.authUser.firstName
    this.lastName = this.authUser.lastName
  },
}
</script>
