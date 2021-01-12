<template>
    <div>
        <div class="container">
            <div class="row justify-content-center" :class="{'rowTop': !$vuetify.breakpoint.smAndDown}">
                <div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-content-center">
                        <div class="col-md-3 col-sm-12 mx-auto">
                            <div class="row justify-content-center">
                                <div v-for="(choice, key) in choices" :key="key" class=" col-md-6 col-sm-2">
                                    <v-card
                                    :id="choice.id"
                                    :loading="loading"
                                    draggable
                                    @dragstart="dragStart"
                                    @dragend="dragEnd"
                                    @dragover.stop
                                    max-height="200px">
                                    <v-img
                                    :src="choice.img"
                                    height="100"
                                    >
                                    <template slot="progress">
                                        <v-progress-linear
                                            color="teal"
                                            height="10"
                                            indeterminate
                                        ></v-progress-linear>
                                    </template>
                                    </v-img>
                                        <v-card-text class="pa-1 py-1">
                                            <p class="text-caption text-center black--text pb-0 mb-0">{{choice.name}}</p>
                                        </v-card-text>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-2">
                            <center>
                                <img :src="quiz.map" alt=""
                                class="img-fluid mt-5 pt-5"
                                >
                            </center>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-10">
                            <div class="row">
                                <div v-for="(question, i) in quiz.questions" :key="i" class="col-md-6">
                                    <v-card
                                    color="transparent"
                                    class="white--text"
                                    elevation="0"
                                    >
                                        <v-card-title>
                                            <div class="text-overline">
                                                {{question.question}}
                                            </div>
                                        </v-card-title>
                                        <v-card-text
                                        :id="question.question"
                                        @drop="drop"
                                        @dragover.prevent
                                        class="pa-5 d-flex"
                                        >
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn
                                            text
                                            text-center
                                            block
                                            xs-small
                                            class="white--text text-caption">
                                            Drop Here!
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quiz: Object,
            selection: Object,
            uuid: String
        },
        data() {
            return {
                loading: false,
                choices: [],
                dragSet: true,
                answer: {
                    cardID: null,
                    qName: null,
                },
                dropCount: 0
            }
        },
        methods: {
           shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            },
            dragStart(e) {
                const target = e.target
                e.dataTransfer.setData('marker', target.id)
                setTimeout(() => {
                    target.style.display = "none"
                }, 0)
            },
            dragEnd(e) {
                const target = e.target
                target.style.display = "block"
            },
            drop(e) {
                const target = e.target
                const marker = e.dataTransfer.getData('marker')
                const card = document.getElementById(marker)

                //question name to avoid instance of the same id key
                this.answer.qName = target.id

                //card image id
                this.answer.cardID = card.getAttribute('id')
                card.setAttribute('draggable', false)

                card.style.display = "block"
                card.style.marginRight = "10px"

                this.$store.dispatch('maps/checkAnswer', this.answer)
                this.$store.getters['maps/getAnswer'] ? card.style.backgroundColor = "#78e08f" : card.style.backgroundColor = "#e55039"

                target.appendChild(card)

                this.dropCount += 1
                if(this.dropCount == this.choices.length) {
                    this.loading = true
                    setTimeout(() => {
                        this.loading = false
                        this.$store.commit('main/SET_END', true)
                    }, 3000)
                }

            },

        },
        mounted() {
            this.choices = this.shuffle(this.selection.choices)
            console.log(this.choices.length)
        }
    }
</script>

<style  scoped>
.rowTop {
    margin-top: 100px;
}
</style>
