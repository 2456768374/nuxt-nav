// stores/counter.ts
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  // 仅在客户端加载 localStorage
  if (process.client) {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      count.value = Number(savedCount);
    }

    // 监视 count 的变化，并保存到 localStorage
    watch(count, (newCount) => {
      localStorage.setItem("count", newCount.toString());
    });
  }

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return { count, increment, decrement };
});
