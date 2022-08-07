<script>
import { PopoverButton } from "@headlessui/vue";
export default {
  name: "CloseButton",
  components: {
    PopoverButton,
  },
};
</script>

<template>
  <PopoverButton
    class="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
    title="Fechar formulário"
  >
    <PhX weight="bold" class="w-4 h-4" />
  </PopoverButton>
</template>
