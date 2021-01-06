<template>
    <section class="main-banner">
        <v-container >
            <v-row>
                <v-col cols="4">
                    <v-img :src="require('../img/logo.png')" height="50px" width="50px"></v-img>
                </v-col>
                <v-col cols="8">
                    <v-card>
                        <v-img :src="require('../img/map.svg')"></v-img>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.main-banner {
    background-image: url('../img/bg1.png');
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
