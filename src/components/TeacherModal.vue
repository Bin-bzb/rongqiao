<template>
  <div class="modal-backdrop active">
    <div class="modal-content">
      <div class="bg-primary text-white px-6 py-4 flex justify-between">
        <h2>教师端 - 课堂教学系统</h2>
        <button @click="$emit('close')"><i class="fa fa-times"></i></button>
      </div>
      <!-- 复用原HTML交互逻辑 -->
      <div class="teacher-layout">
        <div class="teacher-main">教师端内容...</div>
        <div class="teacher-sidebar">侧边栏...</div>
      </div>
    </div>
  </div>
</template>