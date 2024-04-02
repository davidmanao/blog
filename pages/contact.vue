<script setup lang="ts">
import feather from "feather-icons";
const scrollToTop = true;
const contacts: any = [
  {
    id: 1,
    name: "Jakarta, Indonesia",
    icon: "map-pin",
  },
  {
    id: 2,
    name: "email@davidmanao.com",
    icon: "mail",
  },
];
onMounted(async () => {
  feather.replace();
});
onUpdated(() => {
  feather.replace();
});
</script>

<template>
  <div class="container mx-auto flex flex-col-reverse md:flex-row md:py-10 md:mt-20">
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
