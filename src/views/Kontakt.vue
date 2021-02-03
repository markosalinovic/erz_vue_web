<template>
  <Navbar />
  <Hero />
  <div class="contact">
    <h1>Tu će nas kontaktirat :)</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue"
import Navbar from "@/components/Navbar.vue"

export default defineComponent({
name: 'Kontakt',
components: {
  Hero,
  Navbar,
}
})
</script>