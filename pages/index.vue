<template>
  <div>
    <nuxt-content :document="intro"/>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const intro = await $content('introduction').fetch()
        return { intro }
    },
}
</script>

<style>

</style>
