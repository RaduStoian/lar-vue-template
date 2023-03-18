<template>
	<div class="modal-container" v-if="global_overlay.type">
		<div class="overlay">
		</div>

        <div class="modal info-button" v-if="global_overlay.type == 'info-button'">

            <span class="close" @click="closeOverlay()">x</span>

            <p>{{ global_overlay.text }}</p>

        </div>

	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'global-overlay',

        data: function() {
            return {
                value:'',
            }
        },
        computed: {
            global_overlay() {
                return this.$store.state.global_overlay.global_overlay;
            },
            editingPost() {
                return this.$store.state.editingPost.politician;
            },
        },
		methods: {
            ...mapActions({
                setUser: 'user/setUser',
                setSpinner: 'spinner/setSpinner',
                setOverlay: 'global_overlay/setOverlay',
                closeOverlay: 'global_overlay/closeOverlay',
            }),
            setCookieBanner() { // if no cookie, show banner
                if (!this.getCookie('cookie-options')) {
                    let data = {
                        type: 'cookie-banner',
                        error: false,
                    }
                    this.setOverlay(data);
                }
            },
            getCookie(cname) { // check if there's cookie
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return false;
            },
		},
		beforeDestroy() {
		},
		mounted() {
            //this.setCookieBanner();
		}
    }
</script>

<style lang="scss" scoped>
@import '../../../sass/variables.scss';

.modal-container {
	width:100vw;
	height:100vh;
	position:fixed;
	left:0;
	top:0;
    z-index: 100;
}

.overlay {
	background: black;
	opacity:0.5;
	width:100vw;
	height:100vh;
	position:fixed;
	left:0;
	top:0;
	z-index: 1;
}
.modal {
	background:white;
	padding:2rem;
	max-width: 500px;
	min-width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	text-align: center;
	z-index: 3;
    border-radius:5px;
    box-sizing: border-box;

    &.info-button {
        white-space: pre-wrap;
        text-align: left;
    }

	.button {
		margin: 0 1rem;
	}
    .close {
        position: absolute;
        right: 1rem;
        top: 0rem;
        font-size: 2rem;
        cursor: pointer;
    }
}
</style>
