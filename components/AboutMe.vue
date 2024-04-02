<script setup lang="ts">
const webStore = webData();
const aboutMe = webStore.aboutMe;
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
      </p>
        
        <p class="pt-8 text-sm dark:text-primary-light">Love programming and build application with any language.</p>
    </div>
  </div>
</template>
