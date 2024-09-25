<template>
    <div>
        <p>{{ mensaje }}</p>
    </div>
</template>

<script setup>
    // Se define la prop mensaje usando defineProps
    defineProps({
        mensaje: String //Definimos que mensaje es de tipo string
    })
</script>