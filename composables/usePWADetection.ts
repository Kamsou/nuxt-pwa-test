export const usePWADetection = () => {
  const isPWAMode = ref(false)

  const checkPWAMode = () => {
    if (process.client) {
      isPWAMode.value = !!(window.matchMedia('(display-mode: standalone)').matches ||
                        ('standalone' in window.navigator && (window.navigator as any).standalone) ||
                        document.referrer.includes('android-app://') ||
                        window.location.search.includes('source=pwa'))
    }
  }

  onMounted(() => {
    checkPWAMode()
  })

  return {
    isPWAMode: readonly(isPWAMode),
    checkPWAMode
  }
}
