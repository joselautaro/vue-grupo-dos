import {ref, watchEffect} from 'vue';
import axios from 'axios';

// Definimos las referencias reactivas para los estados

const pokemon = ref({})

const id = ref(1)

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

const handleSubmit = async () =>{
    if( busqueda.value.length > 2 ){
        try{

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${busqueda.value}`)

            const data = response.data;

            pokemon.value = {
                numero: data.id,
                nombre: data.name,
                img: data.sprites.front_default,
                peso: data.weight
            }
            id.value = data.id;
        }catch(error){
            console.log(error);
        }
    }
    
}

const handleAnterior = () =>{
    if( id.value > 1 ){
        id.value -= 1;
    }
    busqueda.value = '';
}

const handleSiguiente = () =>{
    id.value += 1;
    busqueda.value = '';
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
    handleInputChange,
    handleSubmit,
    handleAnterior,
    handleSiguiente
}