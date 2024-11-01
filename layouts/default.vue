<template>
  <div class="flex h-screen bg-gray-100">
    <SideBar class="h-full"/>
    <div class="flex-1 flex flex-col overflow-hidden"><!-- overflow-hidden防止整个页面滚动 -->
      <Header />
      <main class="flex-1 overflow-auto container mx-auto px-6 py-8"><!-- overflow-auto允许主内容部分滚动 -->
        <slot />
      </main>
    </div>
  </div>
</template>
<style></style>
