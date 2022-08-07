<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import html2canvas from "html2canvas";

export default defineComponent({
  name: "ScreenShotButton",
  data() {
    return {
      screenShot: "",
      loading: false,
    } as { screenShot: string; loading: boolean };
  },
  methods: {
    async handleTakeScreenShot() {
      const userAppScreen = document.querySelector("html");
      if (!userAppScreen) {
        return;
      }
      this.loading = true;
      const canvas = await html2canvas(userAppScreen);
      this.screenShot = canvas.toDataURL("image/png");
      this.$emit("onCapture", this.screenShot);
      this.loading = false;
    },
    handleClearScreenShot() {
      this.screenShot = "";
      this.$emit("onCapture", "");
    },
  },
  computed: {
    isLoading(): boolean {
      return !!this.loading;
    },
    hasScreenShot(): boolean {
      return !!this.screenShot;
    },
  },
  emits: ["onCapture"],
});
</script>

<template>
  <button
    v-if="this.hasScreenShot"
    @click="this.handleClearScreenShot()"
    class="relative w-10 h-10 bg-zinc-800 rounded-[4px] overflow-hidden border-transparent hover:bg-zinc-700 transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
  >
    <img
      class="w-full h-full object-cover object-center"
      :src="this.screenShot"
      alt="screen-shot"
    />
    <PhTrash weight="fill" class="absolute bottom-1 right-1" />
  </button>

  <button
    v-else
    @click="this.handleTakeScreenShot()"
    type="button"
    class="p-2 bg-zinc-800 rounded-[4px] border-transparent hover:bg-zinc-700 transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
  >
    <PhCircleNotch
      v-if="this.isLoading"
      class="w-6 h-6 text-zinc-100 animate-spin"
    />
    <PhCamera v-else class="w-6 h-6 text-zinc-100" />
  </button>
</template>
