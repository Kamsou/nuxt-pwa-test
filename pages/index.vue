<template>
  <div>
    <h1>Bienvenue sur la page d'accueil</h1>
    <p>Clique sur "À propos" pour naviguer.</p>
    
    <div style="margin: 2rem 0;">
      <button 
        v-if="needRefresh" 
        @click="updateServiceWorker()"
        style="background: #ff6b35; color: white; border: none; padding: 1rem 2rem; border-radius: 0.5rem; cursor: pointer; font-size: 1rem; margin-right: 1rem;"
      >
        🔄 Mettre à jour l'app
      </button>
      
      <button 
        v-if="showInstallPrompt" 
        @click="install()"
        style="background: #007acc; color: white; border: none; padding: 1rem 2rem; border-radius: 0.5rem; cursor: pointer; font-size: 1rem;"
      >
        📱 Installer l'application
      </button>
      
      <div v-if="isInstalled" style="padding: 1rem; background: #e8f5e8; border-radius: 0.5rem; color: #2d5a2d; margin-top: 1rem;">
        ✅ Application installée ! Vous naviguez en mode PWA.
      </div>
      
      <div v-else-if="!showInstallPrompt" style="padding: 1rem; background: #f0f0f0; border-radius: 0.5rem; color: #666; margin-top: 1rem;">
        💡 Pour installer l'application, utilisez le menu de votre navigateur ou ajoutez cette page à votre écran d'accueil.
      </div>
    </div>
    
    <div style="margin-top: 2rem;">
      <button 
        @click="navigateTo('/about')"
        style="background: #333; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.25rem; cursor: pointer;"
      >
        Aller à la page À propos →
      </button>
    </div>
  </div>
</template>

<script setup>
const { 
  needRefresh, 
  updateServiceWorker,
  showInstallPrompt,
  install,
  isInstalled
} = process.client ? usePWA() : {
  needRefresh: ref(false),
  updateServiceWorker: () => {},
  showInstallPrompt: ref(false),
  install: () => {},
  isInstalled: ref(false)
};
</script>
