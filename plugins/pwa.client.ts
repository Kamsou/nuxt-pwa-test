export default defineNuxtPlugin(() => {
  if (process.client) {
    // Gérer les métadonnées PWA
    const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
                  (window.navigator as any).standalone ||
                  document.referrer.includes('android-app://')

    if (isPWA) {
      // Empêcher le zoom sur double-tap (comportement iOS Safari)
      document.addEventListener('touchend', (event) => {
        const now = new Date().getTime()
        const timeSince = now - (window as any).lastTouchEnd || now
        
        if (timeSince < 300 && timeSince > 0) {
          event.preventDefault()
        }
        
        ;(window as any).lastTouchEnd = now
      }, false)

      // Gérer la barre de statut pour iOS
      const metaViewport = document.querySelector('meta[name="viewport"]')
      if (metaViewport) {
        metaViewport.setAttribute('content', 
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
        )
      }

      // Ajouter une classe CSS pour le mode PWA
      document.documentElement.classList.add('pwa-mode')
    }
  }
})
