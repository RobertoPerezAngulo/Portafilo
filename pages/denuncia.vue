<template>
    <!-- formulario -->
    <v-container>
        <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
        <v-text-field  v-model="apellido" label="Apellido" required></v-text-field>
        <v-text-field v-model="cedula" label="Cedula" required></v-text-field>
        <v-text-field v-model="telefono" label="Telefono" required></v-text-field>
        <v-text-field v-model="direccion" label="Direccion" required></v-text-field>
        <v-text-field v-model="correo" label="Correo" required></v-text-field>
        <v-textarea  v-model="descripcion" label="Descripcion" required></v-textarea>
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
export default{
    data(){
        return{
            dialog: false,
            nombre: '',
            apellido: '',
            cedula:'',
            telefono: '',
            direccion:'',
            correo: '',
            descripcion:'',
            diccionario: {},
            isLoading: false
        }
    },
    methods:{
        async send(){
        this.isLoading = true
            const data = {
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
                telefono: this.telefono,
                direccion: this.direccion,
                correo: this.correo,
                descripcion: this.descripcion,
            }
            await this.$axios
            .$post(`${this.$config.DOMINIO}/api/v1/denuncia/`,data )
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