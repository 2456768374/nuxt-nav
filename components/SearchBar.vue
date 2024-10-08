<template>
  <div class="mt-8 mb-12">
    <form @submit.prevent="handleSearch">
      <input
        type="text"
        placeholder="站内AI工具搜索"
        :value="searchTerm"
        @input="searchTerm = $event.target.value"
        class="w-full h-14 pl-12 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
      />
      <button
        type="submit"
        class="absolute inset-y-0 left-0 pl-3 flex items-center"
      >
        <svg
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
    <div class="mt-2 flex justify-center space-x-4 text-sm text-gray-500">
      <span>站内</span>
      <span>Bing</span>
      <span>百度</span>
      <span>Google</span>
      <span>Perplexity</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchTerm = ref("");

const handleSearch = (event) => {
  // 处理搜索逻辑
  console.log("搜索:", searchTerm.value);
  event.preventDefault();
};
</script>

<style>
/* 这里可以添加你的CSS样式 */
</style>
