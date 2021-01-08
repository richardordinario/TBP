<template>
    <v-app id="inspire">
        <v-navigation-drawer app width="500px">
            <v-img :src="bgDrawer" height="100%">
                <v-app-bar
                    class="mt-5"
                    elevation="0"
                    color="transparent"
                    >
                    <router-link to="/map">
                        <v-btn
                        large
                        text
                        absolute
                        class="white--text"
                        >
                            <v-icon left>mdi-arrow-left</v-icon>
                            Map
                        </v-btn>
                    </router-link>
                    </v-app-bar>
                <v-card
                elevation="0"
                color="transparent"
                max-width="500px"
                height="100%"
                class="px-5"
                >
                    <v-card-title>
                        <v-icon color="white" x-large class="p-2">mdi-terrain</v-icon>
                        <v-icon color="white" large class="p-2">mdi-bike</v-icon>
                        <v-icon color="white" large class="p-2">mdi-bank</v-icon>
                        <v-icon color="white" large class="p-2">mdi-beach</v-icon>
                    </v-card-title>
                    <v-card-subtitle class="white--text text-subtitle-1">REGION 1</v-card-subtitle>
                    <v-card-text>
                        <div
                        class="
                        text-h3
                        white--text
                        text-title
                        "
                        style="margin-bottom: 50px"
                        >ILOCUS REGION</div>
                        <div class="row justify-content-center my-5">
                            <div class="col-md-6">
                                <img :src="mapImg" class="img-fluid" />
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
                <v-btn
                fab
                absolute
                bottom
                right
                style="margin-bottom: 50px; margin-right: 100px"
                >
                    <v-icon large color="red">mdi-information-variant</v-icon>
                </v-btn>

                <v-btn
                fab
                absolute
                bottom
                right
                style="margin-bottom: 50px; margin-right: 20px"
                >
                    <v-img :src="bulbImg" height="50px" width="50px"></v-img>
                </v-btn>
            </v-img>
        </v-navigation-drawer>
        <v-main>
            <v-btn
            x-small
            text
            elevation="0"
            absolute
            class="close-drawer white--text"
            > <v-icon class="pl-2">mdi-chevron-left</v-icon></v-btn>
            <iframe src="https://www.youtube.com/embed/ADNgEHFDYzo" class="responsive-iframe"></iframe>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                bgDrawer: ASSET + '/drawer.png',
                mapImg: ASSET + '/mini-ilocus-map.png',
                bulbImg: ASSET + '/bulb.png',
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
.close-drawer {
    background-color: rgba(0,0,0,0.5) !important;
    padding: -10px !important;
    margin: -10px !important;
    height: 100px !important;
    width: 5px !important;
    margin-top: 100px !important;
    z-index: 5;
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
