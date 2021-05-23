<template>
    <img :src="dynamicImage" :alt="filename">
</template>

<script>
export default {
    props: {
        filename: String
    },
    computed: {
        dynamicImage() {
            return require(`~/assets/images/${this.filename}`);
        }
    }
}
</script>