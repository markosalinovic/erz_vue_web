<template>
 <section class="main-hero">
    <div class="left">
      <h1 class="animate__animated animate__fadeInLeft">
        Esports <span class="logo-span1">Racing </span><span class="logo-span2">Zone</span>
      </h1>
      <p class="animate__animated animate__fadeInLeft">
        Ljubitelj ste SimRacing simulacija? Onda ste na pravom mjestu. 
      </p>
      <p>
          Pridružite se i vi našoj zajednici te uživajte bla bla bla bla bla....
      </p>
      <button class="animate__animated animate__zoomIn btn" v-on:click="signup">Pridruži se</button>
    </div>
    <div class="right">
      <img
        class="animate__animated animate__fadeInDownBig"
        src="@/assets/images/logo.png"
        alt=""
        srcset=""
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: 'MainHero',
    methods: {
        signup: function () {
            alert(`Al' si mislija?`)
        }
    }
})
</script>