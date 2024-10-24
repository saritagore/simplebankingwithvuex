<template>
    <button :class="mode" :disabled="mode==='disabled'">
        <slot></slot>
    </button>   
</template>
<script>
export default{
  props:['mode']
}
</script>
<style scoped>
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.5rem 0.80rem;
  border-radius: 15px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
.disabled{
  background-color: #4b4d4f;
  color: white;
  cursor: default;
}
</style>