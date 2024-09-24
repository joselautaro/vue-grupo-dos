<!-- Ejemplo 9: uso del teleport -->

<template>
    <div>
        <!-- Boton para abrir un modal -->
         <button v-if="!showModal" @click="showModal = true">Abrir Modal</button>
         <!-- Usamos teleport para renderizar un modal por fuera del componente -->
         <Teleport to="body">
            <!-- El modal solo muestra si showModal es true -->
            <div v-if="showModal" class="modal">
                <h3>Modal</h3>
                <p>Contenido del modal</p>
                <!-- Botón para cerrar el modal -->
                 <button @click="showModal = false">Cerrar</button>
            </div>
         </Teleport>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    // Asignamos un estado reactivo para controlar la visibilidad del modal
    const showModal = ref(false)
</script>

<style scoped>
.modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(66, 59, 59);
    padding: 20px;
    border: 1px solid white;
    border-radius: 10px
}
</style>