<template>
  <div>
    <header style="padding: 1rem; background: #333; color: white;">
      <nav>
        <button 
          @click="$router.push('/')"
          style="margin-right: 1rem; color: white; background: none; border: none; cursor: pointer; text-decoration: underline; font-size: 1rem;"
        >
          Accueil
        </button>
        <button 
          @click="$router.push('/about')"
          style="color: white; background: none; border: none; cursor: pointer; text-decoration: underline; font-size: 1rem;"
        >
          À propos
        </button>
      </nav>
      <div v-if="isPWAMode" style="font-size: 0.8rem; margin-top: 0.5rem; background: #4CAF50; padding: 0.25rem 0.5rem; border-radius: 0.25rem;">
        🚀 Mode PWA activé
      </div>
    </header>
    <main style="padding: 1rem;">
      <slot />
    </main>
  </div>
</template>

<script setup>
const isPWAMode = ref(false)

onMounted(() => {
  // Détecter le mode PWA de manière plus précise
  isPWAMode.value = window.matchMedia('(display-mode: standalone)').matches ||
                    ('standalone' in window.navigator && window.navigator.standalone) ||
                    document.referrer.includes('android-app://') ||
                    window.location.search.includes('source=pwa')
})
</script>
