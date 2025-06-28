<template>
  <div>
    <h1>Bienvenue sur la page d'accueil</h1>
    <p>Clique sur "À propos" pour naviguer.</p>
    
    <div style="margin: 2rem 0;">
      <button 
        v-if="!isPWA && canInstall" 
        @click="installPWA"
        style="background: #007acc; color: white; border: none; padding: 1rem 2rem; border-radius: 0.5rem; cursor: pointer; font-size: 1rem;"
      >
        📱 Installer l'application
      </button>
      
      <div v-if="isPWA" style="padding: 1rem; background: #e8f5e8; border-radius: 0.5rem; color: #2d5a2d;">
        ✅ Application installée ! Vous naviguez en mode PWA.
      </div>
      
      <div v-else-if="!canInstall" style="padding: 1rem; background: #f0f0f0; border-radius: 0.5rem; color: #666;">
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
const { isPWA } = usePWA()
const canInstall = ref(false)
let deferredPrompt: any = null

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    canInstall.value = true
  })
  
  window.addEventListener('appinstalled', () => {
    canInstall.value = false
    deferredPrompt = null
  })
})

const installPWA = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('PWA installée avec succès')
    }
    
    deferredPrompt = null
    canInstall.value = false
  }
}
</script>
