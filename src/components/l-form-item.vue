<template>
  <ElFormItem :prop="prop" :label="label" :rules="rules">
    <LInput v-if="tag === 'input'" v-bind="$attrs" v-on="$listeners"> </LInput>
    <LSelect
      v-if="tag === 'select'"
      v-bind="$attrs"
      v-on="$listeners"
    ></LSelect>
  </ElFormItem>
</template>

<script>
import LInput from "./l-input.vue";
import LSelect from "./l-select.vue";

export default {
  name: "LFromItem",
  components: {
    LInput,
    LSelect,
  },
  props: {
    prop: String,
    label: String,
    rules: {},
    event: {},
    tag: {},
  },
};
</script>

<style></style>
