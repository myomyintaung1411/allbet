<template>
  <ul class="message-list flex flex-col items-center justify-center ">
    <li :class="`message-item ${setClass(item.type)}`" v-for="(item, index) in props.messageList" :key="index"
      class=" whitespace-nowrap tracking-widest">
      {{ item.title }}
    </li>
  </ul>
</template>
  
<script  setup>
import { reactive } from 'vue';

//   interface MessageList {
//     type: string;
//     title: string;
//   }

const props = defineProps({
  messageList: {
    type: Array,
    default: [],
  },
});

function setClass(type) {

  if (type === 'info') {
    return 'message-info-item';
  } else if (type === 'wraning') {
    return 'message-wraning-item';
  } else if (type === 'success') {
    return 'message-success-item';
  } else if (type === 'error') {
    return 'message-error-item';
  }

  return '';
}


//   exports.setClass = setClass;
</script>
  
<style  scoped>
.message-list {
  position: fixed;
  left: 50%;
  top: 50%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  color: white;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  padding: 8px 10px;
  z-index: 1000;
}

.message-error-item {
  color: white;
}

.message-info-item {
  /* border: 1px solid #b3d0cf; */
  background-color: #e6f3ff;
  color: white;
}

.message-item {
  display: inline-block;
  padding: 12px 24px;
  /* border: 1px solid #b3d0cf; */
  margin-left: 8px;
  margin-bottom: 12px;
  /* background-color: #e6f3ff; */
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  /* box-shadow: 0 1px 1px 0 hsla(0, 0%, 80.4%, 0.5); */
  border-radius: 2px;
  cursor: default;
  color: white;
}
</style>
