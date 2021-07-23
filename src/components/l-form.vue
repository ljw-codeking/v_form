<template>
  <div>
    <ElForm v-bind="$attrs">
      <template v-for="(formItem, i) in formItemList">
        <LFromItem
          :value="get(value, formItem.prop)"
          @input="handleInput(value, formItem.prop, $event)"
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
  props: {
    value: {},
    formItemList: {},
  },
  created() {
    this.initForm();
  },
  methods: {
    get,
    set,
    initForm() {
      const formData = cloneDeep(this.value);
      this.formItemList.forEach((item) => {
        const { prop, value } = item;
        set(formData, prop, value || get(formData, prop) || "");
      });
      this.$emit("input", formData);
    },
    handleInput(formData, prop, value) {
      console.log(formData, prop, value);
      const obj = set(formData, prop, value);
      this.$emit("input", obj);
    },
  },
};
</script>

<style></style>
