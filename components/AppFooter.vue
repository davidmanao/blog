<script>
import FooterCopyright from "./FooterCopyright.vue";
import feather from "feather-icons";
export default {
  components: { FooterCopyright },
  data: () => {
    return {
      // Todo
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
  </div>
</template>

<style scoped></style>
