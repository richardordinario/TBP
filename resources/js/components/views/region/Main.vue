<template>
    <v-app id="inspire">
        <v-navigation-drawer app
        :class="{'sm-drawer': $vuetify.breakpoint.xs}"
        width="500px"
        v-model="drawer">
        <SideNav :region="region"/>
        </v-navigation-drawer>
        <v-main>
            <v-btn
            x-small
            text
            elevation="0"
            absolute
            class="close-drawer white--text"
            @click.stop="drawer = !drawer"
            >
            <v-icon class="pl-2" v-if="drawer">mdi-chevron-left</v-icon>
            <v-icon class="pl-2" v-else>mdi-chevron-right</v-icon>
            </v-btn>
            <iframe src="https://www.youtube.com/embed/ADNgEHFDYzo" class="responsive-iframe"></iframe>
        </v-main>
    </v-app>

</template>

<script>
    import SideNav from './Sidenav.vue'
    export default {
        components: {
            SideNav
        },
        data() {
            return {
                drawer: null,
            }
        },
        computed: {
            region: function() {
                this.$store.dispatch('maps/searchRegion',this.$route.params.uuid)
                return this.$store.getters['maps/getSelected']
            }
        },
        mounted() {
            localStorage.setItem('username', '')
            this.$store.commit('main/SET_USERNAME', '')
            this.$store.commit('main/SET_END', false)
        },
        methods: {
            getSelected(id) {
                this.$store.dispatch('maps/searchRegion',id)
                this.region = this.$store.getters['maps/getSelected']
            }
        }
    }
</script>

<style  scoped>
.close-drawer {
    background-color: rgba(0,0,0,0.5) !important;
    padding: -10px !important;
    margin: -10px !important;
    height: 100px !important;
    width: 5px !important;
    margin-top: 100px !important;
    z-index: 5;
}
.sm-drawer {
    width: 400px !important;
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
