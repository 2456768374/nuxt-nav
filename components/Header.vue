<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-normal h-16">
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
        <nav class="hidden md:ml-6 md:flex md:space-x-8">
          <a
            href="#"
            class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium"
          >
            AI工具集
          </a>
        </nav>
        <!-- 状态栏按钮 -->
        <button
          class="ml-4 md:hidden bg-indigo-600 p-1 rounded-full text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useIsExpandedStore } from "@/stores/site";
const siteStore = useIsExpandedStore();
</script>

<style>
/* 可以在这里添加Vue组件特有的样式 */
</style>
