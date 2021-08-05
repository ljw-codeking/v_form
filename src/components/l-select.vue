<template>
  <ElSelect v-bind="$attrs" v-on="$listeners" @input="handleInput">
    <template v-for="(render, index) in slots">
      <RenderComponent
        :key="index"
        v-if="isRender"
        :data="$data"
        :render="render"
      ></RenderComponent>
      <span v-else :key="index"> {{ render }} </span>
    </template>
    <template v-if="isShowAll">
      <ElOption label="全部" :value="null"></ElOption>
    </template>
    <template v-for="(option, i) in newOptions">
      <ElOption
        :key="i"
        :label="option[config.label] || null"
        :value="option[config.value] || null"
        :disabled="option[config.disabled] || false"
      ></ElOption>
    </template>
  </ElSelect>
</template>

<script>
import RenderComponent from "./render-component";
import { isFunction } from "@/utils";
import http from "@/utils/axios";
const slotsName = ["prefix", "empty"];

/**
 * 请求顺序  request > url > options
 */
export default {
  name: "LSelect",
  components: {
    RenderComponent,
  },
  model: {
    prop: "value",
    event: "updateFormDataVal",
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    config: {
      type: Object,
      default: () => ({
        label: "label",
        value: "value",
        disabled: "disabled",
      }),
    },
    isShowAll: {},
    url: {},
    request: {},
    slots: {
      type: Object,
      validator(slots) {
        return Object.keys(slots).some((slotName) =>
          slotsName.includes(slotName)
        );
      },
    },
    searchParams: { type: Object },
  },
  created() {
    this.isRequest() && this.requestLaunch();
  },
  data() {
    return {
      newOptions: this.options,
    };
  },
  methods: {
    handleInput(val) {
      this.$emit("updateFormDataVal", val);
    },
    isRequest() {
      return this.request || this.url;
    },
    // TODO 兼容请求
    async requestLaunch() {
      const data = await (this.request
        ? this.request(this.searchParams)
        : http(url, { params: searchParams }));
      if (data.code === 0) {
        this.newOptions = data.list;
      }
    },
  },
  computed: {
    isRender({ slots }) {
      return Object.keys(slots).some((slotName) => isFunction(slots[slotName]));
    },
  },
};
</script>

<style>
.el-select {
  width: 100%;
}
</style>
