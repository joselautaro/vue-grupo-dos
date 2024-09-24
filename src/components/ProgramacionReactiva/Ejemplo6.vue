<!-- Ejemplo 6: Uso de v-if y v-else -->

<template>

    <div>
        <!-- Boton para alternar la visbilidad -->
         <button @click="toggleVisibility">Mostrar u ocultar</button>
         <!-- Este párrafo se muestra solo si isVisible es true -->
          <p v-if="isVisible">Este texto es visible</p>
          <!-- Este parrafo se muestra si isVisible es false -->
           <p v-else>El texto está oculto</p>
    </div>

</template>

<script setup>
import {ref} from 'vue'

const isVisible = ref(true)

// Funcion para alternar la visibilidad
const toggleVisibility = () =>{
    // invertimos el valor de isVisible
    isVisible.value = !isVisible.value
}
</script>