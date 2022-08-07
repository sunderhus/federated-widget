import { TranslationKeys } from "./plugins/i18n";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $translate: (
      keyToTranslate: keyof TranslationKeys,
      content?: Array<any>
    ) => string;
  }
}
