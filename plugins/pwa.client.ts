export default defineNuxtPlugin(() => {
  if (process.client) {
    // Détecter si on est en mode PWA
    const isPWA = () => {
      return window.matchMedia('(display-mode: standalone)').matches ||
             (window.navigator as any).standalone ||
             document.referrer.includes('android-app://') ||
             window.location.search.includes('source=pwa')
    }

    // Intercepter tous les clics sur les liens pour forcer la navigation interne
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const link = target.closest('a')
      
      if (link && isPWA()) {
        const href = link.getAttribute('href')
        
        // Si c'est un lien interne
        if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
          event.preventDefault()
          
          // Utiliser navigateTo de Nuxt pour la navigation interne
          const relativePath = href.startsWith(window.location.origin) 
            ? href.replace(window.location.origin, '') 
            : href
            
          navigateTo(relativePath)
        }
      }
    }, true) // Utiliser la phase de capture

    // Intercepter les événements de navigation du navigateur
    if (isPWA()) {
      // Empêcher le zoom sur double-tap (iOS)
      let lastTouchEnd = 0
      document.addEventListener('touchend', (event) => {
        const now = new Date().getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      }, false)

      // Gérer les métadonnées viewport pour iOS
      const metaViewport = document.querySelector('meta[name="viewport"]')
      if (metaViewport) {
        metaViewport.setAttribute('content', 
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
        )
      }

      // Ajouter une classe CSS pour le mode PWA
      document.documentElement.classList.add('pwa-mode')
      
      // Empêcher les gestes de navigation par défaut sur iOS
      document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      }, { passive: false })

      document.addEventListener('gesturestart', (e) => {
        e.preventDefault()
      })
    }
  }
})
