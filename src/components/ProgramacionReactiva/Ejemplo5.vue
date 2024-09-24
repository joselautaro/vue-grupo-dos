<!-- Propiedades computadas -->
 <template>
    <div>
        <!-- Inputs vinculados a firstName y lastName -->
         <input type="text" v-model="firstName">
         <input type="text" v-model="lastName">
         <p>Nombre completo: {{ fullName }}</p>
    </div>
 </template>

 <script setup>
 import {ref, computed} from 'vue'

//  Referencias reactivas para el nombre y apellido
const firstName = ref('');
const lastName = ref('');

// Propiedades computadas para el nombre completo
const fullName = computed(() =>{
    // Concatenamos firstName y lastName, eliminando espacios extras
    return `${firstName.value} ${lastName.value}`.trim()
})

</script>

<style scoped>
input{
    margin: 10px;
}
</style>