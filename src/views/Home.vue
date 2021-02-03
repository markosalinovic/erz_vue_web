<template>
  <MainHero />
  <section class="partners">
    <div class="partners-title">
      <h1>Naši partneri</h1>
    </div>
    <div class="partners-content">
      <div class="partner-link">
        <a href="https://www.instant-gaming.com/en/?igr=esportracingzone">Instant Gaming</a>
      </div>
      <div class="partner-link">
        <a href="https://www.g2a.com/n/erz">G2A</a>
      </div>
    </div>
  </section>

  <section class="event-next">
    <div class="event-next-title">
      <h1>Sljedeće utrke</h1>
    </div>
    <div class="event-next-content">
      <div class="event">
        <h2>F1 2020 - Divizija 2</h2>
        <h3>04.02.2021 22:00</h3>
        <img
          class="event-image"
          src="@/assets/images/france.jpg"
          alt="Suzuka"
        />
      </div>
      <div class="event">
        <h2>F1 2020 - Divizija X</h2>
        <h3>dd.mm.yyyy hh:ss</h3>
        <img
          class="event-image"
          src="@/assets/images/suzuka2.jpg"
          alt="Suzuka"
        />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHero from "@/components/MainHero.vue"
import Footer from "@/components/Footer.vue"

export default defineComponent({
  name: "Home",
  components: {
    MainHero,
    Footer,
  }
});
</script>
