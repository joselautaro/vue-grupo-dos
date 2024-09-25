import {ref, watchEffect} from 'vue';
import axios from 'axios';

// Definimos las referencias reactivas para los estados

const pokemon = ref(null)

const id = ref(5)

const busqueda = ref('')

// Función para buscar un pokemon por id

const busquedaById = async (pokemonId) =>{
    try{

        // Realizamos la solicitud http utilizando AXIOS
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

        const data = response.data

        // Actualizamos la referencia reactiva con los datos del pokemon
        pokemon.value = {
            numero: data.id,
            nombre: data.name,
            img: data.sprites.front_default,
            peso: data.weight
        }

    }catch(error){
        console.log(error)
    }
}

// Ejecuta la busqueda cuando el id cambia
watchEffect(() =>{
    busquedaById(id.value)
})

const handleInputChange = (e) =>{
    busqueda.value = e.target.value;
}

export{
    pokemon,
    busqueda,
    handleInputChange
}