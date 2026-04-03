<template>
  <section id="home" class="pt-16 bg-primary min-h-[500px] flex items-center relative">
    <div class="container mx-auto px-4 py-20 text-center relative z-10">
      <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6">融桥 · 听障教育智慧教学平台</h1>
      <a href="#entry" class="bg-secondary text-white px-8 py-3 rounded-full">立即进入</a>
    </div>
    <button @click="prev" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white">
      <i class="fa fa-chevron-left"></i>
    </button>
    <button @click="next" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white">
      <i class="fa fa-chevron-right"></i>
    </button>
    <div class="absolute inset-0 opacity-20">
      <img :src="images[current]" alt="轮播" class="w-full h-full object-cover">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const images = ref([
  'https://picsum.photos/id/20/1920/1080',
  'https://picsum.photos/id/24/1920/1080',
  'https://picsum.photos/id/3/1920/1080'
])
const current = ref(0)
const prev = () => current.value = (current.value - 1 + images.value.length) % images.value.length
const next = () => current.value = (current.value + 1) % images.value.length

onMounted(() => setInterval(next, 5000))
</script>