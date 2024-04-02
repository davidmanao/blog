<script setup lang="ts">
const webStore = webData();
const categories = webStore.categories;

const emit = defineEmits<{
  (e: "closeNav", event: MouseEvent): void;
}>();
const isOpen = ref(false);
const modal = ref(false);
const showModal = () => {
  if (modal.value) {
    // Stop screen scrolling
    document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden");
    modal.value = false;
  } else {
    document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden");
    modal.value = true;
  }
};
const closeNav = () => {
  isOpen.value = false;
};
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <div>
          <NuxtLink to="/">
            <img
              v-if="$colorMode.value == 'dark'"
              src="/logodark.png"
              class="w-36"
              alt="Light Logo"
            />

            <img v-else src="/logowhite.png" alt="Color Logo" class="w-36" />
          </NuxtLink>
        </div>

        <!-- Theme switcher small screen -->
        <button
          @click="$colorMode.preference = $colorMode.value == 'light' ? 'dark' : 'light'"
          class="sm:hidden ml-8 bg-primary-light dark:bg-ternary-dark px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm rounded-xl cursor-pointer"
        >
          <IconDarkLight />
        </button>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <IconHamburger :isOpen="isOpen" />
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppNavigation
        :isOpen="isOpen"
        :showModal="showModal"
        :modal="modal"
        :categories="categories"
        @closeNav="() => closeNav()"
      />

      <!-- Header right section buttons -->
      <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
        <!-- Theme switcher large screen -->
        <button
          @click="$colorMode.preference = $colorMode.value == 'light' ? 'dark' : 'light'"
          class="sm:ml-6 bg-primary-light dark:bg-ternary-dark px-2 py-2 shadow-sm rounded-lg cursor-pointer"
        >
          <IconDarkLight />
        </button>
      </div>
    </div>
  </nav>
</template>
