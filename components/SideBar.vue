<template>
  <aside :class="sidebarClass">
    <div class="h-full flex flex-col">
      <div class="h-16 flex items-center justify-between px-4">
        <span class="text-xl font-bold">菜单</span>
        <button
          @click="siteStore.toggleExpanded"
          class="p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav class="flex-1 overflow-y-auto">
        <ul class="p-2 space-y-2">
          <li v-for="(item, index) in menuItems" :key="index">
            <a
              href="#"
              class="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <img
                :src="`/icon-${index + 1}.svg`"
                width="24"
                height="24"
                class="mr-3"
              />
              <span v-if="siteStore.isExpanded">{{ item }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from "vue";
import { useIsExpandedStore } from "@/stores/site";
const menuItems = ref([
  "AI应用集",
  "AI写作工具",
  "AI图像工具",
  "AI视频工具",
  "AI办公工具",
  "AI设计工具",
  "AI对话聊天",
  "AI编程工具",
  "AI搜引擎",
  "AI音频工具",
  "AI开发平台",
  "AI训练模型",
  "AI语音翻译",
  "AI法律助手",
  "AI内容检测",
  "AI提示指令",
  "AI模型评测",
  "AI学习网站",
]);
const siteStore = useIsExpandedStore();

const sidebarClass = computed(() => {
  return `bg-white shadow-md transition-all duration-300 ease-in-out ${
    siteStore.isExpanded ? "w-64" : "w-20"
  }`;
});
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
