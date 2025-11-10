<template>
  <!-- Google sign in not supported dialog -->
  <v-dialog :value="value" width="400" content-class="tw-m-0">
    <v-card>
      <v-card-title>Logowanie przez Google nie jest obsługiwane</v-card-title>
      <v-card-text>
        <p>
          Dzieje się tak zazwyczaj po otwarciu linku Timeful na Instagramie lub Messengerze.
        </p>
        <p>
          Aby obejść ten problem, kliknij trzy kropki w prawym górnym rogu, a
          następnie "Otwórz w przeglądarce systemowej" lub "Otwórz w Chrome"
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text class="tw-text-green" @click="$emit('input', false)">
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SignInNotSupportedDialog",

  props: {
    value: { type: Boolean, required: true },
  },
}
</script>
