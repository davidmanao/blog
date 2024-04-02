<template>
  <div class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col">
    <NuxtLayout>
      <!-- App header -->
      <AppHeader />
      <NuxtLoadingIndicator />
      <NuxtPage />
      <!-- App footer -->
      <AppFooter />

      <!-- Go back to top when scrolled down -->
      <div
        class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4"
      >
        <BackToTop />
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'David Manao',
  meta: [
    { name: 'description', content: 'David Manao.' }
  ]
})
</script>