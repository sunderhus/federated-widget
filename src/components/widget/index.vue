<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import WidgetForm from "../widget-form/index.vue";

export default {
  name: "Widget",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    WidgetForm,
  },
};
</script>

<template>
  <Popover
    data-testid="popover"
    class="absolute flex flex-col items-end bottom-4 right-4 md:bottom-8 md:right-8"
  >
    <PopoverPanel>
      <WidgetForm></WidgetForm>
    </PopoverPanel>
    <PopoverButton
      class="bg-brand-500 rounded-full h-12 px-3 text-white flex items-center group"
    >
      <ph-chat-teardrop-dots class="w-6 h-6" weight="bold" />
      <span
        class="max-w-0 text-transparent overflow-hidden transition-all duration-400 ease-linear group-hover:max-w-xs group-hover:text-white"
      >
        <span class="pl-2" />
        feedback
      </span>
    </PopoverButton>
  </Popover>
</template>

<style lang="scss" scoped></style>
