<template>
  <DemoExamplePage01 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoExamplePage01 from './components/DemoExamplePage01.vue';

export default defineComponent({
  name: 'App',
  components: {
    DemoExamplePage01
  }
});
</script>

<style>
canvas {
width:70%;
height:70%;
}
</style>
