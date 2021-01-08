<template>
    <v-app id="inspire">
        <section class="main">
            <v-app-bar
            color="transparent"
            elevation="0"
            >
                <v-btn
                class="white--text"
                text
                >
                <v-icon left>mdi-arrow-left</v-icon>
                Ilocus Region
                </v-btn>
            </v-app-bar>
            <v-main>
                <v-container fill-height>
                    <v-row align="center" justify="center">
                        <v-col lg="6" md="8" sm="12">
                            <v-card
                            elevation="0"
                            color="transparent">
                                <center class="my-5">
                                    <v-img :src="logo"
                                    max-height="200px"
                                    max-width="200px"
                                    ></v-img>
                                </center>
                            <v-card-text>
                                <div class="
                                text-lg-h4
                                text-md-h4
                                text-h5
                                mt-5
                                text-center
                                font-weight-thin
                                white--text
                                subtitle"
                                >
                                    WELCOME TO TRIVIA QUIZ!
                                </div>
                                <div class="col-md-8 mx-auto">
                                    <v-divider
                                    color="white"
                                    ></v-divider>
                                </div>

                                <div
                                class="
                                text-lg-h3
                                text-md-h3
                                text-h4
                                text-center
                                white--text
                                text-title
                                ">
                                    ILOCUS REGION
                                </div>
                                <div class="col-md-6 mx-auto">
                                    <v-text-field
                                    outlined
                                    color="white"
                                    filled
                                    label="Type youre name here.."></v-text-field>
                                </div>

                            </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn
                ></v-btn>
            </v-main>
        </section>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                logo: ASSET + '/startLogo.svg'
            }
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
}
.subtitle {
    font-family: Montserrat !important;
}
.main {

}
#inspire {
    background-image: url('/img/bgStart.png');
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
</style>
