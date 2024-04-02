<script lang="ts" setup>
type ButtonProps = { title: any };
const props = defineProps<ButtonProps>();
const { title } = props;
</script>
<template>
  <button>{{ title }}</button>
</template>

<style lang="scss" scoped></style>
