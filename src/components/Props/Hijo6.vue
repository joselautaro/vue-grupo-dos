<script setup>
    defineProps({
        accion: Function
    })
</script>

<template>
    <button @click="accion">Hacer click</button>
</template>