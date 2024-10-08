<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-4">每日推荐</h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <div
        v-for="(item, index) in recommendations"
        :key="index"
        class="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <img :src="item.image" :alt="item.title" class="w-full h-auto" />
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2"
        >
          <h3 class="text-white text-sm font-semibold">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const recommendations = ref([
  // 示例数据
  { title: "每日AI快讯", image: "/daily-news.jpg" },
  { title: "AI交流群", image: "/ai-community.jpg" },
  { title: "免费的AI视频生成工具", image: "/ai-video-tool.jpg" },
  { title: "10个AI论文神器", image: "/ai-paper-tools.jpg" },
  { title: "AI初创公司融资数据", image: "/ai-startup-funding.jpg" },
  // 更多推荐项...
]);
</script>

<style>
/* 这里可以添加你的CSS样式 */
</style>
