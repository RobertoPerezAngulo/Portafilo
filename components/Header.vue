<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-container fluid>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title> <nuxt-link :to="item.dir" class="black--text">{{ item.name
              }}</nuxt-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon @click="gitHub()" v-on="{ ...tooltip}">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>Visita mi gitHub, es gratis!</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn icon @click="DescargaCV()" v-on="{ ...tooltip}">
              <v-icon>mdi-file-document</v-icon>
            </v-btn>
          </template>
          <span>Descarga mi CV</span>
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
      window.open('/C_V_Jose_Roberto_Perez_Angulo.pdf', '_blank');
    },
  }
};
</script>