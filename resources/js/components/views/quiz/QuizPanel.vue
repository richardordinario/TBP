<template>
    <div>
        <div class="container">
            <div class="row justify-content-center" :class="{'rowTop': !$vuetify.breakpoint.smAndDown}">
                <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row justify-content-center">
                        <div class="col-md-3 col-sm-12 mx-auto">
                            <div class="row justify-content-center">
                                <div v-for="(choice, key) in choices" :key="key" class=" col-md-6 col-sm-2">
                                    <v-card
                                    max-height="200px">
                                    <v-img
                                    :src="choice.img"
                                    height="100"
                                    >
                                    </v-img>
                                        <v-card-text class="pa-1 py-1">
                                            <p class="text-caption text-center black--text pb-0 mb-0">{{choice.name}}</p>
                                        </v-card-text>
                                    </v-card>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 col-sm-2">
                            <center>
                                <img :src="quiz.map" alt=""
                                class="img-fluid"
                                >
                            </center>
                        </div>
                        <div class="col-md-3 col-sm-10">

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
                choices: []
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
            }
        },
        mounted() {
            this.choices = this.shuffle(this.selection.choices)
            console.log(this.choices)
        }
    }
</script>

<style  scoped>
.rowTop {
    margin-top: 100px;
}
</style>
