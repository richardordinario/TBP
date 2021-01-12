<template>
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
                    my-5
                    pb-5
                    text-center
                    font-weight-thin
                    white--text
                    subtitle"
                    >
                        YOUR TOTAL SCORE IS:
                    </div>

                    <div class="col-md-3 mx-auto mt-5 pt-5">
                        <div class="card">
                            <div class="card-body">
                               <div class="text-h3 text-center black--text">{{score}}pts.</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 mx-auto">
                        <v-btn
                        block
                        x-large
                        color="warning"
                        required
                        :loading="isLoading"
                        @click.prevent="restartQuiz"
                        >RESTART QUIZ</v-btn>
                    </div>
                </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        props: {
            score: Number
        },
        data() {
            return {
                logo: ASSET + '/startLogo.svg',
                isLoading: false
            }
        },
        methods: {
            restartQuiz() {
                location.reload()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
