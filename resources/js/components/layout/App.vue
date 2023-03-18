<template>
    <div class="root">
        <app-header />

        <div class="main">
            <router-view /> <!-- This takes care of the routes and components -->
        </div>

        <app-footer />

        <global-overlay />

        <spinner v-if="loading"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'app',
    data() {
        return {
            initiated: false,
            overlay_type: false,
            overlay_text: false,
            overlay_error: false,
        }
    },
    computed: {
        loading() {
            return this.$store.state.spinner.spinnerVisible;
        },
        route() {
            return this.$store.state.route.route;
        },
        global_overlay() {
            return this.$store.state.global_overlay.global_overlay;
        },
    },
    methods: {
        ...mapActions({
            setUser: 'user/setUser',
            setSpinner: 'spinner/setSpinner',
        }),
        // Set the user
        init() {
            axios.get('/auth/init').then( response => {
                this.setUser(response.data.user);
                this.initiated = true;
            })
        }
    },
    mounted() {
        this.init();
        this.$root.$on('updateUser', this.init);
    }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/variables.scss';

    .root {
        background-color: $color-off-white;
        font-family: $font-family-sans-serif;
    }
</style>
