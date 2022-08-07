<script lang="ts">
import { Component, defineComponent, PropType } from "@vue/runtime-core";
import CloseButton from "../close-button/index.vue";

type Card = {
  title: string;
  icon: Component;
};
export default defineComponent({
  name: "WidgetHeader",
  components: {
    CloseButton,
  },
  props: {
    card: {
      type: Object as PropType<Card>,
    },
  },
  computed: {
    headerTitle() {
      return this.card ? this.card.title : "Deixe seu feedback";
    },
    headerIcon() {
      return this.card?.icon || null;
    },
  },
  emits: ["onClose", "onReturn"],
});
</script>

<template>
  <button
    v-if="this.card"
    type="button"
    @click="this.$emit('onReturn')"
    class="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
  >
    <PhArrowLeft weight="bold" class="h-4 w-4" />
  </button>

  <header>
    <span class="text-xl leading-6 flex items-center gap-2">
      <component class="text-brand-500 h-6 w-6" :is="headerIcon" />
      {{ headerTitle }}
    </span>
    <CloseButton @click="this.$emit('onClose')" />
  </header>
</template>
