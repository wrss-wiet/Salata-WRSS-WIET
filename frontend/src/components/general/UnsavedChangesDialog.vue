<template>
  <v-dialog
    :value="value"
    @input="(e) => $emit('input', e)"
    width="400"
    content-class="tw-m-0"
  >
    <v-card>
      <v-card-title>Niezapisane zmiany</v-card-title>
      <v-card-text>
        <div>Czy na pewno chcesz opuścić tę stronę?</div>
        <div>Wprowadzone zmiany nie zostaną zapisane.</div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="$emit('input', false)" class="tw-text-green"
          >Anuluj</v-btn
        >
        <v-btn text @click="$emit('leave')">Opuść stronę</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "UnsavedChangesDialog",

  props: {
    value: { type: Boolean, required: true },
  },
}
</script>
