<template>
  <div>
    <ElForm :model="formData" :ref="formRef" v-bind="$attrs">
      <template v-for="(formItem, i) in formItemList">
        <LFromItem
          :value="get(formData, formItem.prop)"
          @updateFormDataVal="handleChange(formData, formItem.prop, $event)"
          v-bind="formItem"
          :key="'form_item_' + i"
        ></LFromItem>
      </template>
    </ElForm>
  </div>
</template>

<script>
import LFromItem from "./l-form-item.vue";
import { set, get, cloneDeep } from "lodash-es";

export default {
  name: "LForm",
  components: {
    LFromItem,
  },
  model: {
    prop: "formData",
    event: "updateFormData",
  },
  props: {
    formData: {},
    formItemList: {},
    formRef: {
      type: String,
      default: "formData",
    },
  },
  methods: {
    get,
    set,

    handleChange(formData, prop, value) {
      const newFormData = set(formData, prop, value);
      this.$emit("updateFormData", newFormData);
    },

    async submit(cb) {
      await this.validate();
      cb && cb(this.formData);
    },

    validate() {
      return this.form.validate();
    },

    resetFields(props = undefined) {
      console.log(this.$refs[this.formRef].clearValidate);
      this.$refs[this.formRef].clearValidate(props);
    },

    resetFields() {
      this.$refs[this.formRef].resetFields();
    },
  },
  computed: {
    form() {
      this.$refs[this.formRef];
    },
  },
};
</script>

<style></style>
