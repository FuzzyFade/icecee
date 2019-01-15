<template>
    <div data-relative-input="true" ref="scene">
        <div data-depth="0.2"> 我的第一个图层！</div>
        <div data-depth="0.6"> 我的第二层！</div>
    </div>
</template>

<script>
    import Parallax from 'parallax-js'
    export default {
        name: "Motionimage",

        mounted() {
            var para = new Parallax(this.$refs.scene);
        }
    }
</script>

<style scoped>

</style>