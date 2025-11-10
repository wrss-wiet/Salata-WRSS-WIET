<template>
  <div>
    <div class="tw-text-md tw-mb-4 tw-font-medium">
      Aby uzyskać dostęp do wydarzeń w Kalendarzu Google, potrzebujemy następujących uprawnień:
    </div>

    <div class="tw-mb-8 tw-ml-4 tw-flex tw-flex-col tw-gap-4">
      <div class="tw-flex tw-gap-2 tw-text-sm">
        <v-img
          src="@/assets/gcal_logo.png"
          class="tw-flex-none"
          height="20"
          width="20"
        />
        <div>Przeglądaj wydarzenia we wszystkich swoich kalendarzach.</div>
      </div>
      <div class="tw-flex tw-gap-2 tw-text-sm">
        <v-img
          src="@/assets/gcal_logo.png"
          class="tw-flex-none"
          height="20"
          width="20"
        />
        <div>Przeglądaj listę kalendarzy Google, do których jesteś subskrybowany.</div>
      </div>
    </div>

    <div class="tw-text-md tw-mb-4 tw-font-medium">Te uprawnienia będą</div>
    <div
      class="tw-mb-8 tw-flex tw-flex-col tw-gap-4 tw-text-sm tw-text-very-dark-gray"
    >
      <div>Zezwól nam na wyświetlanie nazw/czasów wydarzeń w Twoim kalendarzu</div>
      <div>
        Zezwól nam na wyświetlanie wydarzeń kalendarza we wszystkich kalendarzach, a nie tylko w Twoim
        kalendarzu głównym
      </div>
    </div>

    <div class="tw-flex">
      <!-- <v-spacer /> -->
      <v-btn v-if="cancelLabel != ''" @click="$emit('cancel')" text class="tw-mr-2 tw-flex-1">
        {{ cancelLabel }}
      </v-btn>
      <v-btn @click="$emit('allow')" class="tw-flex-1 tw-bg-green" dark>
        {{ allowLabel }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarPermissionsCard",

  props: {
    cancelLabel: { type: String, default: "Cancel" },
    allowLabel: { type: String, default: "Allow" },
  },
}
</script>
