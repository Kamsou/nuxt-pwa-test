<template>
  <div>
    <header style="padding: 1rem; background: #333; color: white;">
      <nav>
        <NuxtLink to="/" style="margin-right: 1rem; color: white; text-decoration: none;">
          Accueil
        </NuxtLink>
        <NuxtLink to="/about" style="color: white; text-decoration: none;">
          À propos
        </NuxtLink>
      </nav>
    </header>
    <main style="padding: 1rem;">
      <slot />
    </main>
  </div>
</template>
