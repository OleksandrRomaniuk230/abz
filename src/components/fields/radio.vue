<script setup>
//emits
const emit = defineEmits(["update:modelValue"]);

//props
const props = defineProps({
  modelValue: {
    type: [String, Boolean, Number],
    default: "",
  },
  label: {
    type: String,
    default: "label",
  },
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

//methods
function changeValue(e) {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <label class="radio">
    <div class="radio__input">
      <input
        type="radio"
        @change="changeValue"
        :name="name"
        :value="value"
        :modelValue="modelValue"
        :checked="modelValue == value"
      />
      <span class="radio__custom"></span>
    </div>
    <span v-if="label" class="radio__label">{{ label }}</span>
  </label>
</template>
