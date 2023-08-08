<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-container>
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon @click="DescargaCV()" v-on="{ ...tooltip}">
              <v-icon>mdi-file-document</v-icon>
            </v-btn>
          </template>
          <span>Descarga mi CV</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon @click="gitHub()" v-on="{ ...tooltip}">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>Visita mi gitHub, es gratis!</span>
        </v-tooltip>
      </v-container>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: 'Header',
  data: () => ({
    items: [
      {
        name: 'Home',
        icon: 'mdi-home',
        dir: '/',
      },
      {
        name: 'About',
        icon: 'mdi-account',
        dir: '/about',
      },
      {
        name: 'Contact',
        icon: 'mdi-email',
        dir: '/contact',
      },
      {
        name: 'Projects',
        icon: 'mdi-folder',
        dir: '/projects',
      }
    ],
  }),
  methods: {
    DescargaCV() {
      window.open('C_V_Jose_Roberto_Perez_Angulo.pdf', '_blank');
    },
    gitHub() {
      window.open('https://github.com/RobertoPerezAngulo', '_blank');
    }
  }
};
</script>