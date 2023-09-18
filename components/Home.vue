<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center" v-for="(item,i) in itemsAbout" :key="i">
                    <h1 >{{item.title}}</h1>
                    <h3>{{item.description}}</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(project, index) in itemsproyect" :key="index" cols="12" md="4">
                    <v-card>
                        <v-img :src="project.image" height="200"></v-img>
                        <v-card-title>{{ project.title }}</v-card-title>
                        <v-card-text black--text>{{ project.description }}</v-card-text>
                        <v-card-actions>
                            <v-btn :href="project.link" target="_blank" color="primary">Ver Proyecto</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col>
                    <buttonControls />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemsAbout:[],
            itemsproyect:[],
        };
    },
    async beforeMount(){
      await this.$axios
                .$get(`${this.$config.DOMINIO}/api/v1/about/`)
                .then((result) => {
                  for (let i = 0; i < result.length; i++) {
                    this.itemsAbout.push({
                      title: result[i].title,
                      description: result[i].description,
                    });
                  }

                }).catch((e) => {
                  
                }).finally(() => {
                   
      })

      await this.$axios
                .$get(`${this.$config.DOMINIO}/api/v1/project/`)
                .then((result) => {
                  for (let i = 0; i < result.length; i++) {
                    this.itemsproyect.push({
                      title: result[i].title,
                      description: result[i].description,
                      link: result[i].link,
                      image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                    });
                  }

                }).catch((e) => {
                  
                }).finally(() => {
                   
      })

    },
};
</script>