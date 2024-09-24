<!-- Ejemplo 2: Lista de tareas -->
<template>
    <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="nueva tarea">
    <div>
        <ul>
            <!-- Usar v-for para iterar sobre cada tarea en un array -->
             <!-- :key es importante para la eficiencia del renderizado -->
              <li v-for="tarea in tareas" :key="tarea.id">
                <!-- Mostrar el texto de cada tarea -->
                 {{ tarea.texto }}
              </li>
        </ul>
        <!-- Input para nueva tarea, vinculado al valor de la nueva tarea -->
         <!-- @keyup.enter llama a la agregarTarea cuando se presiona el enter -->
    </div>
</template>

<script setup>

import {ref} from 'vue'

// Creamos un array de tareas
const tareas = ref([])

// Ref para almacenar el valor del input de nueva tarea
const nuevaTarea = ref('');

// Funcion para añadir una nueva tarea
const agregarTarea = () =>{
    // Verificamos que la nueva tarea esté vacia ignorando espacios
    if( nuevaTarea.value.trim() ){
        // Añadimos la nueva tarea al array
        tareas.value.push({
            id: tareas.value.length + 1, //ID unico simple
            texto: nuevaTarea.value //Texto de la nueva tarea
        })
        // Limpiamos el input para añadir una nueva tarea
        nuevaTarea.value = ''
    }
}

</script>

<style scoped>
</style>