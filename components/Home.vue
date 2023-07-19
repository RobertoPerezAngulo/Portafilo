<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374" dark>
        <v-card>
            <v-card-title >Contactame</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Nombre" required></v-text-field>
                    <v-text-field label="Correo" required></v-text-field>
                    <v-textarea label="Mensaje" required></v-textarea>
                    <v-btn color="info" @click="reserve">Enviar</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>