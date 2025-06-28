export const usePWA = () => {
  const isPWA = ref(false)

  const checkPWA = () => {
    // Vérifier si l'app est lancée en mode PWA
    isPWA.value = window.matchMedia('(display-mode: standalone)').matches ||
                  (window.navigator as any).standalone ||
                  document.referrer.includes('android-app://')
  }

  const handleNavigation = (event: Event, href: string) => {
    // Si c'est une navigation interne et que nous sommes en PWA
    if (isPWA.value && href.startsWith('/')) {
      event.preventDefault()
      navigateTo(href)
    }
  }

  onMounted(() => {
    checkPWA()
    
    // Empêcher les liens externes de quitter la PWA
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const link = target.closest('a')
      
      if (link && isPWA.value) {
        const href = link.getAttribute('href')
        if (href && href.startsWith('/')) {
          event.preventDefault()
          navigateTo(href)
        }
      }
    })
  })

  return {
    isPWA: readonly(isPWA),
    checkPWA,
    handleNavigation
  }
}
