<script setup>
 defineProps({
    persona: Object
 })
</script>

<template>
    <div>
        <p>Nombre: {{ persona.nombre }}</p>
        <p>Edad: {{ persona.edad }}</p>
    </div>
</template>