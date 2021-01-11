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
                <v-spacer></v-spacer>
                <p v-if="username" class="white--text ma-5 text-subtitle-1">Score: 0 pts.</p>
            </v-app-bar>
            <v-main>
                <RegisterUser v-if="!username" :region="region" :uuid="region.uuid"/>
                <QuizPanel v-else :quiz="quiz" :selection="selection" :uuid="region.uuid"/>
            </v-main>
            <v-btn
            bottom
            absolute
            x-large
            v-if="username"
            :style="{left: '50%', transform:'translateX(-50%)', background: 'rgba(0,0,0,0.5)'}"
            class="text-center white--text text-body-2 pa-5"
            >Drag and drop each attactions to their respective city.
            </v-btn>

            <router-link to="/map">
                <v-btn
                fab
                absolute
                bottom
                right
                outlined
                color="white"
                class="pa-2"
                style="margin-bottom: 50px;
                background-color: rgba(0,0,0,0.5)
                margin-right: 30px"
                >
                <img :src="mini_map" alt="map" class="img-fluid p-5">
                </v-btn>
            </router-link>
        </section>
    </v-app>
</template>

<script>
    import RegisterUser from './RegisterUser.vue'
    import QuizPanel from './QuizPanel.vue'

    export default {
        components: {
            RegisterUser,
            QuizPanel
        },
        data() {
            return {
                logo: ASSET + '/startLogo.svg',
                mini_map: ASSET + '/mini-map.png',
                errMsg: '',
                frmHasErr: false,
                isLoading: false
            }
        },
        computed: {
            region: function() {
                this.$store.dispatch('maps/searchRegion',this.$route.params.uuid)
                return this.$store.getters['maps/getSelected']
            },
            username: function() {
                return this.$store.getters['main/getUsername']
            },
            quiz: function() {
                this.$store.dispatch('maps/searchQuiz',this.$route.params.uuid)
                return this.$store.getters['maps/getQuiz']
            },
            selection: function() {
                this.$store.dispatch('maps/getChoices', this.quiz.quuid)
                return this.$store.getters['maps/getSelection']
            }
        },
        mounted() {

        },
        methods: {
            startQuiz() {
                this.isLoading = true
                console.log(this.$refs.form.validate('username'))
                setTimeout(() => {
                    this.isLoading = false
                    this.$refs.form.validate('username') ? this.$router.push('/quiz/'+this.region.uuid+'/'+this.region.uuid) : ''

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
