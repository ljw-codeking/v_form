<template>
  <ElInput
    v-bind="$attrs"
    v-on="$listeners"
    @input="handleInput"
    @blur="handleBlur"
  >
  </ElInput>
</template>

<script>
/**
 * 在这里我们把 input 事件去掉 原因是因为保留v-model的input会使事件冲突 我们通过自定义input调用上级 事件进行共鸣
 */

import { setNumberFormat, clearLastPoint } from "@/utils";
import { omit } from "lodash-es";

export default {
  name: "LInput",
  props: {
    isNumber: { type: Boolean, default: false },
    isPoint: { type: Boolean, default: true }, // 是否是小数点输入
    pointLen: { type: Number, default: 2 }, // 小数点长度
  },
  model: {
    prop: "value",
    event: "updateFormDataVal",
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$scopedSlots, this.$slots);
  },
  methods: {
    omit,
    handleInput(val) {
      let { isNumber, isPoint } = this;
      if (isNumber) {
        val = setNumberFormat(val);
      }
      this.$emit("updateFormDataVal", val);
    },
    handleBlur(e) {
      let val = e.target.value;
      let { isNumber } = this;
      if (isNumber) {
        val = clearLastPoint(val);
        this.$emit("updateFormDataVal", val);
      }
    },
  },
};
</script>

<style></style>
