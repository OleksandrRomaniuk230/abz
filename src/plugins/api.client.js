export default defineNuxtPlugin(() => {

  const config = useRuntimeConfig();
  const token = useCookie("token");

  const axiosSettings = $fetch.create({
    headers: {
      Token: token.value
    },
    baseURL: config.public.API_BASE_URL,
  })


  return {
    provide: {
      apiSettings: axiosSettings

    }
  }
})
