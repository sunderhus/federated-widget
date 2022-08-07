<script lang="ts">
import { Component, defineComponent, PropType } from "vue";

type CardType = "THOUGHT" | "IDEA" | "BUG";
interface Card {
  type: CardType;
  title: string;
  icon: Component;
  alt: string;
  description: string;
}

export default defineComponent({
  name: "FeedbackSelection",
  props: {
    options: {
      type: Object as PropType<Card[]>,
      required: true,
    },
  },
  methods: {
    handleClick(card: CardType) {
      this.$emit("onCardSelection", card);
    },
  },
  emits: ["onCardSelection"],
});
</script>

<template class="flex flex-col items-center w-100">
  <template v-for="card in this.options" :key="card.title">
    <button
      type="button"
      @click="handleClick(card.type)"
      class="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none group transition-colors ease-in-out"
    >
      <component
        :is="card.icon"
        class="text-neutral-100 text-2xl group-hover:text-brand-500 group-focus:text-brand-500 transition-colors ease-in-out"
      />
      <span>{{ card.title }}</span>
    </button>
  </template>
</template>
