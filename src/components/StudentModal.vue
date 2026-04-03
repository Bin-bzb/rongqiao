<template>
  <div class="modal-backdrop active">
    <div class="modal-content">
      <div class="bg-secondary text-white px-6 py-4 flex justify-between">
        <h2>学生端 - 课堂学习系统</h2>
        <button @click="$emit('close')"><i class="fa fa-times"></i></button>
      </div>
      <div class="student-layout">学生端内容...</div>
    </div>
  </div>
</template>