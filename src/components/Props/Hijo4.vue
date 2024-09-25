<script setup>
defineProps({
    lista: Array
})
</script>

<template>
    <ul>
        <li v-for="(dato, index) in lista" :key="index">
            {{ dato }}
        </li>
    </ul>
</template>