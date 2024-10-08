import { defineStore } from "pinia";
import { ref } from "vue";

export const useIsExpandedStore = defineStore("isExpanded", {
  state: () => ({
    isExpanded: true,
  }),
  actions: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
  },
});
