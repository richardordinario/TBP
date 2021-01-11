<template>

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
        class="px-5"
        >
            <v-card-title>
                <v-icon color="white" x-large class="p-2">mdi-terrain</v-icon>
                <v-icon color="white" large class="p-2">mdi-bike</v-icon>
                <v-icon color="white" large class="p-2">mdi-bank</v-icon>
                <v-icon color="white" large class="p-2">mdi-beach</v-icon>
            </v-card-title>
            <v-card-subtitle class="white--text text-subtitle-1">REGION {{region.region}}</v-card-subtitle>
            <v-card-text>
                <div
                class="
                text-xl-h3
                white--text
                text-title
                text-md-h4
                text-h4
                "
                style="margin-bottom: 50px"
                >{{region.title}}</div>
                <div class="row justify-content-center my-5">
                    <div class=" col-md-6 col-sm-12 cols-12">
                        <img :src="mapImg" style="" class="img-fluid"  :class="{'imgSm': $vuetify.breakpoint.smAndDown}"/>
                    </div>
                </div>
            </v-card-text>
        </v-card>
        <v-btn
        text
        absolute
        bottom
        left
        small
        class="white--text hidden-lg-and-up"
        >
            Swipe left to hide
        </v-btn>
        <v-btn
        fab
        absolute
        bottom
        right
        :small="$vuetify.breakpoint.smAndDown"
        style="margin-bottom: 40px; margin-right: 100px"
        >
            <v-icon large color="red">mdi-information-variant</v-icon>
        </v-btn>
        <router-link :to="'/quiz/'+ region.uuid">
            <v-btn
            fab
            absolute
            bottom
            right
            :small="$vuetify.breakpoint.smAndDown"
            style="margin-bottom: 40px; margin-right: 20px"
            >
                <v-img :src="bulbImg" height="50px" width="50px" :class="{'iconSm': $vuetify.breakpoint.smAndDown}"></v-img>
            </v-btn>
        </router-link>
    </v-img>
</template>

<script>

    export default {
        props: {
            region: Object,
            drawer: Boolean
        },
        data() {
            return {
                bgDrawer: ASSET + '/drawer.png',
                mapImg: ASSET + '/mini-ilocus-map.png',
                bulbImg: ASSET + '/bulb.png',
            }
        },
        computed: {

        },
        mounted() {
            console.log(this.region)
        }
    }
</script>

<style  scoped>
@font-face {
    font-family: "Barabara";
    src: url('/fonts/barabara.ttf');
}
.text-title {
    font-family: Barabara !important;
}
.iconSm {
    height: 40px !important;
    width: 40px !important;
}
.imgSm {
    height: 400px;
    margin-left: 95px
}
</style>
