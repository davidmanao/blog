<script setup lang="ts">
const props = defineProps({
  currentPage: {
    required: true,
    type: String,
  },
  totalPages: {
    required: true,
    type: String,
  },
});
const { currentPage, totalPages } = toRefs(props);
const prevPage = computed(() => parseInt(currentPage.value) - 1 > 0);
const nextPage = computed(
  () => parseInt(currentPage.value) + 1 <= parseInt(totalPages.value)
);
</script>
<template>
  <div class="space-y-2 pt-6 pb-8 md:space-y-5">
    <nav class="flex justify-between">
      <button
        v-show="!prevPage"
        rel="previous"
        class="cursor-auto disabled:opacity-50"
        :disabled="!prevPage"
      >
        Previous
      </button>
      <NuxtLink
        v-show="prevPage"
        :href="
          parseInt(currentPage) - 1 === 1
            ? `/post/`
            : `/post/page/${parseInt(currentPage) - 1}`
        "
      >
        <button rel="previous">Previous</button>
      </NuxtLink>
      <span> {{ currentPage }} of {{ totalPages }} </span>
      <button
        v-show="!nextPage"
        rel="next"
        class="cursor-auto disabled:opacity-50"
        :disabled="!nextPage"
      >
        Next
      </button>
      <NuxtLink v-show="nextPage" :href="`/post/page/${currentPage + 1}`">
        <button rel="next">Next</button>
      </NuxtLink>
    </nav>
  </div>
</template>
