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
                        @click.prevent="startQuiz"
                        >START QUIZ</v-btn>
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
            region: Object,
            uuid: String
        },
        data() {
            return {
                logo: ASSET + '/startLogo.svg',
                username: null,
                errMsg: '',
                frmHasErr: false,
                isLoading: false,
                quuid: null
            }
        },
        computed: {

        },
        methods: {
            startQuiz() {
                this.isLoading = true
                setTimeout(() => {
                    this.isLoading = false
                    if(this.$refs.form.validate('username')) {
                        localStorage.setItem('username', this.username)
                        this.$store.commit('main/SET_USERNAME', this.username)
                        this.$store.dispatch('maps/searchQuiz', this.uuid)

                        this.quuid = this.$store.getters['maps/getQuiz'].quuid
                        this.$store.dispatch('maps/getChoices', this.quuid)
                    }
                }, 1000);
            },
            setUsername() {
                this.username = localStorage.getItem('username')
                this.$store.commit('main/SET_USERNAME', this.username)
            }
        },
        mounted() {
            this.setUsername()
        }
    }
</script>

<style lang="sass" scoped>

</style>
