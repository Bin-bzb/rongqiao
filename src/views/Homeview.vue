<template>
  <div class="bg-light font-sans text-dark">
    <!-- 导航栏 -->
    <Navbar />

    <!-- 轮播 -->
    <Carousel />

    <!-- 关于我们 -->
    <section id="about" class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title relative inline-block w-full text-center">
          关于我们
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary mt-2"></span>
        </h2>
        <p class="section-subtitle mt-8">响应国家无障碍教育政策号召，专注听障学生全周期教育场景</p>
        <div class="max-w-4xl mx-auto text-gray-600 text-center leading-relaxed">
          <p class="mb-4">融桥是国内领先的教育场景专属AI手语翻译平台，融合先进技术打造无障碍教育解决方案</p>
          <p>我们致力于打破听障学生的教育沟通壁垒，让每一位学生平等享受优质教育资源</p>
        </div>
      </div>
    </section>

    <!-- 角色入口 -->
    <section id="entry" class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title relative inline-block w-full text-center">角色入口</h2>
        <p class="section-subtitle">选择身份进入专属界面</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div @click="openModal('teacher')" class="bg-white rounded-xl p-8 shadow-lg card-hover cursor-pointer">
            <div class="w-20 h-20 rounded-full bg-primary/10 grid place-items-center text-primary mb-6 mx-auto">
              <i class="fa fa-chalkboard-teacher text-4xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-center mb-4">教师端</h3>
            <p class="text-gray-600 text-center mb-6">双栏布局，全流程辅助课堂教学</p>
            <button class="bg-primary text-white px-6 py-3 rounded-lg">进入教师端</button>
          </div>
          <div @click="openModal('student')" class="bg-white rounded-xl p-8 shadow-lg card-hover cursor-pointer">
            <div class="w-20 h-20 rounded-full bg-secondary/10 grid place-items-center text-secondary mb-6 mx-auto">
              <i class="fa fa-user-graduate text-4xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-center mb-4">学生端</h3>
            <p class="text-gray-600 text-center mb-6">上下分栏，无障碍获取教学内容</p>
            <button class="bg-secondary text-white px-6 py-3 rounded-lg">进入学生端</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能 -->
    <section id="function" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">核心功能</h2>
        <p class="section-subtitle">专为听障教育场景深度打造</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div @click="openModal('voice')" class="bg-white rounded-lg p-6 shadow-sm card-hover cursor-pointer">
            <i class="fa fa-microphone-lines text-2xl text-primary"></i>
            <h3 class="text-xl font-bold mt-4">实时语音转文字（手语）</h3>
            <p class="text-gray-600 mt-2">毫秒级实时翻译，同步生成手语动画</p>
          </div>
          <div @click="openModal('sign')" class="bg-white rounded-lg p-6 shadow-sm card-hover cursor-pointer">
            <i class="fa fa-hands text-2xl text-primary"></i>
            <h3 class="text-xl font-bold mt-4">手语转文字（语音）</h3>
            <p class="text-gray-600 mt-2">精准识别，双向无障碍沟通</p>
          </div>
          <!-- 其余功能卡片，保持原结构 -->
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <Footer />

    <!-- 模态框组件 -->
    <TeacherModal v-if="modalName === 'teacher'" @close="closeModal" />
    <StudentModal v-if="modalName === 'student'" @close="closeModal" />
    <VoiceModal v-if="modalName === 'voice'" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'
import TeacherModal from '../components/TeacherModal.vue'
import StudentModal from '../components/StudentModal.vue'
import VoiceModal from '../components/VoiceModal.vue'

const modalName = ref('')
const openModal = (name) => { modalName.value = name }
const closeModal = () => { modalName.value = '' }
</script>