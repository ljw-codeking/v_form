<template>
  <ElFormItem :prop="prop" :label="label">
    <LInput v-bind="$attrs" v-on="$listeners"> </LInput>
  </ElFormItem>
</template>

<script>
import LInput from "./l-input.vue";

export default {
  name: "LFromItem",
  components: {
    LInput,
  },
  props: {
    prop: String,
    label: String,
    rules: {},
  },
};
</script>

<style></style>
