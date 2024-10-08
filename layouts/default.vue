<template>
  <div class="flex h-screen bg-gray-100">
    <SideBar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main class="container mx-auto px-6 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>
<style></style>
