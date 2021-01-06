<template>
    <v-app id="inspire">
        <section class="banner">
            <div class="overlay">
                <v-container fluid fill-height >
                    <v-row align="center" justify="center">
                        <v-col lg="8" md="6" sm="6">
                            <v-layout row wrap>
                                <v-flex xs12 lg6>
                                    <div class="header-title">
                                        <v-img :src="tbpIcon"
                                        max-width="80px"
                                        max-height="80px"
                                        ></v-img>
                                        <div class="ml-5">
                                            <p class="
                                            text-md-h4                                          
                                            text-h5
                                            text-title 
                                            white--text 
                                            mt-5">VIRTUAL TOUR</p>
                                            <p class="subtitle-1 white--text">Drag and drop <span icon> <v-icon color="warning">mdi-map-marker</v-icon> </span> icon into discover the wonders of region</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex xs12 lg6>
                                    <v-img :src="mapImg"
                                    max-width="500px"
                                    max-height="800px"
                                    usemap="phMap"
                                    ></v-img>
                                    <map name="phMap">
                                        <area shape="poly" coords="" href="" alt="">
                                    </map>
                                </v-flex>
                            </v-layout>
                        </v-col>
                    </v-row>

                </v-container>
            </div>
             <v-fab-transition>
                <v-btn
                    v-show="true"
                    depressed
                    absolute
                    color="gray"
                    bottom
                    right
                    fab
                    icon
                    class="mr-5"
                    style="margin-bottom: 50px"
                >
                    <v-icon 
        
                    color="warning">mdi-map-marker</v-icon>
                </v-btn>
            </v-fab-transition>
        </section>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                tbpIcon: ASSET + '/icon.png',
                mapImg: ASSET + '/plain-map.svg',
                bgImg: ASSET + '/elnido.png'
            }
        },
        methods: {
            drop: e => {

            }
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: "Barabara";
    src: url('/fonts/barabara.ttf');
}
.text-title {
    font-family: Barabara !important;
}
#inspire {
  height: 100vh !important;
//   background-color: rgba(0,0,0,0.4) !important;
}
.banner{
    background-image: url('/img/elnido.png');
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}
.header-title {
    display: flex;
    margin-top: 50px;
}
</style>