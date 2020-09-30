<template>
    <div id="progress-root">
        <div v-for="n in total" class="progress-element" :class="{active: n <= (number + 1) }" :key="n"></div>
    </div>
</template>
<script>
export default {
    name: "ProgressBar",
    props: ['number','total']
}
</script>
<style scoped>
    #progress-root {
        display: flex;
        padding:5px 6px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }
    .progress-element {
        flex: 1 0 auto;
        margin-right: 3px;
        height: 4px;
        background: rgba(0, 0, 0, 0.302);
    }
    .progress-element:last-child {
        margin-right: 0;
    }
    .progress-element.active {
        background: rgb(0, 121, 194);
    }
</style>