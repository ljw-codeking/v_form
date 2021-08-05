<template>
  <div id="app">
    <LForm ref="formData" v-model="formData" v-bind="formConfig" />
    <ElButton @click="clear">清除</ElButton>
  </div>
</template>

<script>
import { set } from "lodash-es";
import LForm from "./components/l-form.vue";
const formConfig = {
  labelWidth: "80px",
  formItemList: [
    {
      label: "ljw:",
      tag: "select",
      prop: "name",
      value: "1",
      options: [
        { label: "cs1", value: "1" },
        { label: "cs2", value: "2" },
        { label: "cs3", value: "3" },
      ],
      slots: {
        prefix: "xxxxxxxxxx",
      },
    },
    {
      label: "name:",
      tag: "input",
      prop: "person.name",
      maxlength: "10",
      "show-word-limit": true,
      isNumber: false,
    },
    {
      tag: "input",
      label: "age:",
      prop: "person.age",
      maxlength: "10",
      "show-word-limit": true,
      isNumber: true,
    },
  ],
};
const initFormData = () => {
  const formData = {};
  formConfig.formItemList.forEach((item) => {
    const { prop, value } = item;
    set(formData, prop, value || "");
  });
  return formData;
};
const formData = initFormData();
export default {
  name: "App",
  components: {
    LForm,
  },
  data() {
    return {
      formData,
      formConfig,
    };
  },
  methods: {
    clear() {
      this.$refs.formData.resetFields();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
