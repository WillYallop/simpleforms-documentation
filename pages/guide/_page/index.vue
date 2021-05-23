<template>
    <div>
        <nuxt-content :document="guide"/>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const guide = await $content('guide', params.page).fetch()
        return { guide }
    }
}
</script>

<style>

</style>
