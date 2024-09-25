<template>
    <div>
        <!-- Pasamos el valor desde el componente padre al componente hijo -->
         <Hijo1 mensaje="Hola desde el componente padre"/>
        
    </div>
</template>

<script setup>
    import Hijo1 from './Hijo1.vue';
</script>