
<script setup>
/* imports */
import { Mask } from "maska"

/* props */
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});



/* local variables */
const mask = new Mask({ mask: "+38 (###) ### - ## - ##" })
</script>
<template>
  <div class="card">
    <nuxt-img
      :src="data.photo || '/images/icons/user.svg'"
      placeholder="/images/icons/user.svg"
      loading="lazy"
      width="70"
      height="70"
      alt="User"
      class="card__user"
    />
    <p :hover-tooltip="data.name">
      <span class="card__text">{{ data.name }}</span>
    </p>
    <div class="card__info">
      <p :hover-tooltip="data.position">
        <span class="card__text">{{ data.position }}</span>
      </p>
      <NuxtLink
        :to="`mailto:${data.email}`"
        :hover-tooltip="data.email"
        class="link"
        ><span class="link card__text">{{ data.email }}</span></NuxtLink
      >
      <NuxtLink to="tel:+380982789024" :hover-tooltip="data.phone" class="link"
        ><span class="card__text">{{mask.masked(data.phone)  }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
