<template>
    <div>
        <NavBar/>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    name : 'HeaderSection',
    components : {NavBar}
}
</script>

<style scoped>
    /* css */
    b{
        font-size: 40px;
        font-family:monospace
    }
</style>