<script setup>
    defineProps({
        mensaje:{
            type: String,
            default: 'Este es el mensaje por defecto'
        }
    })
</script>
<template>
    <p>{{ mensaje }}</p>
</template>