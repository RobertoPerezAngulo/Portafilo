<template>
    <!-- formulario -->
    <v-container>
        <v-text-field v-model="name" label="Nombre" required></v-text-field>
        <v-text-field v-model="email" label="Correo" required></v-text-field>
        <v-text-field v-model="phone" label="Telefono" required></v-text-field>
        <v-textarea  v-model="message" label="Mensaje" required></v-textarea>
        <v-btn color="primary" @click="send" :loading="isLoading">Enviar</v-btn>
        <v-dialog v-model="dialog" max-width="705">
            <v-card>
              <v-card-title class="justify-center">{{ diccionario.mensaje }}</v-card-title>
              <v-card-actions class="justify-center">
                <v-btn class="mx-2" color="primary" rounded large variant="text" @click="home">
                  Cerrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
    </v-container>
</template>

<script>
import { computed } from 'vue';

export default{
    data(){
        return{
            dialog: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            diccionario: {},
            isLoading: false
        }
    },
    methods:{
       async send(){
        this.isLoading = true
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
                phone: this.phone
            }
            await this.$axios
            .$post(`${this.$config.DOMINIO}/api/v1/register/`,data )
            .then((result) => {
                this.dialog = true
                this.diccionario.mensaje = "Informacion enviada con exito"
            }).catch((e) =>{
                this.dialog = true
                this.diccionario.mensaje = "Uno de tus compos se ecuentra erroneo"
            }).finally(() => {
                this.isLoading = false
            })
        },
        home(){
            this.$router.push('/');
        }
    }
}
</script>