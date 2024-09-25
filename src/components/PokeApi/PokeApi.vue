<script setup>
import {
    pokemon,
    busqueda,
    handleInputChange
} from './usePokemon'
</script>

<template>
    <div class="card-poke">
        <form class="m-2">
            <input class="form-control" v-model="busqueda" type="text" autofocus placeholder="Buscar pokemon"
                @input="handleInputChange">
        </form>
        <div class="info-div">
            <p>Id: {{ pokemon.numero }}</p>
            <p>Nombre: {{ pokemon.nombre }}</p>
            <p>Peso: {{ pokemon.peso }} kg</p>
            <img :src="pokemon.img" alt="img">
        </div>
        <button class="btn btn-primary m-4">Anterior</button>
        <button class="btn btn-success m-4">Siguiente</button>
    </div>
</template>

<style scoped>
info-div{
    display: flex;
    justify-content: center;
    align-items: center;
}
p {
    font-size: 20px;
    margin: 5px;
    color: aliceblue;
}

.card-poke {
    border: 1px solid white;
    border-radius: 10px;
    padding: 15px;
}
img{
    height: 100%;
    width: 100%;
}
</style>