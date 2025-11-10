<template>
  <footer class="tw-bg-blue tw-py-10 tw-px-4 tw-text-white tw-mt-10">
    <div class="tw-mx-auto tw-max-w-6xl tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-10">
      <!-- Logo i info -->
      <div class="tw-flex tw-flex-col tw-gap-2">
        <div class="tw-flex tw-items-center tw-mb-1">
          <img src="@/assets/wiet-wrss.svg" alt="Sałata WRSS WIET" class="tw-w-20 tw-h-20 tw-mr-5 tw-filter tw-invert tw-brightness-0 tw-opacity-90" />
          <span class="tw-text-2xl tw-font-extrabold">Sałata WRSS WIET</span>
        </div>
        <div class="tw-text-[13px] tw-text-white/90 tw-leading-relaxed">
          Narzędzie do koordynacji dostępności oraz planowania wspólnych wydarzeń WRSS WIET AGH.<br>
          Współpracuje z <a href="https://github.com/m-walas/Harmobot" class="tw-underline hover:tw-text-white" target="_blank">Harmobot</a> – aplikacją do automatycznego układania grafiku na podstawie dostępności z Sałaty.
        </div>
        <div class="tw-mt-1 tw-text-xs tw-text-white/70 tw-font-bold">
          Fork projektu <a href="https://github.com/schej-it/timeful.app" class="tw-underline hover:tw-text-white" target="_blank">timeful.app</a>
          autorstwa <a href="https://github.com/jonathanzliu/" class="tw-underline hover:tw-text-white" target="_blank">@jonathanzliu</a>
        </div>
        <div class="tw-text-xs tw-italic tw-mt-2 tw-font-light tw-text-white/20">
          Dostosowane przez <a href="https://github.com/m-walas" class="tw-underline tw-text-white/20 hover:tw-text-white/30" target="_blank">m-walas</a>
        </div>
      </div>

      <!-- Social media -->
      <div class="tw-flex tw-flex-col tw-gap-2 tw-mt-6 tw-items-center md:tw-items-start">
        <div class="tw-font-semibold tw-mb-2 tw-text-lg">WRSS WIET</div>
        <div class="tw-flex tw-gap-3">
          <a href="https://www.facebook.com/WRSSWIET/" aria-label="Facebook" target="_blank">
            <v-icon class="tw-text-white/90 hover:tw-text-white tw-text-2xl">mdi-facebook</v-icon>
          </a>
          <a href="https://www.instagram.com/wrss.wiet/" aria-label="Instagram" target="_blank">
            <v-icon class="tw-text-white/90 hover:tw-text-white tw-text-2xl">mdi-instagram</v-icon>
          </a>
          <a href="https://www.linkedin.com/company/wrss-wiet-agh/" aria-label="LinkedIn" target="_blank">
            <v-icon class="tw-text-white/90 hover:tw-text-white tw-text-2xl">mdi-linkedin</v-icon>
          </a>
          <a href="https://wrss.iet.agh.edu.pl/" aria-label="WWW" target="_blank">
            <v-icon class="tw-text-white/90 hover:tw-text-white tw-text-2xl">mdi-web</v-icon>
          </a>
          <a href="https://github.com/wrss-wiet" aria-label="GitHub" target="_blank">
            <v-icon class="tw-text-white/90 hover:tw-text-white tw-text-2xl">mdi-github</v-icon>
          </a>
        </div>
      </div>

      <!-- Informacje prawne i disclaimer -->
      <div class="tw-flex tw-flex-col tw-justify-end tw-gap-2">
        <div class="tw-text-sm tw-text-white/80 tw-mb-2">
          <span class="tw-block tw-mb-1 tw-font-bold uppercase tw-tracking-wide"></span>
          Ten serwis został przygotowany na użytek własny WRSS WIET AGH.<br>
          Nie bierzemy odpowiedzialności za korzystanie przez osoby spoza organizacji.<br>
          Korzystasz na własne ryzyko – żadnych gwarancji, żadnej obsługi postronnych kont.
        </div>
        <div class="tw-text-[10px] tw-opacity-60">
          © {{ new Date().getFullYear() }} WRSS WIET AGH. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  @apply tw-text-white/80 !important;
}
a:hover {
  @apply tw-text-white !important;
}
</style>
