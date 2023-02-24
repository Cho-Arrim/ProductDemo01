<template>
  <div>
    <h3>DemoProduct1</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { DemoProduct01 } from '@/DemoPages/DemoProduct01';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DemoExamplePage01',
  
  mounted()
  {
    const canvas = document.querySelector("canvas")!;

    new DemoProduct01(canvas);
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
