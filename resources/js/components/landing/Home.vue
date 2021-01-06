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
                :key="i">
                <v-img :src="item.src" style="width:100%;height:100%;"></v-img>
            </v-carousel-item>
        </v-carousel>
        <div class="my-overlay">
            <v-container fill-height >
                <v-row align="center" justify="center">
                    <v-col lg="12" md="12">
                        <v-layout row wrap>
                            <v-flex xs12 lg6 md12 class="pt-5">
                                <p class="
                                font-weight-bold
                                white--text
                                text-xl-h1
                                text-md-h2
                                text-sm-h2
                                text-h4
                                text-lg-left
                                text-md-center
                                text-center
                                p-0
                                mt-5">WELCOME TO</p>
                                <p class="
                                font-weight-bold
                                white--text
                                text-xl-h1
                                text-md-h2
                                text-sm-h2
                                text-h4
                                text-lg-left
                                text-md-center
                                text-center
                                p-0
                                m-0
                                ">THE PHILIPPINES!</p>
                                <p class="
                                white--text
                                text-xl-h5
                                text-subtitle-1
                                text-lg-left
                                text-md-center
                                text-center
                                my-5
                                ">Explore the Philippine attractions and sites in a virtual environment.</p>
                                <v-btn
                                depressed
                                color="grey"
                                class="start-btn mt-5"
                                x-large
                                style="width: 300px"
                                :block="$vuetify.breakpoint.mdAndDown">
                                    START TOUR
                                </v-btn>
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
                    { src: ASSET + '/lbg1.png' },
                    { src: ASSET + '/lbg2.png' },
                ]
            }
        }
    }
</script>

<style scoped>
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
</style>
