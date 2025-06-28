<template>
  <div>
    <header style="padding: 1rem; background: #333; color: white;">
      <nav>
        <button 
          @click="navigateTo('/')"
          style="margin-right: 1rem; color: white; background: none; border: none; cursor: pointer; text-decoration: underline;"
        >
          Accueil
        </button>
        <button 
          @click="navigateTo('/about')"
          style="color: white; background: none; border: none; cursor: pointer; text-decoration: underline;"
        >
          À propos
        </button>
      </nav>
      <div v-if="isPWA" style="font-size: 0.8rem; margin-top: 0.5rem;">
        🚀 Mode PWA activé
      </div>
    </header>
    <main style="padding: 1rem;">
      <slot />
    </main>
  </div>
</template>

<script setup>
const { isPWA } = usePWA()
</script>
