<template>
    <v-app id="inspire">
        <section class="main">
            <v-app-bar
            color="transparent"
            elevation="0"
            >
                <router-link :to="'/region/'+ region.uuid">
                    <v-btn
                    class="white--text"
                    text
                    >
                    <v-icon left>mdi-arrow-left</v-icon>
                    {{region.title}}
                    </v-btn>
                </router-link>
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
                                <div class="col-md-7 mx-auto">
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
                                mb-5
                                ">
                                    {{region.title}}
                                </div>
                                <div class="col-md-7 mx-auto mb-0 pb-0" style="margin-top: 50px">
                                    <v-form ref="form">
                                        <v-text-field
                                        solo
                                        v-model="username"
                                        :rules="[() => !!username || 'This field is required!']"
                                        :error-messages="errMsg"
                                        required
                                        label="Type youre name here.."></v-text-field>
                                    </v-form>

                                </div>
                                <div class="col-md-6 mx-auto mt-0 pt-0">
                                    <v-btn
                                    block
                                    x-large
                                    color="warning"
                                    required
                                    :loading="isLoading"
                                    @click="startQuiz"
                                    >START QUIZ</v-btn>
                                </div>

                            </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

            </v-main>
            <router-link to="/map">
                <v-btn
                fab
                absolute
                bottom
                right
                outlined
                color="white"
                style="margin-bottom: 50px;
                background-color: rgba(0,0,0,0.5)
                margin-right: 30px"
                >
                <img :src="mini_map" alt="map" class="img-fluid">
                </v-btn>
            </router-link>
        </section>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                logo: ASSET + '/startLogo.svg',
                mini_map: ASSET + '/mini-map.png',
                username: null,
                errMsg: '',
                frmHasErr: false,
                isLoading: false
            }
        },
        computed: {
            region: function() {
                this.$store.dispatch('maps/searchRegion',this.$route.params.uuid)
                return this.$store.getters['maps/getSelected']
            }
        },
        methods: {
            startQuiz() {
                this.isLoading = true
                setTimeout(() => {
                    this.isLoading = false
                    this.$refs.form.validate('username')
                    this.$router.push('/quiz/'+this.region.uuid+'/'+this.region.uuid)

                }, 2000);
                console.log(this.username)
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
* {
    font-family: Montserrat !important;
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
