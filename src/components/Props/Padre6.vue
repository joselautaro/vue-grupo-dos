<script setup>
    import Hijo6 from './Hijo6.vue';

    const miFuncion = () =>{
        alert('Boton clickeado!')
    }
</script>
<template>
    <div>
        <Hijo6 :accion="miFuncion"/>
    </div>
</template>