<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" class="text-center">
                    <h1>Proyectos Destacados</h1>
                    <h3>José Roberto Pérez Angulo</h3>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
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
            projects: [
                {
                    title: 'Portal ventura',
                    description: 'Me he involucrado en proyectos frontend utilizando estas tecnologías modernas.',
                    image: 'ruta/de/imagen1.png',
                    link: 'https://subastasventura.com/'
                },
                {
                    title: 'RH-Contigo',
                    description: 'Durante mi experiencia, he trabajado en el desarrollo backend con .NET.',
                    image: 'ruta/de/imagen1.png',
                    link: 'https://play.google.com/store/apps/details?id=com.dvalic.apprhcontigo&hl=es_MX&gl=US&pli=1'
                },
                {
                    title: 'VentaAuto',
                    description: 'Contribuí en la creación de soluciones utilizando esta plataforma.',
                    image: 'ruta/de/imagen2.png',
                    link: 'https://ventauto.mx/'
                },
                {
                    title: 'VW',
                    description: 'Programé el backend de aplicaciones móviles con tecnologías como NodeJS y MongoDB.',
                    image: 'ruta/de/imagen2.png',
                    link: 'https://play.google.com/store/apps/details?id=com.dvalic.appvwcresta&hl=es_MX&gl=US'
                },
                {
                    title: 'SAS',
                    description: 'Desarrollé aplicaciones en Java para optimizar procesos de subasta.',
                    image: 'ruta/de/imagen2.png',
                    link: 'https://subastasventura.com/SAS/subastaOnline.do'
                },
                {
                    title: 'AUDI',
                    description: 'Desarrollé core de servicios moviles para la marca AUDI.',
                    image: 'ruta/de/imagen2.png',
                    link: 'https://play.google.com/store/apps/details?id=com.dvalic.appaudiclase&hl=es&gl=US'
                },
            ],
        };
    }
};
</script>