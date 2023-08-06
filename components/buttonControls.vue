<template>
    <div class="d-flex">
      <div class="d-flex ma-4 justify-space-around" style="width: 300px">
        <v-speed-dial :value="true" fixed right bottom direction="top" transition="slide-y-reverse-transition">
          <template v-slot:activator>
            <v-btn v-model="dial" color="#ba0019" dark fab x-large class="pulse">
              <v-icon v-if="dial"> mdi-gesture-double-tap </v-icon>
              <v-icon v-else> mdi-account-circle </v-icon>
            </v-btn>
          </template>
          <div text-center d-flex align-center justify-space-around>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" large bottom fab @click="whatsapp()" v-bind="attrs" v-on="on">
                  <v-icon>mdi-whatsapp</v-icon>
                </v-btn>
              </template>
              <span>{{whatsappDescri}}</span>
            </v-tooltip>
          </div>
          <div text-center d-flex align-center justify-space-around>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" large bottom fab @click="swithTheme()" v-bind="attrs" v-on="on">
                  <v-icon>mdi-theme-light-dark</v-icon>
                </v-btn>
              </template>
              <span>{{cambiaTema}}</span>
            </v-tooltip>
          </div>
        </v-speed-dial>
      </div>
    </div>
  </template>
  
  <style>
  .pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
  
  <script>
  export default {
    computed: {
      isDark() {
        return this.$vuetify.theme.isDark;
      },
    },
    data: () => ({
      dial: true,
      whatsappDescri: "Whatsapp",
      cambiaTema: "Cambiar tema",
    }),
    methods: {
      swithTheme() {
        if (!this.$vuetify.theme.isDark) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      },
      whatsapp() {
        window.open(
          `https://api.whatsapp.com/send/?phone=${this.$config.NUMERO_WHATSAPP}&text=${this.$config.MENSAJE_WHATSAPP}`,
          "_blank"
        );
      },
    },
  };
  </script>
  