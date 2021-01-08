<template>
    <v-app id="inspire">
        <section class="banner" >
            <div class="overlay">
                <v-container fluid fill-height >
                    <v-row align="center" justify="center">
                        <v-col lg="8" md="8" sm="10">
                            <v-layout row wrap>
                                <v-flex xs12 lg6 md6 sm6>
                                    <div class="header-title" :class="{'headerPadding': !$vuetify.breakpoint.sm}">
                                        <v-img :src="tbpIcon"
                                        max-width="80px"
                                        max-height="80px"
                                        class="ml-3"
                                        ></v-img>
                                        <div class="ml-5">
                                            <p class="
                                            text-lg-h4
                                            text-md-h5
                                            text-h5
                                            text-title
                                            white--text
                                            mt-5">VIRTUAL TOUR</p>
                                            <p class="subtitle-1 white--text pa-2 text-md-subtitle-2">Click the<span icon> <v-icon color="warning">mdi-map-marker</v-icon> </span> icon to discover the wonders of region</p>
                                        </div>
                                    </div>
                                    <v-card
                                    style="
                                    background-color:  rgba(0,0,0,0.3);
                                    border-radius: 12px;
                                    margin-top: 50px"
                                    class=""
                                    elevation="0"
                                    max-width="500"
                                    v-if="selectedRegion"
                                    >
                                        <v-card-title class="pa-3">
                                            <v-icon color="white" class="p-2">mdi-terrain</v-icon>
                                            <v-icon color="white" class="p-2">mdi-bike</v-icon>
                                            <v-icon color="white" class="p-2">mdi-bank</v-icon>
                                            <v-icon color="white" class="p-2">mdi-beach</v-icon>
                                        </v-card-title>
                                        <v-card-text>
                                            <router-link to="/region">
                                            <div class="
                                            text-h5
                                            white--text
                                            font-weight-light
                                            text-title
                                            ">{{selected.title}}</div>

                                            </router-link>

                                            <p class="white--text mt-2 text-subtitle-1">REGION {{selected.region}}</p>
                                            <div class="white--text text-subtitle-1">
                                                Travel back in time and discover culture and heritage while sidetripping the white sand beaches.
                                            </div>
                                        </v-card-text>
                                    </v-card>

                                </v-flex>
                                <v-flex xs12 lg6 md6 sm6>
                                    <div >
                                        <img v-if="isDragging" :src="mapImg" alt="" usemap="#phmap" class="img-fluid hidden-xs-and-down">
                                        <img v-else :src="mapImg" alt="" usemap="#phmap" class="img-fluid hidden-xs-and-down" >
                                    </div>

                                    <map id="phmap" name="phmap">
                                        <area
                                        shape="poly"
                                        coords="204,193,215,221,199,263,225,277,192,295,163,276,179,242,174,187,194,149,224,132,226,160"
                                        href="#"
                                        alt="ilocus"
                                        @drop="ilocusDrop"
                                        @dragover.prevent
                                        >
                                    </map>
                                </v-flex>
                            </v-layout>
                        </v-col>
                    </v-row>

                </v-container>
            </div>
            <v-speed-dial
                style="position:absolute;"
                bottom
                right
                v-model="fab"
                direction="top"
                >
                <template v-slot:activator>
                    <v-btn
                    v-model="fab"
                    color="white"
                    @click="onMap"
                    v-click-outside="onMap"
                    fab
                    >
                    <v-icon v-if="fab">
                        mdi-close
                    </v-icon>
                    <v-icon v-else color="warning">
                        mdi-map-marker
                    </v-icon>
                    </v-btn>
                </template>
                <div class=""
                v-for="(region, i) in regions"
                :key="i">
                    <v-btn
                        dark
                        elevation="0"
                        small
                        color="transparent"
                        style="margin-right: 100px;"
                        @click="regionBtn(region.region)"
                    >
                        <v-icon left>mdi-map-marker</v-icon>
                        {{region.title}}
                    </v-btn>
                </div>
                </v-speed-dial>
        </section>
    </v-app>
</template>

<script>
    import { mapState } from 'vuex'


    export default {
        data() {
            return {
                tbpIcon: ASSET + '/icon.png',
                mapImg: ASSET + '/plain-map.png',
                bgImg: ASSET + '/elnido.png',
                isDragging: false,
                dragSet: false,
                fab: false,
                selectedRegion: false,
            }
        },
        mounted() {

        },
        computed: {
            ...mapState('maps',[
                'regions',
                'selected'
            ])
        },
        methods: {
            ilocusDrop(e) {

                this.dragSet = true
                this.mapImg = ASSET + '/ilocus-colored-map.png'
                const passer = e.dataTransfer.getData('marker')
                const marker = document.getElementById(marker)

                e.target.append(marker)
            },
            dragStart(e) {
                this.isDragging = true
                this.dragSet = false
                this.mapImg = ASSET + '/color-map.svg'

                const target = e.target
                e.dataTransfer.setData('marker', target.id)
                setTimeout(() => {
                    target.style.display = "none"
                }, 0)
            },
            dragEnd(e) {
                const target = e.target
                this.isDragging = false
                if(!this.dragSet) {
                  this.mapImg = ASSET + '/plain-map.png'
                  target.style.display="block"
                }

            },
            onMap() {
                if(!this.selectedRegion) {
                    this.mapImg == ASSET + '/color-map.svg' ? this.mapImg = ASSET + '/plain-map.png' : this.mapImg  = ASSET + '/color-map.svg'
                }
            },
            regionBtn(id) {
                this.$store.dispatch('maps/searchRegion',id)
                this.mapImg = this.selected.map
                this.selectedRegion = true
            }
        },

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
  overflow: hidden;
}
.banner{
    background-image: url('/img/elnido.png');
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
.headerPadding {
    margin-top: 100px;
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
}
</style>
