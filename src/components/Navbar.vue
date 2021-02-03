<template>
  <header class="main-header" :class="{ 'scroll': !view.atTopOfPage }">
    <div id="nav" class="navbar">
      <router-link to="/"><div class="nav-link">Naslovna</div></router-link>
      <router-link to="/natjecanja"><div class="nav-link">Natjecanja</div></router-link>
      <router-link to="/onama"><div class="nav-link">O nama</div></router-link>
      <router-link to="/kontakt"><div class="nav-link">Kontakt</div></router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: 'Navbar',
    data() {
        return {
            view: {
                atPageTop: true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.updateScroll)
    },
    methods: {
        updateScroll() {
            if(window.pageYOffset > 0) {
                if(this.view.atPageTop) this.view.atPageTop = false
            }else {
                if(!this.view.atPageTop) this.view.atPageTop = true
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    }

})
</script>