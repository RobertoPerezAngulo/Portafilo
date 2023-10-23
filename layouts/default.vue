<template>
  <v-app>
    <v-app-bar app scroll-behavior="fade-image" dark>
      <v-container align-center>
        <v-btn text="" to="/">Home</v-btn>
        <v-btn text="" to="/About">Registrados</v-btn>
        <v-btn text="" to="/denuncia">Denuncia</v-btn>
        <v-btn color="red" rounded to="/contact">Contact</v-btn>
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
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer app absolute dark class="bg-primary" v-intersect="(a, b, c) => isIntersectingFooter = c">
      <v-container class="d-flex px-md-8 px-sm-6 py-1" style="height: 100%">
        <v-row>
          <v-col v-for="menu in footerMenus" :key="menu.title">
            <v-list dense flat color="transparent">
              <v-subheader inset class="text-h6 white--text">{{ menu.title }}</v-subheader>
              <v-list-item v-for="(item, i) in menu.items" :key="i" :to="item.to" :href="item.href" :target="item.target">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">
                      {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>


<script>

export default {
  components: {},
  head() {
    const title = this.$route.matched[0].components.default.options.title
    return {
      titleTemplate: title ? `%s | ${title}` : '%s'
    }
  },
  data() {
    return {
      footerMenus: [
        {
          itemsAbout:[],
          title: 'Portafolio',
          items: [
            { text: 'Inicio', icon: 'mdi-home', to: '/' },
            { text: 'Preguntas frecuentes', icon: 'mdi-frequently-asked-questions', to: '/faq' },
          ]
        },
        {
          title: 'Contacto',
          items: [
            { text: '563 6209088', icon: 'mdi-phone-in-talk', href: 'tel:5591333885' },
            { text: '563 6209088', icon: 'mdi-whatsapp', href: 'https://api.whatsapp.com/send/?phone=5636209088', target: '_blank' },
            { text: 'rperez_puma@hotmail.com', icon: 'mdi-email-edit', href: 'mailto:rperez_puma@hotmail.com'},
            { text: 'Contáctanos', icon: 'mdi-contacts', to: '/contacto' }
          ]
        },
      ]
    }
  },
  methods:{
    gitHub(){
      window.open('https://github.com/RobertoPerezAngulo', '_blank');
  },
  DescargaCV(){
    window.open('C_V_Jose_Roberto_Perez_Angulo.pdf', '_blank')
  }
}
}
</script>
