<template>
  <header id="navbar" class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm transition-all shadow-sm">
    <div class="container mx-auto px-4 flex justify-between items-center h-16">
      <span class="text-2xl font-bold text-primary">融桥</span>
      <nav class="hidden md:flex space-x-8">
        <a href="#home" class="nav-active h-16 flex items-center">首页</a>
        <a href="#about" class="text-gray-600 hover:text-primary">关于平台</a>
        <a href="#entry" class="text-gray-600 hover:text-primary">角色入口</a>
      </nav>
      <button @click="mobileMenu = !mobileMenu" class="md:hidden">
        <i class="fa fa-bars text-xl"></i>
      </button>
    </div>
    <div v-show="mobileMenu" class="md:hidden bg-white border-t">
      <div class="container px-4 py-3 space-y-3">
        <a href="#home" class="block py-2">首页</a>
        <a href="#about" class="block py-2">关于平台</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const mobileMenu = ref(false)
const navbar = ref(null)

const handleScroll = () => {
  if (navbar.value) {
    navbar.value.classList.toggle('shadow-md', window.scrollY > 50)
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>