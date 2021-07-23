<template>
  <div>
    <button @click="click">点击</button>
  </div>
</template>

<script>
export default {
  name: "csProps",
  props: {
    value: {},
  },
  methods: {
    click() {
      this.value.a = Math.random();
      this.value.b = Math.random();
      this.$emit("input", this.value);
    },
  },
};
</script>

<style></style>
