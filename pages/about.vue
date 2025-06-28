<template>
  <div>
    <h1>Page À propos</h1>
    <p>Voici une simple navigation entre deux pages.</p>
    
    <div style="margin-top: 2rem;">
      <button 
        @click="navigateTo('/')"
        style="background: #333; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.25rem; cursor: pointer;"
      >
        ← Retour à l'accueil
      </button>
    </div>
    
    <div v-if="isInstalled" style="margin-top: 1rem; padding: 1rem; background: #e8f5e8; border-radius: 0.5rem; color: #2d5a2d;">
      🚀 Vous naviguez dans l'application PWA ! Toutes les navigations restent dans l'app.
    </div>
  </div>
</template>

<script setup>
const { isInstalled } = process.client ? usePWA() : { isInstalled: ref(false) };
</script>
