<script setup>
</script>
<template>
  <header class="header">
    <div class="header__content container">
      <NuxtLink to="/">
        <!-- nuxt-img and format webp for image optimization -->
        <nuxt-img
          src="/images/icons/logo.svg"
          loading="lazy"
          width="104"
          height="26"
          alt="logo"
          class="header__logo"
        />
      </NuxtLink>
      <div class="header__wrapper">
        <a href="#users" class="btn">Users</a>
        <a href="#registration" class="btn">Sign up</a>
      </div>
    </div>
  </header>
</template>
