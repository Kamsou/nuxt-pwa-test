<template>
  <div>
    <h1>Page À propos</h1>
    <p>Voici une simple navigation entre deux pages.</p>
    
    <div style="margin-top: 2rem;">
      <button 
        @click="$router.push('/')"
        style="background: #333; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.25rem; cursor: pointer;"
      >
        ← Retour à l'accueil
      </button>
    </div>
    
    <div v-if="isPWAMode" style="margin-top: 1rem; padding: 1rem; background: #e8f5e8; border-radius: 0.5rem; color: #2d5a2d;">
      🚀 Vous naviguez dans l'application PWA ! Toutes les navigations restent dans l'app.
    </div>
    
    <div v-else style="margin-top: 1rem; padding: 1rem; background: #fff3cd; border-radius: 0.5rem; color: #856404;">
      📱 Vous naviguez dans le navigateur. Installez l'app pour une meilleure expérience !
    </div>
  </div>
</template>

<script setup>
const { isPWAMode } = usePWADetection();
</script>
