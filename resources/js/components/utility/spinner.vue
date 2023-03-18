<template>
    <div class="spinner-container">
        <div class="spinner"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'spinner',

        data: function() {
            return {
                value:'',
            }
        },
        computed: {
            spinnerVisible() {
                return this.$store.state.spinnerVisible;
            },
        },
		methods: {
		},
    }
</script>

<style lang="scss" scoped>
@import '../../../sass/variables.scss';

  /* Create a spinner using a border animation */
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }


.spinner-container {
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    z-index: 999;
    background-color: rgba(0,0,0, 0.5);
}

  .spinner {
    border: 5px solid $primary-soft;
    border-top: 5px solid transparent;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spinner 0.75s linear infinite;
    display:inline-block;
    position: absolute;
    top:50%;
    left:50%;
  }
</style>
