<script setup lang="ts">
const DEFAULT_LAYOUT = "post";
const { path } = useRoute();
const { data: post } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

const [prev, next] = await queryContent("blog")
  .only(["_path", "title"])
  .sort({ date: -1 })
  .findSurround(path);
</script>
<template>
  <NuxtLayout
    :name="post?.layout || DEFAULT_LAYOUT"
    :post="post"
    :next="next"
    :prev="prev"
  >
  </NuxtLayout>
</template>
