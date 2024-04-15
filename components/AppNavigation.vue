<script lang="ts" setup>
type NavigationProps = {
  isOpen: boolean;
  showModal: any;
  modal: any;
  categories: any;
};
const props = defineProps<NavigationProps>();
const { categories, isOpen, showModal, modal } = toRefs(props);
</script>

<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="font-general-regular m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <RouteLink
      @click.prevent="$emit('closeNav')"
      to="/about"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Me"
      >About Me
    </RouteLink>
    <RouteLink
      @click.prevent="$emit('closeNav')"
      to="/contact"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Contact
    </RouteLink>
    <RouteLink
      @click.prevent="$emit('closeNav')"
      to="/blog"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Blog"
      >Blog
    </RouteLink>
    <div
      class="font-general-regular border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <button
        class="invisible sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2"
        @click="showModal()"
        aria-label="Hire Me Button"
      >
        Hire Me
      </button>
    </div>
  </div>
</template>
