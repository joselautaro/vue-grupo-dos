<!-- Ejemplo 7: v-bind -->

<template>
    <div>
        <!-- Aplicamos estilos dinamicos al párrafo -->
         <p :style="{color: textoColor, fontSize: fontSize + 'px'}">
            Texto con estilo dinámico
         </p>
        <button @click="changeColor">Cambiar de color</button>
        <button @click="changeFontSize"> Cambiar de tamaño</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const textoColor = ref('black')

const fontSize = ref(16)

// Funcion para cambiar el tamaño de la fuente
const changeColor = () =>{
    // Alternamos entre negro y rojo
    textoColor.value = textoColor.value === 'black' ? 'red' : 'black'
}

// Función para cambiar el tamaño de la fuente
const changeFontSize = () =>{
    // Incrementamos el tamaño en dos px
    fontSize.value += 2
    // Si supera 24 px, volvemos a 16px
    if(fontSize.value > 24) fontSize.value = 16
}
</script>