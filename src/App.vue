<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <LForm v-model="formModel" v-bind="formConfig" />
    <cs v-model="obj"></cs>
  </div>
</template>

<script>
import LForm from "./components/l-form.vue";
import Flex from "./components/flex.vue";
import cs from "./components/csProps.vue";

export default {
  name: "App",
  components: {
    LForm,
    Flex,
    cs,
  },
  data() {
    return {
      formModel: {},
      formConfig: {
        labelWidth: "80px",
        formItemList: [
          {
            label: "ljw:",
            prop: "name",
            maxlength: "10",
            "show-word-limit": true,
            isNumber: true,
            value: 123,
          },
          {
            label: "name:",
            prop: "person.name",
            maxlength: "10",
            "show-word-limit": true,
            isNumber: false,
          },
          {
            label: "age:",
            prop: "person.age",
            maxlength: "10",
            "show-word-limit": true,
            isNumber: true,
          },
        ],
      },
      obj: {
        a: 1,
      },
      obj2: {},
    };
  },
  created() {
    this.obj2 = this.obj;
  },
  watch: {
    "obj.a": function() {
      console.log(this.obj2 === this.obj);
    },
    "obj.b": function() {
      console.log(this.obj2 === this.obj);
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
