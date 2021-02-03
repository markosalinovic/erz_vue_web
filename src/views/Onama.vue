<template>
  <Navbar />
  <Hero />
  <div class="about">
    <h1>Ajmo genijalci treba nam tekst</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue"
import Navbar from "@/components/Navbar.vue"

export default defineComponent({
name: 'O nama',
components: {
  Hero,
  Navbar,
}
})
</script>
