<template>
  <Widget />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Widget from "@/components/widget/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Widget,
  },
});
</script>
