<template>
  <v-container >
    <v-data-table :headers="headers" :items="items" :search="search">
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Busqueda por nombre"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
    data() {
        return {
            headers: [
                { text: 'Nombre', value: 'name' },
                { text: 'email', value: 'email' },
                { text: 'phone', value: 'phone' },
                { text: 'message', value: 'message' },
            ],
            items: [],
            search: '', // Filtro de búsqueda
        };
    },
    async beforeMount(){
      await this.$axios
                .$get(`${this.$config.DOMINIO}/api/v1/register/`)
                .then((result) => {
                  for (let i = 0; i < result.length; i++) {
                    this.items.push({
                      name: result[i].name,
                      email: result[i].email,
                      phone: result[i].phone,
                      message: result[i].message,
                    });
                  }

                }).catch((e) => {
                  
                }).finally(() => {
                   
      })
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
        home() {
            this.$router.push('/');
        }
    }
};
</script>