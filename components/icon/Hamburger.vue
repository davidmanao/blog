<script lang="ts" setup>
type HamburgerProps = {
  isOpen: boolean;
};
const props = defineProps<HamburgerProps>();
const { isOpen } = toRefs(props);
</script>
<template>
  <svg
    v-if="isOpen"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="h-7 w-7 mt-1 fill-current text-secondary-dark dark:text-ternary-light"
  >
    <path
      fill-rule="evenodd"
      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
      clip-rule="evenodd"
    ></path>
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="h-7 w-7 mt-1 fill-current text-secondary-dark dark:text-ternary-light"
  >
    <path
      fill-rule="evenodd"
      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    ></path>
  </svg>
</template>
