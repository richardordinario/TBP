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
                    @click="backBtn"
                    >
                    <v-icon left>mdi-arrow-left</v-icon>
                    {{region.title}}
                    </v-btn>
                <v-spacer></v-spacer>
                <p v-if="username" class="white--text ma-5 text-subtitle-1">Score: {{score}} pts.</p>
            </v-app-bar>
            <v-main>
                <div v-if="!ended">
                    <RegisterUser v-if="!username" :region="region" :uuid="region.uuid"/>
                    <QuizPanel v-else :quiz="quiz" :selection="selection" :uuid="region.uuid"/>
                </div>
                <div v-else>
                    <Score :score="score"/>
                </div>

            </v-main>
            <v-btn
            bottom
            absolute
            x-large
            v-if="username"
            :style="{left: '50%', transform:'translateX(-50%)', background: 'rgba(0,0,0,0.5)'}"
            class="text-center white--text text-body-2 pa-5"
            > Drag and drop each attactions to their respective city.
            </v-btn>

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
                "
                >
                <img :src="mini_map" alt="map" class="img-fluid">
                </v-btn>
            </router-link>
        </section>
        <v-dialog
        v-model="dialog"
        max-width="290"
       >
        <v-card>
            <v-card-text class="text-center pa-5">
                <div class="text-h5">Quit Trivia Quiz?</div>
                <span class="text-subtitle-1">Your progress will not be saved.</span>
            </v-card-text>
            <v-card-actions class="justify-center mb-2">
                <v-btn
                  @click.stop="dialog = false"
                  class="mx-2"
                >
                    Cancel
                </v-btn>
                <router-link :to="'/region/'+ region.uuid">
                    <v-btn color="red white--text" class="mx-2">Quit</v-btn>            
                </router-link>
            </v-card-actions>
        </v-card>

        </v-dialog>
    </v-app>
</template>

<script>
    import RegisterUser from './RegisterUser.vue'
    import QuizPanel from './QuizPanel.vue'
    import Score from './Score.vue'

    export default {
        components: {
            RegisterUser,
            QuizPanel,
            Score,
        },
        data() {
            return {
                logo: ASSET + '/startLogo.svg',
                mini_map: ASSET + '/mini-map.png',
                errMsg: '',
                frmHasErr: false,
                isLoading: false,
                dialog: false
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
            },
            score: function() {
                return this.$store.getters['maps/getScore']
            },
            ended: function() {
                return this.$store.getters['main/getIsEnded']
            }
        },
        mounted() {
            this.disableRef()
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
            },
            backBtn() {
                if(this.username) {
                    this.dialog = true
                }else{
                    this.$router.push('/region/'+this.region.uuid)
                }
            },
            disableRef() {
                // window.onload = function () {
                //     document.onkeydown = function (e) {
                //         return (e.which || e.keyCode) != 116;
                //     };
                //     document.addEventListener('contextmenu', event => event.preventDefault());
                // }
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
