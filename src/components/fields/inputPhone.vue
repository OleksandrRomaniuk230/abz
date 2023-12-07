<script setup>
//imports
import { useField } from "vee-validate";

//emits
const emit = defineEmits(["update:modelValue"]);

//props
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  mask: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

//methods
const handleInput = (e) => {
  handleChange(e.target.value);
  emit("update:modelValue", e.target.value);
};

//validation
const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});
</script>
<template>
  <div
    class="input form-group"
    :class="{
      'has-error': !meta.valid && errorMessage,
    }"
  >
    <label class="input__label" :class="{ active: !meta.valid && errorMessage }">{{
      label
    }}</label>
    <input
      type="text"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
      v-maska
      :data-maska="mask"
    />
    <p v-if="!errorMessage" class="input__text">+38 (XXX) XXX - XX - XX</p>
    <div v-else class="errors">
      <p class="input__text">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
