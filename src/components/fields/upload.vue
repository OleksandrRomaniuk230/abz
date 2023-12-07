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
  modelValue: {
    type: [String, Number],
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

//variables
let fileText = ref("");

//methods
const handleInput = (e) => {
  handleChange(e.target.value);
  fileText.value = e.target.files[0].name;
  emit("update:modelValue", e.target.files[0]);
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
    class="input-upload form-group"
    :class="{
      'has-error': !meta.valid && errorMessage,
    }"
  >
    <label class="input-upload__label">
      <input type="file" accept="image/*" :name="name" @change="handleInput" />
      <span class="input-upload__btn">Upload</span>
      <span class="input-upload__file">{{
        modelValue ? fileText : "Upload your photo"
      }}</span>
    </label>
    <div v-if="errorMessage" class="errors">
      <p class="input-upload__text">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
