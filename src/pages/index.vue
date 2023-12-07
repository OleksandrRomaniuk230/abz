<script setup>
/* imports */
import { serialize } from "object-to-formdata";
/* global variables */
const config = useRuntimeConfig();
const token = useCookie("token");

/*local  variables */
let form = ref({
    name: "",
    email: "",
    phone: "",
    position_id: "1",
    photo: null,
  }),
  positionsArr = ref([]),
  formRef = ref(null),
  loading = ref(false),
  count = ref(6);

//useAsyncData
const { data, refresh, pending } = await useAsyncData(
  `getUsers`,
  () =>
    $fetch(config.public.API_BASE_URL + "/users", {
      params: { count: count.value },
    }),
  { watch: [count] }
);
/* API */
async function getPositions() {
  try {
    let { positions } = await $api().positions.getPositions();
    positionsArr.value = positions;
  } catch (e) {
    console.error(e.data.message);
  }
}
async function getToken() {
  try {
    let data = await $api().token.getToken();
    token.value = data.token;
  } catch (e) {
    console.error(e.data.message);
  }
}
async function onSubmit() {
  loading.value = true;
  try {
    const formData = serialize({
      ...form.value,
      phone: "+" + form.value.phone.replace(/\D/g, ""),
    });
    await $api().users.sentUsers(formData);
    formRef.value.resetForm();
    clearForm();
    refresh();
  } catch (e) {
    formRef.value.setErrors(e.data.fails);
  } finally {
    loading.value = false;
  }
}
/* methods */
function moreItems() {
  count.value = count.value + 6;
}
function clearForm() {
  form.value = {
    name: "",
    email: "",
    phone: "",
    position_id: "1",
    photo: null,
  };
}
/* computed */
const disabledBtn = computed(() => {
  return (
    form.value.name && form.value.email && form.value.phone && form.value.photo
  );
});

/* hooks */
onMounted(() => {
  getPositions();
  getToken();
});
</script>
<template>
  <main class="home">
    <section class="home__content container">
      <!-- nuxt-img and format webp for image optimization -->
      <nuxt-img
        src="/images/bg.webp"
        loading="lazy"
        width="1170"
        height="650"
        alt="Background"
        class="home__img"
      />
      <div class="home__bg">
        <div class="home__info">
          <h1 class="title home__title">
            Test assignment for front-end developer
          </h1>
          <p class="home__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <a href="#registration" class="btn">Sign up</a>
        </div>
      </div>
    </section>
    <WrapperLoader v-model="pending">
      <section class="home__request container" id="users">
        <h2 class="title">Working with GET request</h2>
        <div class="home__users">
          <BlockCard v-for="user in data.users" :key="user.id" :data="user" />
        </div>
        <button
          v-if="data.page < data.total_pages"
          class="btn"
          @click="moreItems"
        >
          Show more
        </button>
      </section>
    </WrapperLoader>
    <WrapperLoader v-model="loading">
      <section class="home__request container" id="registration">
        <h2 class="title">Working with POST request</h2>
        <vee-form ref="formRef" class="form">
          <div class="form__wrapper">
            <FieldsInput
              v-model="form.name"
              placeholder="Your name"
              label="Your name"
              name="name"
            />
            <FieldsInput
              v-model="form.email"
              placeholder="Email"
              label="Email"
              name="email"
            />
            <FieldsInputPhone
              v-model="form.phone"
              placeholder="Phone"
              label="Phone"
              name="phone"
              mask="+38 (0##) ### - ## - ##"
            />
          </div>
          <div class="form__options">
            <h2 class="title--small form__title">Select your position</h2>
            <div class="form__options-wrapper">
              <FieldsRadio
                v-for="position in positionsArr"
                :key="position.id"
                v-model="form.position_id"
                :label="position.name"
                :value="position.id"
                name="position"
              />
            </div>
          </div>
          <FieldsUpload
            v-model="form.photo"
            class="form__upload"
            name="photo"
          />
        </vee-form>
        <button class="btn" :disabled="!disabledBtn" @click="onSubmit">
          Sign up
        </button>
      </section>
    </WrapperLoader>
  </main>
</template>

