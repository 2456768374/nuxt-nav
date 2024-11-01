<template>
  <div>
    种类名称
  </div>
  <div class="flex flex-wrap gap-2 mb-8 justify-center">
    <button
        v-for="category in categories"
        :key="category.id"
        @click="selectedCategory = category.id"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          selectedCategory === category.id
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-100'
        ]"
      >
        {{ category.label }}
      </button>
  </div>
  <div class="flex flex-wrap gap-6">
    <div
        v-for="tool in filteredTools"
        :key="tool.id"
        class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
      >
        <div class="flex items-start space-x-4">
          <img :src="tool.icon" :alt="tool.name" class="w-10 h-10 rounded-lg"/>
          <h3 class="font-semibold text-gray-900">{{ tool.name }}</h3>
          <p class="text-sm text-gray-600 mt-1">{{ tool.description }}</p>
        </div>
        
      </div>
  </div>

  
</template>

<script lang="ts" setup>
const categories = [
  { id: "common", label: "常用AI图像工具" },
  { id: "drawing", label: "AI图片描画生成" },
  { id: "background", label: "AI图片背景移除" },
  { id: "upscale", label: "AI图片无损放大" },
  { id: "repair", label: "AI图片优化修复" },
  { id: "object", label: "AI图片物体抹除" },
  { id: "product", label: "AI商品图生成" },
];

const tools = [
  {
    id: "stable",
    name: "稳定AI",
    description: "一站式AI设计工具集",
    icon: "https://placehold.co/40",
    category: "common"
  },{
    id: "stable",
    name: "稳定AI",
    description: "一站式AI设计工具集",
    icon: "https://placehold.co/40",
    category: "common"
  },{
    id: "stable",
    name: "稳定AI",
    description: "一站式AI设计工具集",
    icon: "https://placehold.co/40",
    category: "common"
  },{
    id: "stable",
    name: "稳定AI",
    description: "一站式AI设计工具集",
    icon: "https://placehold.co/40",
    category: "common"
  },{
    id: "stable",
    name: "稳定AI",
    description: "一站式AI设计工具集",
    icon: "https://placehold.co/40",
    category: "common"
  },{
    id: "stable",
    name: "稳定AI",
    description: "一站式AI设计工具集",
    icon: "https://placehold.co/40",
    category: "common"
  },
  {
    id: "seaart",
    name: "海艺AI",
    description: "免费AI绘画生成器",
    icon: "https://placehold.co/40",
    category: "drawing"
  },
  {
    id: "meitu",
    name: "美图AI抠图",
    description: "美图AI推出的免费智能抠图工具",
    icon: "https://placehold.co/40",
    category: "background"
  },
];

const selectedCategory = ref("common");

const filteredTools = computed(() => {
  return tools.filter(tool => tool.category === selectedCategory.value);
});
</script>

<style>

</style>