<template>
  <div class="modal-backdrop active">
    <div class="modal-content p-6">
      <div class="flex justify-between mb-6">
        <h3 class="text-2xl font-bold text-primary">实时语音转文字</h3>
        <button @click="$emit('close')"><i class="fa fa-times"></i></button>
      </div>
    </div>
  </div>
</template>