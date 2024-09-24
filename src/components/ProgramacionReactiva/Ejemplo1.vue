<!-- Ejemplo 1: Contador simple -->
<template>
    <!-- Mostramos el valor actual del contador -->
    <p>Contador: {{ count }}</p>
    <!-- Botón que llama a la función increment cuando se hace el click -->
    <button @click="increment">Incrementar</button>

</template>

<script setup>
    // Importamos la función ref de vue para crear referencias reactivas
    import {ref} from 'vue'

    // Creamos una referencia reactiva para el contador
    const count = ref(0)

    const increment = () =>{
        count.value++
        // Con el value accedemos al valor de una referencia
        // Primer desafio: agregar un botón que decremente
        // Segund desafio: que no descienda por debajo del 0, es decir que no pase a -1
    }
    
</script>

<style scoped>
button{
    color: aliceblue;
    background-color: burlywood;
    padding: 5px;
    border-radius: 5px;
}


</style>
