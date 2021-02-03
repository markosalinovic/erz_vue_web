<template>
  <Navbar />
  <Hero />
  <div class="competitions">
    <h1>Formula 1 2020 - PS4/PS5</h1>
    <h1>Formula 2 2020 - PS4/PS5</h1>
    <h1>WRC 9 - PS4/PS5</h1>
    <h1>Assetto Corsa Competizione - PS4/PS5</h1>
    <h1>Assetto Corsa Competizione - PC</h1>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue"
import Navbar from "@/components/Navbar.vue"

export default defineComponent({
name: 'Natjecanja',
components: {
  Hero,
  Navbar,
}
})
</script>