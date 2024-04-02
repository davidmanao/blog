<script setup lang="ts">
const allPosts = await queryContent("blog").find();
const {
  params: { tag },
} = useRoute();
const filteredPosts = computed(() =>
  allPosts.filter(
    (post) =>
      post.draft !== true && post.tags.map((t: string) => kebabCase(t)).includes(tag)
  )
);
</script>
<template>
  <NuxtLayout name="list" :title="tag" :posts="filteredPosts" :pagination="false">
  </NuxtLayout>
</template>
