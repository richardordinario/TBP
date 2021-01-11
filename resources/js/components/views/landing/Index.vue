<template>
    <v-app id="inspire">
        <v-carousel
        height="100%"
        :show-arrows="false"
        cycle
        hide-delimiter-background
        :hide-delimiters="$vuetify.breakpoint.lgAndUp"
        delimiter-icon="mdi-minus"
        >
            <v-carousel-item
                reverse-transition="fade-transition"
                transition="fade-transition"
                v-for="(item,i) in items"
                 v-bind:src="item.src"
                :key="i">
                 <v-container
                      fill-height
                      fluid
                      pa-0 ma-0 pb-3
                    >
                    <v-layout fill-height align-end pb-4 mb-4>
                        <v-flex xs12>
                            <v-card
                            color="transparent"
                            elevation="0"
                            class="pa-5">
                            <p class="subtitle-1 white--text text-right card-title pr-5" v-text="item.title"></p>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-carousel-item>
        </v-carousel>
        <div class="my-overlay">
            <v-container fill-height >
                <v-row align="center" justify="center">
                    <v-col lg="12" md="12">
                        <v-layout row wrap>
                            <v-flex xs12 lg6 md12 class="pt-5">
                                <p class="
                                white--text
                                text-xl-h2
                                text-md-h3
                                text-sm-h2
                                text-h4
                                text-lg-left
                                text-md-center
                                text-center
                                text-title
                                p-0
                                mt-5">WELCOME TO</p>
                                <p class="
                                white--text
                                text-xl-h2
                                text-md-h3
                                text-sm-h2
                                text-h4
                                text-lg-left
                                text-md-center
                                text-center
                                text-title
                                p-0
                                m-0
                                ">THE PHILIPPINES!</p>
                                <p class="
                                white--text
                                font-weight-light
                                text-xl-h5
                                text-subtitle-1
                                text-lg-left
                                text-md-center
                                text-center
                                card-title
                                my-5
                                ">Explore the Philippine attractions and sites in a virtual environment.</p>
                                <router-link to="/map">
                                    <v-btn
                                    depressed
                                    color="grey"
                                    class="start-btn mt-5 card-title"
                                    x-large
                                    style="width: 300px"
                                    :block="$vuetify.breakpoint.mdAndDown">
                                        START TOUR
                                    </v-btn>
                                </router-link>
                            </v-flex>
                            <v-flex xs12 lg6 md8 class="hidden-md-and-down">
                                <v-carousel
                                height="auto"
                                hide-delimiter-background
                                delimiter-icon="mdi-minus"
                                >
                                    <v-carousel-item
                                        v-for="(item,i) in items"
                                        :key="i">
                                        <v-img :src="item.src" style="width:100%;height:500px;"></v-img>
                                    </v-carousel-item>
                                </v-carousel>
                            </v-flex>
                        </v-layout>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-app>
</template>
//  v-bind:src="item.src"
<script>
    export default {
        data() {
            return {
                items: [
                    { src: ASSET + '/lbg1.png', title: 'El Nido, Palawan' },
                    { src: ASSET + '/lbg2.png', title: 'Banaue, Rice Terraces'  },
                ]
            }
        },
        mounted() {
            localStorage.setItem('region', '')
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

@font-face {
    font-family: "Barabara";
    src: url('/fonts/barabara.ttf');
}
.text-title {
    font-family: Barabara !important;
    letter-spacing: 3px !important;
}
#inspire {
  height: 100vh !important;
}
.my-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}
.start-btn {
   background-color:rgba(192,192,192,0.5) !important;
   color: #fff;
}
.card-title {
    font-family: Montserrat !important;
}
</style>
