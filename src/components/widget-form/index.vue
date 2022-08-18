<script lang="ts">
import { Component, defineComponent } from "vue";
import { PhBug, PhChatCenteredText, PhLightbulb } from "phosphor-vue";
import FeedbackSelection from "../feedback-selection/index.vue";
import WidgetHeader from "../widget-header/index.vue";
import ScreenShotButton from "../screen-shot-button/index.vue";
type CardType = "THOUGHT" | "IDEA" | "BUG";

interface Card {
  type: CardType;
  title: string;
  icon: Component;
  alt: string;
  description: string;
}

interface FeedbackForm {
  type: string;
  feedback: string;
  screenShot: string;
}

export default defineComponent({
  name: "WidgetForm",
  components: {
    FeedbackSelection,
    WidgetHeader,
    ScreenShotButton,
  },
  data() {
    return {
      feedbackForm: {
        type: "",
        feedback: "",
        screenShot: "",
      },
      selectedType: null,
      cards: [
        {
          type: "BUG",
          title: "Bug",
          icon: PhBug,
          alt: "image of a bug",
          description: "Informar um problema",
        },
        {
          type: "IDEA",
          title: "Melhorias",
          icon: PhLightbulb,
          alt: "image of a Idea",
          description: "Informar uma idéia",
        },
        {
          type: "THOUGHT",
          title: "Outro",
          icon: PhChatCenteredText,
          alt: "image of a thought",
          description: "Informar uma melhoria",
        },
      ],
    } as {
      selectedType: CardType | null;
      cards: Array<Card>;
      feedbackForm: FeedbackForm;
    };
  },
  watch: {
    selectedType(newValue) {
      this.feedbackForm.type = newValue;
    },
  },
  computed: {
    hasSelectedType(): boolean {
      return !!this.selectedType;
    },
    selectedCard(): Card | null {
      return this.cards.find((card) => card.type === this.selectedType) ?? null;
    },
    isValidForm(): boolean {
      const { type, feedback, screenShot } = this.feedbackForm;
      return !!type && !!feedback && !!screenShot;
    },
  },
  methods: {
    handleSelection(cardType: CardType): void {
      this.selectedType = cardType;
    },
    handleClose(): void {
      this.selectedType = null;
    },
    handleReturn(): void {
      this.selectedType = null;
      this.feedbackForm = {
        type: "",
        feedback: "",
        screenShot: "",
      };
    },
    handleCapture(screenShot: string): void {
      this.feedbackForm.screenShot = screenShot;
    },
    handleSubmit(): void {
      console.log(this.feedbackForm);
    },
  },
});
</script>

<template>
  <div
    class="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
  >
    <WidgetHeader
      :card="this.selectedCard"
      @onClose="handleClose"
      @onReturn="handleReturn"
    />

    <div v-if="!hasSelectedType" class="flex py-8 gap-2 w-full">
      <FeedbackSelection
        @onCardSelection="handleSelection"
        :options="this.cards"
      />
    </div>

    <template v-else>
      <form class="my-4 w-full" @submit.prevent="this.handleSubmit()">
        <textarea
          name="feedback"
          v-model="this.feedbackForm.feedback"
          placeholder="Conte com detalhes o que está acontecendo..."
          class="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-600 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scroll-smooth"
        ></textarea>

        <footer class="flex mt-2 gap-2">
          <ScreenShotButton
            v-bind:screenShot="this.feedbackForm.feedback"
            @onCapture="handleCapture"
          />

          <button
            class="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center w-full hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 transition-colors ease-in-out"
            type="submit"
            :disabled="!this.isValidForm"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </template>

    <footer class="text-xs text-neutral-400">
      Feito por
      <a
        class="underline underline-offset-2 hover:text-brand-500 focus:text-brand-500 transition-colors ease-in-out"
        href="https://www.linkedin.com/in/matheus-sunderhus"
        >Matheus Sunderhus</a
      >
    </footer>
  </div>
</template>
