<!-- Ejemplo 3: formulario reactivp -->
 <template>
    <!-- Agregamos un evento de tipo submit el cual va a ser el envio del form -->
     <!-- .prevent el comportamiento por defecto del formulario -->
    <form @submit.prevent="submitForm">
        <input v-model="formData.name" type="text" placeholder="nombre">
        <input v-model="formData.email" type="email" placeholder="email">
        <button type="submit">Enviar</button>
    </form>
 </template>

<script setup>
    import { reactive } from 'vue';

    // Creamos un objeto reactivo para los datos del formulario
    const formData = reactive({
        name: '',
        email: ''
    })

    const submitForm = () =>{
        console.table('Formulario enviado: ', formData)
    }
</script>